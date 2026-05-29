// 'use client';

// import { useState, useEffect } from 'react';
// import { Terminal, Layers, Disc } from 'lucide-react';

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState('playground');
//   const [systemTime, setSystemTime] = useState('00:00:00');

//   // Track active section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.6,
//       }
//     );

//     const sections = document.querySelectorAll('section, div[id]');

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Clock logic
//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       setSystemTime(now.toTimeString().split(' ')[0]);
//     };

//     updateClock();

//     const interval = setInterval(updateClock, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const navLinks = [
//     { id: 'playground', label: 'SANDBOX', code: '0x01' },
//     { id: 'dependencies', label: 'MANIFEST', code: '0x02' },
//     { id: 'story', label: 'JOURNEY', code: '0x03' },
//     { id: 'projects', label: 'BLUEPRINTS', code: '0x04' },
//     { id: 'activities', label: 'ECOSYSTEM', code: '0x05' },
//   ];

//   const handleScrollTo = (id) => {
//     const element = document.getElementById(id);

//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <>
//       {/* DESKTOP SIDEBAR */}
// {/* DESKTOP SIDEBAR */}
// <aside
//   className="
//     hidden lg:flex
//     fixed top-0 left-0 h-screen
//     w-[88px]
//     bg-neutral-950/95
//     backdrop-blur-xl
//     border-r border-neutral-900
//     z-50
//     flex-col items-center
//     font-mono select-none

//     transition-transform duration-500 ease-in-out

//     -translate-x-[72px]
//     hover:translate-x-0
//   "
// >
//         {/* TOP LOGO */}
//         <div className="pt-8 flex flex-col items-center">
//           <div
//             onClick={() =>
//               window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth',
//               })
//             }
//             className="cursor-pointer flex flex-col items-center gap-1"
//           >
//             <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
//               <Terminal className="w-4 h-4 text-emerald-400" />
//             </div>

//             <span className="text-[8px] tracking-widest text-neutral-600 uppercase font-bold mt-1">
//               SRIJANI
//             </span>
//           </div>
//         </div>

//         {/* CENTER NAVIGATION */}
//         <div className="flex-1 flex items-center justify-center w-full">
//           <div className="flex flex-col items-center gap-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => handleScrollTo(link.id)}
//                 className="group flex flex-col items-center"
//               >
//                 {/* CODE */}
//                 <span
//                   className={`text-[9px] font-bold leading-none transition-colors duration-300 ${
//                     activeSection === link.id
//                       ? 'text-emerald-400'
//                       : 'text-neutral-700'
//                   }`}
//                 >
//                   {link.code}
//                 </span>

//                 {/* VERTICAL LABEL */}
//                 <span
//                   className={`text-[9px] tracking-[0.22em] uppercase font-bold mt-2 whitespace-nowrap [writing-mode:vertical-lr] rotate-180 leading-none transition-colors duration-300 ${
//                     activeSection === link.id
//                       ? 'text-white'
//                       : 'text-neutral-500'
//                   }`}
//                 >
//                   {link.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM CLOCK */}
//         <div className="pb-6 flex flex-col items-center gap-2 text-neutral-600 text-[9px]">
//           <Disc className="w-3 h-3 text-neutral-800 animate-spin" />

//           <span className="font-bold tabular-nums">
//             {systemTime}
//           </span>
//         </div>
//       </aside>

//       {/* MOBILE DOCK */}
//       <div className="lg:hidden fixed bottom-4 left-4 right-4 h-14 bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 rounded-xl z-[100] shadow-2xl flex items-center justify-around px-2 font-mono select-none">
//         {navLinks.map((link) => (
//           <button
//             key={link.id}
//             onClick={() => handleScrollTo(link.id)}
//             className={`flex flex-col items-center justify-center p-1 rounded-lg flex-1 transition-colors duration-300 ${
//               activeSection === link.id
//                 ? 'text-emerald-400'
//                 : 'text-neutral-600'
//             }`}
//           >
//             <Layers className="w-3.5 h-3.5 mb-0.5" />

//             <span className="text-[7px] font-black tracking-tighter truncate max-w-[40px]">
//               {link.label.split(' ')[0]}
//             </span>
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { Terminal, Layers, Disc } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('playground');
  const [systemTime, setSystemTime] = useState('00:00:00');

  /* =========================================================
     ACTIVE SECTION TRACKER
  ========================================================= */
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

    const sections = document.querySelectorAll('section, div[id]');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     SYSTEM CLOCK
  ========================================================= */
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setSystemTime(
        now.toTimeString().split(' ')[0]
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     NAVIGATION LINKS
  ========================================================= */
  const navLinks = [
    { id: 'playground', label: 'SANDBOX', code: '0x01' },
    { id: 'dependencies', label: 'MANIFEST', code: '0x02' },
    { id: 'story', label: 'JOURNEY', code: '0x03' },
    { id: 'projects', label: 'BLUEPRINTS', code: '0x04' },
    { id: 'activities', label: 'ECOSYSTEM', code: '0x05' },
  ];

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */
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
      {/* =========================================================
          DESKTOP HOVER SIDEBAR
      ========================================================= */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen z-50 group">

        {/* =====================================================
            ALWAYS VISIBLE HOVER BUTTON
        ===================================================== */}
        <div
          className="
            absolute left-0 top-1/2
            -translate-y-1/2

            w-5 h-40

            bg-neutral-900/90
            backdrop-blur-xl

            border border-neutral-800
            border-l-0

            rounded-r-2xl

            flex items-center justify-center

            transition-all duration-300
            group-hover:w-6
            group-hover:bg-neutral-800
          "
        >
          {/* GLOW INDICATOR */}
          <div className="w-1 h-14 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* =====================================================
            SIDEBAR PANEL
        ===================================================== */}
        <aside
          className="
            absolute top-0 left-0

            h-screen
            w-[88px]

            bg-neutral-950/95
            backdrop-blur-2xl

            border-r border-neutral-900

            flex flex-col items-center
            font-mono
            select-none

            transition-transform duration-500 ease-in-out

            -translate-x-[72px]
            group-hover:translate-x-0
          "
        >

          {/* =================================================
              TOP LOGO
          ================================================= */}
          <div className="pt-8 flex flex-col items-center">

            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="cursor-pointer flex flex-col items-center gap-1"
            >

              {/* TERMINAL ICON */}
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>

              {/* NAME */}
              <span className="text-[8px] tracking-widest text-neutral-600 uppercase font-bold mt-1">
                SRIJANI
              </span>

            </div>
          </div>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}
          <div className="flex-1 flex items-center justify-center w-full">

            <div className="flex flex-col items-center gap-8">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="group/nav flex flex-col items-center"
                >

                  {/* SECTION CODE */}
                  <span
                    className={`
                      text-[9px]
                      font-bold
                      leading-none
                      transition-all
                      duration-300

                      ${
                        activeSection === link.id
                          ? 'text-emerald-400'
                          : 'text-neutral-700'
                      }
                    `}
                  >
                    {link.code}
                  </span>

                  {/* VERTICAL LABEL */}
                  <span
                    className={`
                      text-[9px]
                      tracking-[0.22em]
                      uppercase
                      font-bold
                      mt-2
                      whitespace-nowrap
                      [writing-mode:vertical-lr]
                      rotate-180
                      leading-none
                      transition-all
                      duration-300

                      ${
                        activeSection === link.id
                          ? 'text-white'
                          : 'text-neutral-500'
                      }
                    `}
                  >
                    {link.label}
                  </span>

                </button>
              ))}

            </div>
          </div>

          {/* =================================================
              BOTTOM CLOCK
          ================================================= */}
          <div className="pb-6 flex flex-col items-center gap-2 text-neutral-600 text-[9px]">

            <Disc className="w-3 h-3 text-neutral-800 animate-spin" />

            <span className="font-bold tabular-nums">
              {systemTime}
            </span>

          </div>

        </aside>
      </div>

      {/* =========================================================
          MOBILE BOTTOM DOCK
      ========================================================= */}
      <div
        className="
          lg:hidden
          fixed bottom-4 left-4 right-4
          h-14

          bg-neutral-950/90
          backdrop-blur-xl

          border border-neutral-800
          rounded-xl

          z-[100]
          shadow-2xl

          flex items-center justify-around
          px-2

          font-mono
          select-none
        "
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className={`
              flex flex-col items-center justify-center
              p-1 rounded-lg flex-1
              transition-colors duration-300

              ${
                activeSection === link.id
                  ? 'text-emerald-400'
                  : 'text-neutral-600'
              }
            `}
          >

            <Layers className="w-3.5 h-3.5 mb-0.5" />

            <span className="text-[7px] font-black tracking-tighter truncate max-w-[40px]">
              {link.label.split(' ')[0]}
            </span>

          </button>
        ))}
      </div>
    </>
  );
}