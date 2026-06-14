import React from 'react';

// Hardcoded (Letterboxd has no public favorites API). Posters are self-hosted under
// public/images/films/ — sourced from Wikipedia, mixed .png/.jpg so each item keeps
// its real filename. The whole widget links to the Letterboxd profile.
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
  <div className="mt-8">
    {/* Header — pixel label + tick + arrow, matching the section/now-playing idiom */}
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-4 inline-flex items-center gap-2 font-pixel text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors cursor-none"
    >
      <span className="text-white/40">▸</span>
      Favorite Films
      <span className="text-gray-600 group-hover:text-white transition-colors">→</span>
    </a>

    {/* Poster grid — fills the container width, full color, 1px border,
        hover brighten + glow + lift (motion-safe) */}
    <div className="grid grid-cols-4 gap-2.5">
      {films.map((f) => (
        <a
          key={f.file}
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          title={`${f.title} (${f.year})`}
          className="group block cursor-none"
        >
          <img
            src={`${BASE}images/films/${f.file}`}
            alt={f.title}
            width={200}
            height={300}
            loading="lazy"
            className="w-full aspect-[2/3] object-cover border border-white/15 transition-all duration-300 group-hover:border-white/40 group-hover:brightness-110 group-hover:[box-shadow:0_0_12px_rgba(255,255,255,0.25)] motion-safe:group-hover:-translate-y-1"
          />
        </a>
      ))}
    </div>
  </div>
);

export default FavoriteFilms;
