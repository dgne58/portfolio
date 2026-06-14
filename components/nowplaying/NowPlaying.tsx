import React from 'react';
import './nowplaying.css';
import { useNowPlaying } from './useNowPlaying';

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

/**
 * Last.fm "now playing" strip for the Get in touch section. Spans the full container
 * width (album + info on the left, source tag on the right) and links to the profile.
 * Renders nothing on hard error so the section degrades gracefully.
 */
const NowPlaying: React.FC = () => {
  const { status, track } = useNowPlaying();

  if (status === 'error') return null;

  const isPlaying = status === 'playing';

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Last.fm — ts6ki"
      className="group mt-8 flex w-full items-center justify-between gap-3 cursor-none"
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Album art (square, 1px border) */}
        <div className="w-10 h-10 shrink-0 border border-white/15 bg-white/[0.03] overflow-hidden group-hover:border-white/40 transition-colors">
          {track?.image && (
            <img
              src={track.image}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="min-w-0">
          {/* Label row: equalizer + NOW PLAYING, or square block + LAST PLAYED */}
          <div className="flex items-center gap-2 font-pixel text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
            {isPlaying ? (
              <>
                <Equalizer /> Now Playing
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-white transition-colors" /> Last Played
              </>
            )}
          </div>

          {/* Track line */}
          <div className="mt-1 font-mono text-xs text-gray-300 truncate group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.45)] transition-all">
            {status === 'loading' ? (
              <span className="text-gray-500">♪ …</span>
            ) : track ? (
              <>
                {track.name} <span className="text-gray-500">—</span> {track.artist}
                {!isPlaying && track.playedAt && (
                  <span className="text-gray-600"> · {relativeTime(track.playedAt)}</span>
                )}
              </>
            ) : (
              <span className="text-gray-500">nothing scrobbled yet</span>
            )}
          </div>
        </div>
      </div>

      {/* Source tag — pushed to the right edge to fill the container width */}
      <span className="shrink-0 font-pixel text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
        last.fm ↗
      </span>
    </a>
  );
};

export default NowPlaying;
