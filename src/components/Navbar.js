'use client';
import { useState, useEffect } from 'react';
import { Terminal, Cpu, Layers, Disc, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [systemTime, setSystemTime] = useState('00:00:00');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setSystemTime(now.toTimeString().split(' ')[0]);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targets = ['playground', 'dependencies', 'story', 'projects', 'activities'];
    const observers = targets.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, { threshold: 0.2 });

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obj => {
        if (obj) obj.observer.unobserve(obj.el);
      });
    };
  }, []);

  const navLinks = [
    { id: 'playground', label: 'SANDBOX', code: '0x01' },
    { id: 'dependencies', label: 'MANIFEST', code: '0x02' },
    { id: 'story', label: 'JOURNEY', code: '0x03' },
    { id: 'projects', label: 'BLUEPRINTS', code: '0x04' },
    { id: 'activities', label: 'ECOSYSTEM', code: '0x05' }
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP ARCHITECTURE: YOUR ORIGINAL LEFT-BORDER FRAME                    */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-20 xl:w-24 bg-neutral-950 border-r border-neutral-900 z-50 flex-col justify-between items-center py-8 font-mono select-none">
        
        {/* TOP COMPONENT */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group cursor-pointer flex flex-col items-center gap-1 text-center"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-300 shadow-lg">
            <Terminal className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[8px] tracking-widest text-neutral-600 uppercase font-bold mt-1">SRIJANI</span>
        </div>

        {/* MIDDLE COMPONENT: ORIGINAL VERTICAL LINK TRAIL */}
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isCurrent = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="group relative flex flex-col items-center py-2 px-1 cursor-pointer"
                title={link.label}
              >
                <span className={`text-[9px] font-bold transition-colors duration-300 ${
                  isCurrent ? 'text-emerald-400' : 'text-neutral-700 group-hover:text-neutral-400'
                }`}>
                  {link.code}
                </span>

                <span className={`text-[9px] tracking-[0.2em] uppercase font-bold transition-all duration-300 mt-2 whitespace-nowrap [writing-mode:vertical-lr] ${
                  isCurrent ? 'text-white translate-y-0.5' : 'text-neutral-500 group-hover:text-neutral-300'
                }`}>
                  {link.label}
                </span>

                {isCurrent && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-3 bg-emerald-500 rounded-r shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* BOTTOM COMPONENT: YOUR ORIGINAL LIVE CLOCK TELEMETRY FEED */}
        <div className="flex flex-col items-center gap-2 text-center text-neutral-600 text-[9px] tracking-tighter">
          <Disc className="w-3 h-3 text-neutral-800 animate-spin [animation-duration:6s]" />
          <span className="font-bold tabular-nums">{systemTime}</span>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* FIXED TOP HEADER (Restored original aesthetic, removed text leak bug)    */}
      {/* ========================================================================= */}
      {/* Shifted left boundary (`left-20 xl:left-24`) to clear your cool sidebar cleanly */}
      <header className="hidden lg:block fixed top-0 left-20 xl:left-24 right-0 h-14 bg-neutral-950/40 backdrop-blur-sm border-b border-neutral-900/40 z-40 select-none font-mono">
        <div className="w-full h-full px-8 xl:px-12 flex items-center justify-between text-[10px]">
          
          {/* Left Side Info Blocks */}
          <div className="flex items-center gap-5 text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>NODE: <span className="text-neutral-300 font-bold">BANGALORE_CLUSTER</span></span>
            </div>
            <span className="text-neutral-800">|</span>
            <div className="flex items-center gap-1.5">
              <span>ENV:</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-900/60 text-emerald-400 font-bold text-[9px]">
                PRODUCTION
              </span>
            </div>
          </div>
          
          {/* Right Side Resource Relays */}
          <div className="flex items-center gap-6 text-neutral-400">
            <a 
              href="https://github.com/MakeItTimeless" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors group"
            >
              <span className="text-neutral-600 group-hover:text-emerald-500/60">//</span> github
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://www.linkedin.com/in/srijani-m-59a013249/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors group"
            >
              <span className="text-neutral-600 group-hover:text-emerald-500/60">//</span> linkedin
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* HANDHELD DECK: HUD DOCK (Mobile Layout remains completely safe)           */}
      {/* ========================================================================= */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 z-50 flex items-center justify-between px-4 sm:px-8 font-mono select-none">
        <div className="flex items-center gap-2 text-xs">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white tracking-tight">srijani_m</span>
          <span className="text-[9px] text-neutral-600">// core.engine</span>
        </div>
        
        <div className="flex items-center gap-2 bg-neutral-900 px-2 py-1 rounded border border-neutral-800 text-[8px] text-neutral-500 font-bold tracking-wider">
          <Cpu className="w-2.5 h-2.5 text-neutral-600 animate-pulse" />
          <span>SYS_STABLE</span>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 h-14 bg-neutral-950/80 backdrop-blur-xl border border-neutral-900 rounded-xl z-50 shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center justify-around px-2 font-mono select-none">
        {navLinks.map((link) => {
          const isCurrent = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`flex flex-col items-center justify-center p-1.5 rounded-lg flex-1 transition-all duration-200 ${
                isCurrent ? 'bg-neutral-900 border border-neutral-800 text-emerald-400 shadow-inner' : 'text-neutral-500 border border-transparent'
              }`}
            >
              <Layers className={`w-3.5 h-3.5 mb-1 ${isCurrent ? 'scale-110 text-emerald-400' : 'text-neutral-600'}`} />
              <span className={`text-[8px] font-black tracking-tight ${isCurrent ? 'text-white' : 'text-neutral-500'}`}>
                {link.label.slice(0, 5)}..
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}