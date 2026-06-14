import { useEffect, useRef, useState } from 'react';

// Read-only Last.fm key, injected at build time via vite.config.ts `define`
// (mirrors the existing GEMINI_API_KEY pattern). Username is public.
const LASTFM_API_KEY = process.env.LASTFM_API_KEY as string | undefined;
const LASTFM_USER = 'ts6ki';
const ENDPOINT = 'https://ws.audioscrobbler.com/2.0/';
const POLL_MS = 30_000;
// Hash Last.fm serves when a track has no album art — treat as "no image".
const BLANK_ART_HASH = '2a96cbd8b46e442fc41c2b86b821562f';

export type NowPlayingStatus = 'loading' | 'playing' | 'recent' | 'error';

export interface NowPlayingTrack {
  name: string;
  artist: string;
  album: string;
  image: string | null;    // extralarge art, or null if placeholder/missing
  url: string;
  playedAt: number | null; // unix seconds; null while currently playing
}

export interface NowPlayingState {
  status: NowPlayingStatus;
  track: NowPlayingTrack | null;
}

interface LastfmImage { size: string; '#text': string; }
interface LastfmTrack {
  name: string;
  url: string;
  artist: { '#text': string };
  album: { '#text': string };
  image: LastfmImage[];
  '@attr'?: { nowplaying?: string };
  date?: { uts: string };
}

const pickImage = (images: LastfmImage[]): string | null => {
  const xl =
    images?.find(i => i.size === 'extralarge')?.['#text'] ||
    images?.[images.length - 1]?.['#text'] ||
    '';
  if (!xl || xl.includes(BLANK_ART_HASH)) return null;
  return xl;
};

const parseTrack = (t: LastfmTrack): NowPlayingTrack => ({
  name: t.name,
  artist: t.artist?.['#text'] ?? '',
  album: t.album?.['#text'] ?? '',
  image: pickImage(t.image),
  url: t.url,
  playedAt: t.date ? parseInt(t.date.uts, 10) : null,
});

/**
 * Polls Last.fm's user.getRecentTracks (limit=1) every 30s and reports whether the
 * most recent track is currently playing. Pauses while the tab is hidden, aborts
 * in-flight requests, and keeps the last good track on transient errors.
 */
export function useNowPlaying(): NowPlayingState {
  const [state, setState] = useState<NowPlayingState>({ status: 'loading', track: null });
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!LASTFM_API_KEY) {
      setState({ status: 'error', track: null });
      return;
    }

    let cancelled = false;
    const url =
      `${ENDPOINT}?method=user.getrecenttracks&user=${LASTFM_USER}` +
      `&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

    const fetchNow = async () => {
      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      try {
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) throw new Error(`Last.fm ${res.status}`);
        const json = await res.json();
        const t: LastfmTrack | undefined = json?.recenttracks?.track?.[0];
        if (!t) {
          if (!cancelled) setState({ status: 'recent', track: null });
          return;
        }
        const track = parseTrack(t);
        const playing = t['@attr']?.nowplaying === 'true';
        if (!cancelled) setState({ status: playing ? 'playing' : 'recent', track });
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        // Keep showing the last good track if we have one; otherwise mark error.
        if (!cancelled) setState(s => (s.track ? s : { status: 'error', track: null }));
      }
    };

    fetchNow();
    const timer = window.setInterval(() => {
      if (!document.hidden) fetchNow();
    }, POLL_MS);

    const onVisible = () => {
      if (!document.hidden) fetchNow();
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      cancelled = true;
      clearInterval(timer);
      abortRef.current?.abort();
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return state;
}
