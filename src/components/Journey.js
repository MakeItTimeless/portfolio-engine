// 'use client';
// import { useState } from 'react';
// import { Server, ShieldAlert, Code2, ChevronDown, ChevronUp } from 'lucide-react';

// export default function Journey() {
//   const [expandedId, setExpandedId] = useState(null);

//   const milestones = [
//     {
//       id: 4,
//       icon: <ShieldAlert className="w-4 h-4" />,
//       type: "INTERNSHIP // CYBER_SECURITY",
//       period: "Feb 2026 - May 2026",
//       title: "Edufu Technologies (CampusPe) — Security Intern",
//       summary: "Conducted deep-dive vulnerability assessments and implemented network defense protocols.",
//       details: "Performed system safety audits, proactive defense configuration checks, and verified secure coding rules. Specialized in verifying patch deployments to fortify overall infrastructure data integrity."
//     },
//     {
//       id: 3,
//       icon: <Server className="w-4 h-4" />,
//       type: "INTERNSHIP // SYSTEMS",
//       period: "Feb 2026 - Apr 2026",
//       title: "ACS — Associate Backend Developer",
//       summary: "Engineered scalable backend service ecosystems using Java, Spring Boot, and microservices.",
//       details: "Architected clean DTO-driven service layers, designing enterprise RESTful APIs from scratch. Implemented optimized server-side filtering, searching, and offset-pagination mechanics to manage large relational datasets seamlessly."
//     },
//     {
//       id: 1,
//       icon: <Code2 className="w-4 h-4" />,
//       type: "INTERNSHIP // FRONTEND",
//       period: "Jun 2025 - Jul 2025",
//       title: "Sasken Technologies — Full Stack Intern",
//       summary: "Designed and implemented robust modules using React, Next.js, and Java core libraries.",
//       details: "Collaborated in an agile framework to ship highly responsive modules. Focused on improving frontend data loading speeds and optimizing full-stack components, resulting in a 20% increase in baseline operational performance."
//     }
//   ];

//   return (
//     <section id="story" className="max-w-7xl mx-auto px-8 md:px-16 py-32 border-t border-neutral-900 bg-neutral-950 select-none">
      
//       {/* SECTION IDENTIFIER HEADER */}
//       <div className="text-center max-w-xl mx-auto mb-24">
//         <p className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase mb-2">// ENGINE_CHRONOLOGY</p>
//         <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">
//           Professional <br />
//           <span className="text-neutral-500 font-light">Timeline.</span>
//         </h2>
//         <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
//           A granular view of my engineering journey across core infrastructure development and system defense.
//         </p>
//       </div>

//       {/* DUAL-BALANCED CHRONOLOGY CHART */}
//       <div className="relative max-w-3xl mx-auto before:absolute before:inset-0 before:left-[19px] sm:before:left-1/2 before:w-[1px] before:bg-neutral-900 before:h-full">
//         {milestones.map((item, index) => {
//           const isExpanded = expandedId === item.id;
//           const isEven = index % 2 === 0;

//           return (
//             <div key={item.id} className={`relative flex flex-col sm:flex-row items-start mb-16 last:mb-0 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
              
//               {/* TIMELINE INTERACTION NODE */}
//               <div className={`absolute left-0 sm:left-1/2 transform -translate-x-0 sm:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-black border transition-colors duration-300 flex items-center justify-center shadow-xl ${
//                 isExpanded ? 'border-emerald-500/80 text-emerald-400' : 'border-neutral-800 text-neutral-500'
//               }`}>
//                 {item.icon}
//               </div>

//               {/* CARD CONTAINER MATRIX */}
//               <div className={`w-full sm:w-[calc(50%-30px)] pl-14 sm:pl-0 ${isEven ? 'sm:pl-8' : 'sm:pr-8'}`}>
//                 <div 
//                   onClick={() => setExpandedId(isExpanded ? null : item.id)}
//                   className={`bg-neutral-950 border p-6 rounded-xl transition-all duration-300 cursor-pointer shadow-lg group select-none ${
//                     isExpanded ? 'border-neutral-800 bg-neutral-900/10' : 'border-neutral-900/60 hover:border-neutral-800'
//                   }`}
//                 >
//                   {/* METADATA HEAD METRICS */}
//                   <div className="flex items-center justify-between mb-1">
//                     <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block">
//                       {item.period}
//                     </span>
//                     <span className={`font-mono text-[9px] tracking-wider transition-colors duration-300 ${
//                       isExpanded ? 'text-emerald-500/80' : 'text-neutral-700 group-hover:text-neutral-500'
//                     }`}>
//                       // {item.type}
//                     </span>
//                   </div>
                  
//                   {/* CARD IDENTITY LINE */}
//                   <div className="flex items-center justify-between gap-4 pt-1">
//                     <h3 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors tracking-tight">
//                       {item.title}
//                     </h3>
//                     <div className="text-neutral-600 group-hover:text-neutral-400 transition-colors flex-shrink-0">
//                       {isExpanded ? <ChevronUp className="w-4 h-4 text-emerald-500" /> : <ChevronDown className="w-4 h-4" />}
//                     </div>
//                   </div>

//                   <p className="text-neutral-400 text-xs mt-2.5 leading-relaxed font-sans font-light">
//                     {item.summary}
//                   </p>

//                   {/* NO IMAGES — CLEAN TEXT DROPDOWN */}
//                   {isExpanded && (
//                     <div className="mt-4 pt-4 border-t border-neutral-900 text-xs text-neutral-400 font-sans leading-relaxed space-y-4">
//                       <p className="text-neutral-400/90 font-light">
//                         {item.details}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

'use client';
import { useState } from 'react';
import { Server, ShieldAlert, Code2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Journey() {
  const [expandedId, setExpandedId] = useState(null);

  const milestones = [
    {
      id: 4,
      icon: <ShieldAlert className="w-4 h-4" />,
      type: "INTERNSHIP // CYBER_SECURITY",
      period: "Feb 2026 - May 2026",
      title: "Edufu Technologies (CampusPe) — Security Intern",
      summary: "Conducted vulnerability assessments and implemented network defense protocols.",
      details: "Performed system safety audits, defense configurations, and verified secure coding practices. Fortified cloud architecture code deployments and overall data lifecycle parameters."
    },
    {
      id: 3,
      icon: <Server className="w-4 h-4" />,
      type: "INTERNSHIP // SYSTEMS",
      period: "Feb 2026 - Apr 2026",
      title: "ACS — Associate Backend Developer",
      summary: "Engineered scalable backend service ecosystems using Java, Spring Boot, and microservices.",
      details: "Architected clean DTO-driven service layers, designing enterprise RESTful APIs from scratch. Implemented optimized server-side filtering, searching, and offset-pagination mechanics to manage large relational datasets seamlessly."
    },
    {
      id: 1,
      icon: <Code2 className="w-4 h-4" />,
      type: "INTERNSHIP // FRONTEND",
      period: "Jun 2025 - Jul 2025",
      title: "Sasken Technologies — Full Stack Intern",
      summary: "Designed and implemented robust modules using React, Next.js, and Java core libraries.",
      details: "Collaborated in an agile framework to ship highly responsive modules. Focused on improving frontend data loading speeds and optimizing full-stack components, resulting in a 20% increase in baseline operational performance."
    }
  ];

  return (
    <section id="story" className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-32 border-t border-neutral-900 bg-neutral-950 select-none">
      
      {/* SECTION IDENTIFIER HEADER */}
      <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
        <p className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase mb-2">// ENGINE_CHRONOLOGY</p>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 text-white">
          Professional <br />
          <span className="text-neutral-500 font-light">Timeline.</span>
        </h2>
        <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
          A granular view of my engineering journey across core infrastructure development and system defense.
        </p>
      </div>

      {/* DUAL-BALANCED CHRONOLOGY CHART */}
      <div className="relative max-w-3xl mx-auto before:absolute before:inset-0 before:left-[19px] sm:before:left-1/2 before:w-[1px] before:bg-neutral-900 before:h-full">
        {milestones.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isEven = index % 2 === 0;

          return (
            <div key={item.id} className={`relative flex flex-col sm:flex-row items-start mb-12 md:mb-16 last:mb-0 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
              
              {/* TIMELINE INTERACTION NODE */}
              <div className="absolute left-0 sm:left-1/2 transform -translate-x-0 sm:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-black border transition-colors duration-300 flex items-center justify-center shadow-xl">
                <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'text-emerald-400' : 'text-neutral-500'}`}>
                  {item.icon}
                </div>
              </div>

              {/* CARD CONTAINER MATRIX */}
              <div className={`w-full sm:w-[calc(50%-20px)] md:w-[calc(50%-30px)] pl-14 sm:pl-0 ${isEven ? 'sm:pl-6 md:sm:pl-8' : 'sm:pr-6 md:sm:pr-8'}`}>
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`bg-neutral-950 border p-5 md:p-6 rounded-xl transition-all duration-300 cursor-pointer shadow-lg group select-none ${
                    isExpanded ? 'border-neutral-800 bg-neutral-900/10' : 'border-neutral-900/60 hover:border-neutral-800'
                  }`}
                >
                  {/* METADATA HEAD METRICS */}
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block">
                      {item.period}
                    </span>
                    <span className={`font-mono text-[9px] tracking-wider transition-colors duration-300 ${
                      isExpanded ? 'text-emerald-500/80' : 'text-neutral-700 group-hover:text-neutral-500'
                    }`}>
                      {item.type.split(' // ')[1]}
                    </span>
                  </div>
                  
                  {/* CARD IDENTITY LINE */}
                  <div className="flex items-start justify-between gap-4 pt-1">
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-neutral-200 transition-colors tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-neutral-600 group-hover:text-neutral-400 transition-colors flex-shrink-0 pt-0.5">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-emerald-500" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  <p className="text-neutral-400 text-xs mt-2.5 leading-relaxed font-sans font-light">
                    {item.summary}
                  </p>

                  {/* NO IMAGES — CLEAN TEXT DROPDOWN */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-neutral-900 text-xs text-neutral-400 font-sans leading-relaxed space-y-4 animate-fade-in">
                      <p className="text-neutral-400/90 font-light break-words">
                        {item.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}