import React from 'react';
import './nowplaying.css';
import { useNowPlaying } from './useNowPlaying';
import TuiPanel from '../tui/TuiPanel';

const PROFILE_URL = 'https://www.last.fm/user/ts6ki';

const relativeTime = (uts: number): string => {
  const diff = Math.max(0, Math.floor(Date.now() / 1000 - uts));
  if (diff < 60) return 'just now';
  const mins = Math.floor(diff / 60);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
};

const Equalizer = () => (
  <span className="np-eq" aria-hidden="true">
    <span className="np-bar" />
    <span className="np-bar" />
    <span className="np-bar" />
  </span>
);

const NowPlaying: React.FC = () => {
  const { status, track } = useNowPlaying();

  if (status === 'error') return null;

  const isPlaying = status === 'playing';

  return (
    <TuiPanel title="~/now-playing">
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Last.fm - ts6ki"
        className="group block"
      >
        <div className="mb-3 flex items-center justify-between gap-3 font-pixel text-[9px] uppercase tracking-[0.14em] text-gray-500">
          <span className="flex items-center gap-2 transition-colors group-hover:text-white">
            {isPlaying ? <Equalizer /> : <span className="h-1.5 w-1.5 bg-gray-500 group-hover:bg-white" />}
            now-playing:
          </span>
          <span className="shrink-0 transition-colors group-hover:text-white">last.fm ↗</span>
        </div>

        <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3">
          <div className="h-10 w-10 overflow-hidden border border-white/15 bg-white/[0.03] transition-colors group-hover:border-white/40">
            {track?.image && (
              <img
                src={track.image}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="min-w-0 truncate text-xs text-gray-300 transition-all group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.45)]">
            {status === 'loading' ? (
              <span className="text-gray-500">reading recenttracks ...</span>
            ) : track ? (
              <>
                {track.name} <span className="text-gray-600">--</span> {track.artist}
                {!isPlaying && track.playedAt && (
                  <span className="text-gray-600"> / {relativeTime(track.playedAt)}</span>
                )}
              </>
            ) : (
              <span className="text-gray-500">nothing scrobbled yet</span>
            )}
          </div>
        </div>
      </a>
    </TuiPanel>
  );
};

export default NowPlaying;
