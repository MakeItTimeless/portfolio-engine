'use client';

import { useState, useEffect } from 'react';
import { Terminal, Layers, Disc } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('playground');
  const [systemTime, setSystemTime] = useState('00:00:00');

  // TRACK ACTIVE SECTION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // CLOCK
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
    { id: 'activities', label: 'ECOSYSTEM', code: '0x05' },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[88px] bg-black border-r border-neutral-900 z-50 flex-col items-center justify-between py-6 font-mono">

        {/* TOP */}
        <div className="flex flex-col items-center">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="flex flex-col items-center gap-2"
          >
            <div className="w-11 h-11 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>

            <span className="text-[8px] tracking-[0.25em] text-neutral-500 uppercase font-bold">
              SRIJANI
            </span>
          </button>
        </div>

        {/* CENTER NAV */}
        <div className="flex flex-col items-center gap-10 flex-1 justify-center">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="flex flex-col items-center"
            >
              {/* CODE */}
              <span
                className={`text-[9px] font-bold mb-6 transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-emerald-400'
                    : 'text-neutral-700'
                }`}
              >
                {link.code}
              </span>

              {/* ROTATED LABEL */}
              <div className="h-[120px] w-[20px] flex items-center justify-center">

                <span
                  className={`text-[9px] uppercase font-bold whitespace-nowrap transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-neutral-500'
                  }`}
                  style={{
                    transform: 'rotate(-90deg)',
                    letterSpacing: '0.28em',
                  }}
                >
                  {link.label}
                </span>

              </div>
            </button>
          ))}

        </div>

        {/* BOTTOM CLOCK */}
        <div className="flex flex-col items-center gap-2">
          <Disc className="w-3 h-3 text-neutral-700 animate-spin" />

          <span className="text-[9px] text-neutral-600 font-bold tabular-nums">
            {systemTime}
          </span>
        </div>
      </aside>

      {/* MOBILE NAV */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 h-14 bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 rounded-2xl z-[100] shadow-2xl flex items-center justify-around px-2 font-mono">

        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full rounded-xl transition-all duration-300 ${
              activeSection === link.id
                ? 'text-emerald-400'
                : 'text-neutral-600'
            }`}
          >
            <Layers className="w-4 h-4 mb-1" />

            <span className="text-[7px] font-black tracking-tight">
              {link.label.split(' ')[0]}
            </span>
          </button>
        ))}

      </div>
    </>
  );
}