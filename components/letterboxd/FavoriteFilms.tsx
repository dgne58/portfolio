import React from 'react';
import TuiPanel from '../tui/TuiPanel';
import Prompt from '../tui/Prompt';

const PROFILE_URL = 'https://letterboxd.com/shiv8m/';
const BASE = import.meta.env.BASE_URL;

interface Film {
  title: string;
  year: number;
  file: string;
}

const films: Film[] = [
  { title: '2001: A Space Odyssey', year: 1968, file: '2001-a-space-odyssey.jpg' },
  { title: 'Blade Runner', year: 1982, file: 'blade-runner.jpg' },
  { title: 'Vampire Hunter D: Bloodlust', year: 2000, file: 'vampire-hunter-d.jpg' },
  { title: 'Whiplash', year: 2014, file: 'whiplash.jpg' },
];

const FavoriteFilms: React.FC = () => (
  <TuiPanel title="~/favorite-films" rightTag={String(films.length)}>
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-5 flex items-center justify-between gap-3"
    >
      <Prompt command="ls ./favorites --posters" cursor={false} />
      <span className="hidden shrink-0 font-pixel text-[9px] uppercase tracking-[0.14em] text-gray-500 transition-colors group-hover:text-white sm:block">
        letterboxd ↗
      </span>
    </a>

    <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
      {films.map((film) => (
        <a
          key={film.file}
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          title={`${film.title} (${film.year})`}
          className="group block min-w-0"
        >
          <img
            src={`${BASE}images/films/${film.file}`}
            alt={film.title}
            width={200}
            height={300}
            loading="lazy"
            className="aspect-[2/3] w-full border border-white/15 object-cover transition-all duration-300 group-hover:border-white/40 group-hover:brightness-110 group-hover:[box-shadow:0_0_12px_rgba(255,255,255,0.25)] motion-safe:group-hover:-translate-y-1"
          />
          <span className="mt-2 hidden truncate font-pixel text-[8px] uppercase tracking-[0.08em] text-gray-600 transition-colors group-hover:text-gray-300 sm:block">
            {film.year} / {film.title}
          </span>
        </a>
      ))}
    </div>
  </TuiPanel>
);

export default FavoriteFilms;
