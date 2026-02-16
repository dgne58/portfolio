import React, { useEffect, useState, useRef } from 'react';
import { achievements, publications, specialThanks, bio, contact } from '../data/content';
import { Project } from '../types';
import ProjectPreviewTooltip from './ProjectPreviewTooltip';

// --- Icons ---
const ArrowSE = () => (
  <svg className="w-3 h-3 inline-block ml-1 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="7" x2="17" y2="17"></line>
    <polyline points="17 7 17 17 7 17"></polyline>
  </svg>
);

const ArrowNE = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3 h-3 inline-block ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const OverlayUI: React.FC = () => {
  const [previewState, setPreviewState] = useState<{ project: Project; top: number; height: number } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [temperature, setTemperature] = useState<number | null>(null);

  // Refs for animation loop
  const marqueeRef = useRef<HTMLHeadingElement>(null);
  const scrollYRef = useRef(0);
  const reqRef = useRef<number>(0);

  // Fetch projects data
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to load projects", err));
  }, []);

  // Visitor Count Logic - uses CounterAPI.dev V2 for persistent cross-user counting
  useEffect(() => {
    const workspace = 'shivam-majis-team-2734';
    const counterName = 'first-counter-2734';
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    const sessionKey = 'portfolio_counted_this_session';
    const cacheKey = 'portfolio_last_count';

    // Check if already counted this session (prevents counting refreshes)
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    const fetchCount = async () => {
      // Use cached count immediately for faster display
      const cachedCount = localStorage.getItem(cacheKey);
      if (cachedCount) setVisitorCount(parseInt(cachedCount, 10));

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        // Only increment if this is a new session
        const endpoint = alreadyCounted ? 'get' : 'up';
        const apiUrl = `https://api.counterapi.dev/v2/${workspace}/${counterName}/${endpoint}`;
        const res = await fetch(
          `${corsProxy}${encodeURIComponent(apiUrl)}`,
          { signal: controller.signal }
        );
        clearTimeout(timeout);

        if (!res.ok) throw new Error('API error');
        const json = await res.json();
        const count = json.data?.up_count ?? json.data?.count;

        if (count) {
          setVisitorCount(count);
          localStorage.setItem(cacheKey, count.toString());
          sessionStorage.setItem(sessionKey, 'true');
        }
      } catch (err) {
        // Only use fallback if we don't have a cached value
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

  // Get ordinal suffix for visitor count (1st, 2nd, 3rd, 4th, etc.)
  const getOrdinalSuffix = (n: number): string => {
    const lastTwo = n % 100;
    if (lastTwo >= 11 && lastTwo <= 13) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  // Fetch San Jose weather
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.3486&longitude=-121.9367&current_weather=true');
        const data = await res.json();
        setTemperature(Math.round(data.current_weather.temperature));
      } catch (err) {
        console.error("Weather fetch failed", err);
      }
    };
    fetchWeather();
  }, []);

  // Scroll Loop
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    
    const update = () => {
      if (marqueeRef.current) {
        // Move text based on scroll position
        const offset = scrollYRef.current * 0.35;
        marqueeRef.current.style.transform = `translateX(-${offset}px)`;
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const NavButton = ({ label, target }: { label: string, target: string }) => (
    <button 
      onClick={() => scrollToSection(target)} 
      className="group relative text-sm font-bold text-gray-400 hover:text-white transition-colors duration-300"
    >
      <span className="absolute -left-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-500">(</span>
      {label}
      <span className="absolute -right-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-500">)</span>
    </button>
  );

  const getDimClass = () => hoveredIndex !== null ? 'opacity-20 blur-[2px]' : 'opacity-100';

  return (
    <>
      <ProjectPreviewTooltip previewState={previewState} />

      {/* Hide default cursor since we have a custom one */}
      <div className="relative z-10 w-full text-[#f0f0f0] font-sans selection:bg-white selection:text-black cursor-none">
        
        {/* --- Fixed Navigation --- */}
        <nav className={`fixed top-0 left-0 w-full flex justify-between items-start px-6 py-6 md:px-12 mix-blend-difference z-50 transition-all duration-500 ${getDimClass()}`}>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-white">
            <div>©2026:<span className="text-gray-500">V.1</span></div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block font-mono text-xs">
             <span className="inline-block animate-[spin_4s_linear_infinite] opacity-60 text-white">
               ( + )
             </span>
          </div>

          <div className="flex gap-8">
            <NavButton label="PRJ" target="projects" />
            <NavButton label="WHO" target="about" />
            <NavButton label="MSG" target="contact" />
          </div>
        </nav>

        {/* --- Hero Section with Marquee --- */}
        <header className={`pt-32 pb-8 md:pt-48 md:pb-16 overflow-hidden w-full transition-all duration-500 ${getDimClass()}`}>
          {/* Scrolling Name */}
          <h1
            ref={marqueeRef}
            className="text-[16.5vw] leading-[0.75] font-bold uppercase tracking-tighter whitespace-nowrap will-change-transform text-[#f5f5f5]"
            style={{ transform: 'translateX(0px)', fontFamily: 'OffBit, sans-serif' }}
          >
            Shivam Maji
          </h1>

          {/* Intro Blurb */}
          <div className="px-6 md:px-12 mt-8 md:mt-12 max-w-lg">
            <p className="text-sm md:text-base font-medium leading-relaxed text-gray-200">
              I'm Shivam Maji, a <span className="text-white">Computer Engineering</span> and <span className="text-white">Mechanical Engineering</span> student at SCU.
            </p>
            {/* Visitor Count - Monochrome */}
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest opacity-80">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
                <span>You are the {visitorCount.toLocaleString()}{getOrdinalSuffix(visitorCount)} visitor</span>
            </div>
          </div>
        </header>

        {/* --- Projects Table Section --- */}
        <section id="projects" className="px-6 md:px-12 mb-32 md:mb-48">
          <div className={`text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2 flex items-center gap-2 transition-all duration-500 ${getDimClass()}`}>
            Selected Projects <ArrowSE />
          </div>

          <div className="w-full">
            {projects.length === 0 && (
              <div className="py-8 text-center text-gray-500 font-mono text-xs uppercase animate-pulse">Loading Projects Data...</div>
            )}
            {projects.map((project, i) => {
               const isHovered = hoveredIndex === i;
               const isDimmed = hoveredIndex !== null && !isHovered;
               
               return (
                  <a
                    key={i}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setPreviewState({ project, top: rect.top, height: rect.height });
                      setHoveredIndex(i);
                    }}
                    onMouseLeave={() => {
                      setPreviewState(null);
                      setHoveredIndex(null);
                    }}
                    className={`
                      group grid grid-cols-[50px_1fr_auto] md:grid-cols-[60px_120px_1fr_auto_100px] 
                      items-baseline py-6 border-b 
                      transition-all duration-500 gap-y-2 cursor-none
                      ${isHovered ? 'border-white opacity-100' : 'border-white/10'}
                      ${isDimmed ? 'opacity-20 blur-[1px]' : ''}
                      ${hoveredIndex === null ? 'hover:border-white/30' : ''}
                    `}
                  >
                    <span className={`text-xs font-mono transition-colors pointer-events-none ${isHovered ? 'text-white' : 'text-gray-500'}`}>
                      <span className="text-gray-500 opacity-60">//</span>{project.year}
                    </span>
                    
                    <span className={`text-xs font-mono hidden md:block pointer-events-none transition-colors ${isHovered ? 'text-white opacity-100' : 'text-gray-500 opacity-60'}`}>
                      {project.type}
                    </span>

                    <span className={`
                      text-xl md:text-3xl font-light uppercase tracking-tighter transition-all duration-300 col-span-2 md:col-span-1 pointer-events-none
                      ${isHovered ? 'text-white translate-x-4' : 'text-gray-200'}
                    `}>
                      {project.name}
                    </span>

                    <div className="hidden md:flex justify-end gap-2 text-[10px] font-mono text-gray-400 tracking-wider w-full text-right px-4 pointer-events-none">
                      {project.field?.map((item, idx) => (
                        <span key={idx}>({item})</span>
                      ))}
                    </div>

                    <div className="flex justify-end items-center pointer-events-none">
                      <span className={`
                        text-[10px] uppercase tracking-widest px-3 py-1 rounded transition-all flex items-center gap-2
                        ${isHovered ? 'text-white bg-white/10' : 'text-gray-400'}
                      `}>
                        Launch <ArrowNE />
                      </span>
                    </div>
                  </a>
               );
            })}
          </div>
        </section>

        {/* --- Footer Info Grid --- */}
        <section id="about" className={`px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 transition-all duration-500 ${getDimClass()}`}>
          
          <div className="md:col-span-5 flex flex-col gap-16">
            <div>
              <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2">
                Achievements <ArrowSE />
              </h3>
              <ul className="space-y-3">
                {achievements.map((item, i) => (
                  <li key={i} className="text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none">
                    <span className="text-gray-500 w-8">{item.count}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {publications.length > 0 && (
              <div>
                <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2">
                  Publications <ArrowSE />
                </h3>
                <ul className="space-y-3">
                  {publications.map((item, i) => (
                    <li key={i} className="text-sm font-mono text-gray-300 flex gap-6 group hover:text-white transition-colors cursor-none items-center">
                      <span className="w-8 flex items-center text-gray-500 group-hover:text-white transition-colors"><ArrowNE /></span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="decoration-1 underline-offset-4 group-hover:underline cursor-none">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2">
                Special thanks <ArrowSE />
              </h3>
              <ul className="space-y-3">
                {specialThanks.map((item, i) => (
                  <li key={i} className="text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none items-center">
                    <span className="w-8 flex items-center text-gray-500 group-hover:text-white transition-colors"><ArrowNE /></span>
                    {typeof item === 'string' ? (
                      <span>{item}</span>
                    ) : (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="decoration-1 underline-offset-4 hover:underline cursor-none">{item.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div id="contact">
              <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2">
                Get in touch <ArrowSE />
              </h3>
              <div className="text-sm font-mono text-gray-300 mb-6">
                <p>
                  Here several ways you can slide into my DMs. I'm currently working as a freelancer and open for collaborations long and short term.
                </p>
              </div>

              <ul className="space-y-3">
                {contact.socials.map((social, i) => (
                  <li key={i}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 cursor-none">
                       <span className="w-2 h-2 rounded-full transition-colors bg-gray-600 group-hover:bg-white"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  </li>
                ))}
                 <li>
                    <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 cursor-none">
                      <span className="w-2 h-2 bg-gray-600 group-hover:bg-white rounded-full transition-colors"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                        MAIL
                      </span>
                    </a>
                  </li>
              </ul>
            </div>
          </div>

          <div className="md:col-start-7 md:col-span-6 flex flex-col gap-24">
            <div>
              <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2">
                About <ArrowSE />
              </h3>
              <div className="text-xl md:text-3xl font-light leading-snug text-gray-200 space-y-8">
                {bio.map((paragraph, i) => (
                  <p key={i} className="hover:text-white transition-colors duration-500">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <footer className={`px-6 md:px-12 pb-8 flex justify-between items-end text-[10px] text-gray-500 font-mono tracking-widest transition-all duration-500 ${getDimClass()}`}>
           <div className="flex gap-6">
            <span>COORDS: 37.3486° N / 121.9367° W</span>
            <span className="hidden md:inline">TEMP: <span className="text-gray-300">{temperature !== null ? `${temperature}°C` : '...'}</span></span>
          </div>
          <div className="flex items-center">
             <span className="w-2 h-2 bg-white rounded-full inline-block animate-pulse mr-2 shadow-[0_0_5px_white]"></span>
             <span>ONLINE</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OverlayUI;