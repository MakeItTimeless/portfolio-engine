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

  const navLinks = [
    { id: 'playground', label: 'SANDBOX', code: '0x01' },
    { id: 'dependencies', label: 'MANIFEST', code: '0x02' },
    { id: 'story', label: 'JOURNEY', code: '0x03' },
    { id: 'projects', label: 'BLUEPRINTS', code: '0x04' },
    { id: 'activities', label: 'ECOSYSTEM', code: '0x05' }
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-24 bg-neutral-950 border-r border-neutral-900 z-50 flex-col justify-between items-center py-8 font-mono select-none">
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-[8px] tracking-widest text-neutral-600 uppercase font-bold mt-1">SRIJANI</span>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleScrollTo(link.id)} className="group relative flex flex-col items-center py-2 px-1">
              <span className={`text-[9px] font-bold ${activeSection === link.id ? 'text-emerald-400' : 'text-neutral-700'}`}>{link.code}</span>
              <span className={`text-[9px] tracking-[0.2em] uppercase font-bold mt-2 whitespace-nowrap [writing-mode:vertical-lr] ${activeSection === link.id ? 'text-white' : 'text-neutral-500'}`}>
                {link.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-neutral-600 text-[9px]">
          <Disc className="w-3 h-3 text-neutral-800 animate-spin" />
          <span className="font-bold tabular-nums">{systemTime}</span>
        </div>
      </aside>

      {/* MOBILE DOCK */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 h-14 bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 rounded-xl z-[100] shadow-2xl flex items-center justify-around px-2 font-mono select-none">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className={`flex flex-col items-center justify-center p-1 rounded-lg flex-1 ${activeSection === link.id ? 'text-emerald-400' : 'text-neutral-600'}`}
          >
            <Layers className="w-3.5 h-3.5 mb-0.5" />
            <span className="text-[7px] font-black tracking-tighter truncate max-w-[40px]">{link.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </>
  );
}