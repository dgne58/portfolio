import React, { useEffect, useRef, useState } from 'react';
import { achievements, publications, specialThanks, bio, contact } from '../data/content';
import { Project } from '../types';
import ProjectPreviewTooltip from './ProjectPreviewTooltip';
import NowPlaying from './nowplaying/NowPlaying';
import FavoriteFilms from './letterboxd/FavoriteFilms';
import AsciiBanner from './tui/AsciiBanner';
import Prompt from './tui/Prompt';
import StatusBar from './tui/StatusBar';
import TuiPanel from './tui/TuiPanel';

const ExternalArrow = () => <span aria-hidden="true">↗</span>;

const BootLine = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-[3.25rem_1fr] gap-2">
    <span className="text-white">[ {label} ]</span>
    <span className="text-gray-500">{children}</span>
  </div>
);

const OverlayUI: React.FC = () => {
  const [previewState, setPreviewState] = useState<{ project: Project; top: number; height: number } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [clock, setClock] = useState('');

  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeUnitRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const smoothOffsetRef = useRef(0);
  const reqRef = useRef<number>(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to load projects', err));
  }, []);

  useEffect(() => {
    const workspace = 'shivam-majis-team-2734';
    const counterName = 'first-counter-2734';
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    const sessionKey = 'portfolio_counted_this_session';
    const cacheKey = 'portfolio_last_count';
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    const fetchCount = async () => {
      const cachedCount = localStorage.getItem(cacheKey);
      if (cachedCount) setVisitorCount(parseInt(cachedCount, 10));

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const endpoint = alreadyCounted ? 'get' : 'up';
        const apiUrl = `https://api.counterapi.dev/v2/${workspace}/${counterName}/${endpoint}`;
        const res = await fetch(`${corsProxy}${encodeURIComponent(apiUrl)}`, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) throw new Error('API error');
        const json = await res.json();
        const count = json.data?.up_count ?? json.data?.count;

        if (count) {
          setVisitorCount(count);
          localStorage.setItem(cacheKey, count.toString());
          sessionStorage.setItem(sessionKey, 'true');
        }
      } catch {
        if (!cachedCount) {
          const storedCount = localStorage.getItem('portfolio_visitor_fallback');
          const count = (storedCount ? parseInt(storedCount, 10) : 14203) + (alreadyCounted ? 0 : 1);
          localStorage.setItem('portfolio_visitor_fallback', count.toString());
          setVisitorCount(count);
        }
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.3486&longitude=-121.9367&current_weather=true');
        const data = await res.json();
        setTemperature(Math.round(data.current_weather.temperature));
      } catch (err) {
        console.error('Weather fetch failed', err);
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const updateClock = () => {
      setClock(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date()));
    };
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    const update = () => {
      if (marqueeRef.current) {
        const target = scrollYRef.current * 0.35;
        smoothOffsetRef.current += (target - smoothOffsetRef.current) * 0.08;
        const unitWidth = marqueeUnitRef.current?.getBoundingClientRect().width ?? 0;
        const loopOffset = unitWidth > 0 ? smoothOffsetRef.current % unitWidth : smoothOffsetRef.current;
        marqueeRef.current.style.transform = `translateX(-${loopOffset}px)`;
      }
      reqRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    reqRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(reqRef.current);
    };
  }, []);

  const getOrdinalSuffix = (n: number): string => {
    const lastTwo = n % 100;
    if (lastTwo >= 11 && lastTwo <= 13) return 'th';
    if (n % 10 === 1) return 'st';
    if (n % 10 === 2) return 'nd';
    if (n % 10 === 3) return 'rd';
    return 'th';
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getDimClass = () => hoveredIndex !== null ? 'opacity-20 blur-[2px]' : 'opacity-100';

  const NavButton = ({ label, target }: { label: string; target: string }) => (
    <button
      onClick={() => scrollToSection(target)}
      className="text-gray-400 transition-all hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.6)]"
    >
      [{label}]
    </button>
  );

  return (
    <>
      <ProjectPreviewTooltip previewState={previewState} />

      <div className="relative z-10 w-full cursor-none font-mono text-[#f0f0f0] selection:bg-white selection:text-black">
        <nav className={`fixed inset-x-0 top-0 z-50 mix-blend-difference transition-all duration-500 ${getDimClass()}`}>
          <StatusBar position="top" className="h-9 justify-between px-3 md:px-6">
            <div className="flex min-w-0 items-center gap-2 md:gap-3">
              <span className="shrink-0 bg-white px-2 py-1 text-black">NORMAL</span>
              <span className="hidden sm:inline">shivam-os 1.0</span>
              <span className="tui-status-separator hidden sm:inline">│</span>
              <div className="flex items-center gap-2">
                <NavButton label="prj" target="projects" />
                <NavButton label="who" target="about" />
                <NavButton label="msg" target="contact" />
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 md:gap-3">
              <span className="hidden md:inline">tty1</span>
              <span className="tui-status-separator hidden md:inline">│</span>
              <time>{clock || '--:--:--'}</time>
            </div>
          </StatusBar>
        </nav>

        <header className={`w-full overflow-hidden pb-20 pt-24 transition-all duration-500 md:pb-28 md:pt-32 ${getDimClass()}`}>
          <div className="px-4 md:px-12">
            <div className="mb-8 font-pixel text-[9px] uppercase leading-5 tracking-[0.12em] md:text-[10px]">
              <BootLine label="ok">mounted /dev/portfolio</BootLine>
              <BootLine label="ok">loaded tui.session</BootLine>
              <BootLine label="ok">network online</BootLine>
            </div>
          </div>

          <div
            ref={marqueeRef}
            className="flex w-max will-change-transform"
            style={{ transform: 'translateX(0px)' }}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                ref={index === 0 ? marqueeUnitRef : undefined}
                className="shrink-0"
              >
                <AsciiBanner className="px-4 md:px-12" ariaHidden={index > 0} />
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl px-4 md:mt-14 md:px-12">
            <Prompt command="whoami" className="mb-5" />
            <div className="tui-command-output">
              <p className="text-sm font-medium leading-relaxed text-gray-300 md:text-base">
                Shivam Maji, a <span className="text-white">Computer Engineering</span> and{' '}
                <span className="text-white">Mechanical Engineering</span> student at SCU.
              </p>
              <div className="mt-5 flex items-center gap-3 font-pixel text-[9px] uppercase tracking-[0.14em] text-gray-500 md:text-[10px]">
                <span className="h-2 w-2 animate-pulse bg-white shadow-[0_0_8px_white]" />
                <span>
                  session #{visitorCount.toLocaleString()}
                  {getOrdinalSuffix(visitorCount)} visitor
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="space-y-24 px-4 pb-24 md:space-y-32 md:px-12 md:pb-32">
          <section id="projects" className="scroll-mt-16">
            <TuiPanel
              title="~/selected-projects"
              rightTag={projects.length ? String(projects.length) : '...'}
              contentClassName="!p-0"
            >
              <div className="border-b border-white/10 px-3 py-3 font-pixel text-[8px] uppercase tracking-[0.14em] text-gray-600 md:grid md:grid-cols-[4rem_8rem_1fr_12rem_4rem] md:px-5 md:text-[9px]">
                <span>mode</span>
                <span className="hidden md:block">type</span>
                <span className="hidden md:block">name</span>
                <span className="hidden md:block">tags</span>
                <span className="hidden md:block text-right">link</span>
              </div>

              {projects.length === 0 && (
                <div className="px-4 py-8 font-pixel text-[10px] uppercase tracking-widest text-gray-500 animate-pulse">
                  reading ./data/projects.json ...
                </div>
              )}

              {projects.map((project, i) => {
                const isHovered = hoveredIndex === i;
                const isDimmed = hoveredIndex !== null && !isHovered;

                return (
                  <a
                    key={`${project.year}-${project.name}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(event) => {
                      const rect = event.currentTarget.getBoundingClientRect();
                      setPreviewState({ project, top: rect.top, height: rect.height });
                      setHoveredIndex(i);
                    }}
                    onMouseLeave={() => {
                      setPreviewState(null);
                      setHoveredIndex(null);
                    }}
                    className={`group grid min-w-0 grid-cols-[3rem_minmax(0,1fr)_2rem] items-center gap-2 border-b border-white/10 px-3 py-5 transition-all duration-500 last:border-b-0 md:grid-cols-[4rem_8rem_minmax(0,1fr)_12rem_4rem] md:px-5 ${
                      isHovered ? 'border-white/50 bg-white/[0.04] text-white' : ''
                    } ${isDimmed ? 'opacity-20 blur-[1px]' : ''}`}
                  >
                    <span className="font-pixel text-[9px] text-gray-500 transition-colors group-hover:text-white md:text-[10px]">
                      -rwx/{project.year}
                    </span>
                    <span className="hidden truncate font-pixel text-[9px] uppercase text-gray-500 md:block">
                      {project.type}
                    </span>
                    <span className="min-w-0 truncate text-sm uppercase tracking-tight text-gray-200 transition-all group-hover:translate-x-1 group-hover:text-white group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.4)] md:text-lg">
                      {project.name}
                    </span>
                    <span className="hidden truncate font-pixel text-[9px] uppercase text-gray-500 md:block">
                      {project.field?.map((field) => `(${field.toLowerCase()})`).join(' ')}
                    </span>
                    <span className="text-right font-pixel text-[11px] text-gray-500 transition-colors group-hover:text-white">
                      [<ExternalArrow />]
                    </span>
                  </a>
                );
              })}
            </TuiPanel>
          </section>

          <section className={`grid grid-cols-1 gap-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8 ${getDimClass()}`}>
            <div className="space-y-10 lg:col-span-5">
              <TuiPanel title="~/achievements" rightTag={String(achievements.length)}>
                <Prompt command="ls -la ./achievements" cursor={false} className="mb-5" />
                <ul className="space-y-3">
                  {achievements.map((item) => (
                    <li key={item.name} className="grid grid-cols-[3.5rem_1fr] gap-3 text-sm text-gray-300 transition-colors hover:text-white">
                      <span className="font-pixel text-gray-500">{item.count}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </TuiPanel>

              <TuiPanel title="~/special-thanks" rightTag={String(specialThanks.length)}>
                <Prompt command="cat CREDITS" cursor={false} className="mb-5" />
                <ul className="space-y-3">
                  {specialThanks.map((item) => {
                    const name = typeof item === 'string' ? item : item.name;
                    return (
                      <li key={name} className="flex gap-3 text-sm text-gray-300 transition-colors hover:text-white">
                        <span className="text-gray-600">*</span>
                        {typeof item === 'string' ? (
                          <span>{item}</span>
                        ) : (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {item.name} <ExternalArrow />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </TuiPanel>

              <div id="contact" className="scroll-mt-16">
                <TuiPanel title="~/contact">
                <Prompt command="cat contact.txt" cursor={false} className="mb-5" />
                <div className="tui-command-output">
                  <p className="mb-7 text-sm leading-relaxed text-gray-300">
                    Here are several ways you can slide into my DMs. I am currently working as a freelancer and open for collaborations, long and short term.
                  </p>
                  <ul className="space-y-3">
                    {contact.socials.map((social) => (
                      <li key={social.name}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                          <span className="text-gray-600 group-hover:text-white">-&gt;</span>
                          <span className="font-pixel text-[10px] uppercase tracking-widest text-gray-400 transition-all group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.55)]">
                            {social.name} <ExternalArrow />
                          </span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={`mailto:${contact.email}`} className="group flex items-center gap-3">
                        <span className="text-gray-600 group-hover:text-white">-&gt;</span>
                        <span className="font-pixel text-[10px] uppercase tracking-widest text-gray-400 transition-all group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.55)]">
                          mail: {contact.email}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </TuiPanel>
              </div>

              <NowPlaying />

              {publications.length > 0 && (
                <TuiPanel title="~/publications" rightTag={String(publications.length)}>
                  <ul className="space-y-3">
                    {publications.map((item) => (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex gap-3 text-sm text-gray-300 hover:text-white">
                          <ExternalArrow />
                          <span className="group-hover:underline">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </TuiPanel>
              )}
            </div>

            <div className="space-y-10 self-start lg:col-start-7 lg:col-span-6">
              <TuiPanel
                title="cat ~/about.txt"
                className="scroll-mt-16"
                contentClassName="space-y-7"
              >
                <div id="about" className="scroll-mt-16">
                  <Prompt command="cat about.txt" cursor={false} />
                </div>
                <div className="tui-command-output space-y-6 text-base font-light leading-relaxed text-gray-300 md:text-xl">
                  {bio.map((paragraph) => (
                    <p key={paragraph} className="transition-colors duration-300 hover:text-white">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </TuiPanel>

              <FavoriteFilms />
            </div>
          </section>
        </main>

        <footer className={`transition-all duration-500 ${getDimClass()}`}>
          <StatusBar className="min-h-9 flex-wrap justify-between px-3 py-2 md:px-6">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="bg-white px-2 py-1 text-black">portfolio</span>
              <span className="hidden sm:inline">37.3486°n/121.9367°w</span>
              <span className="tui-status-separator hidden sm:inline">│</span>
              <span>{temperature !== null ? `${temperature}°c` : '--°c'}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="flex items-center gap-2 text-gray-300">
                <span className="h-1.5 w-1.5 animate-pulse bg-white shadow-[0_0_5px_white]" />
                online
              </span>
              <span className="tui-status-separator">│</span>
              <span>utf-8</span>
              <span className="tui-status-separator hidden sm:inline">│</span>
              <span className="hidden sm:inline">100%</span>
            </div>
          </StatusBar>
        </footer>
      </div>
    </>
  );
};

export default OverlayUI;
