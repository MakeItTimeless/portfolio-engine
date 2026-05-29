// 'use client';
// import { useState } from 'react';
// import { Terminal, Code2, Layers } from 'lucide-react';

// export default function Activities() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activities = [
//     {
//       title: "Google Developer Group",
//       role: "Lead Organizer",
//       period: "Oct 2025",
//       tag: "COMMUNITY // SYSTEMS",
//       image: "speaking1.jpeg",
//       summary: "Led local tech community ecosystem events focusing on modern cloud architecture, developer tooling, and systems innovation.",
//       details: "Organized engineering community meets, technical deep-dives, and micro-workshops. Cultivated open dialogue around backend paradigms, microservices implementation, and early prototyping architectures for scaling software talent."
//     },
//     {
//       title: "IEEE Student Branch",
//       role: "Event Host & Speaker",
//       period: "2023 - 2024",
//       tag: "LEADERSHIP // ACADEMIA",
//       image: "IEEE_eventHost.jpg",
//       summary: "Hosted and organized formal institutional technical ceremonies and foundational community building tracks.",
//       details: "Spearheaded student-led technological forums, facilitating key industry-academia communication channels and hosting formal launch events for departmental technological frameworks."
//     },
//     {
//       title: "System Ideation & Pitching",
//       role: "Core Innovator",
//       period: "2023",
//       tag: "PROTOTYPING // PRODUCT",
//       image: "ideation_choss.jpg",
//       summary: "Developed architectures and business models tackling complex local ecological problems like digital e-waste tracking.",
//       details: "Pitched direct ecosystem service applications to evaluation panels, focusing on user pain-points, verification nodes, and sustainable asset life-cycles."
//     },
//     {
//       title: "Oxygnite 2K23",
//       role: "Hackathon Winner",
//       period: "Dec 2023",
//       tag: "COMPETITION // RECOGNITION",
//       image: "oxford_winning.jpg",
//       summary: "Secured top placement at The Oxford College of Engineering technical symposium.",
//       details: "Built and demonstrated technical engineering features under constrained timelines, presenting working deployment builds to domain experts and evaluation matrices."
//     },
//     {
//       title: "AWS Cloud Conference",
//       role: "Technical Delegate",
//       period: "2024",
//       tag: "CLOUD // NETWORKING",
//       image: "AWS_conference.jpg",
//       summary: "Represented student-developer cohorts at large-scale regional cloud architecture events.",
//       details: "Engaged with global computing frameworks, cloud engineers, and containerization experts to implement modern microservices configurations in local university environments."
//     },
//     {
//       title: "IIT Madras Research Forum",
//       role: "Academic Delegate",
//       period: "2024",
//       tag: "RESEARCH // INNOVATION",
//       image: "IIT_madras.jpg",
//       summary: "Visited leading research hubs to analyze emerging technical engineering standards.",
//       details: "Explored advanced methodologies in data systems and institutional engineering paradigms to enrich local student development pipelines."
//     }
//   ];

//   return (
//     <section id="activities" className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16 border-t border-neutral-900 bg-neutral-950 text-white font-sans antialiased">
      
//       {/* BALANCED HEADER SECTION */}
//       {/* Changed justify-start back to justify-between to push the text element all the way to the right edge */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-x-12 gap-y-4 mb-8">
//         <div>
//           <p className="font-mono text-[10px] tracking-[0.3em] text-emerald-500 uppercase mb-1.5">
//             // LIVE_ECOSYSTEM_ENGAGEMENT
//           </p>
//           <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
//             Ecosystem & <br />
//             <span className="text-neutral-500 font-light lowercase font-serif italic">activities.</span>
//           </h2>
//         </div>

//         {/* This wrapper ensures alignment mirrors the right margin edge on desktop screens */}
//         <div className="max-w-sm md:text-right">
//           <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-neutral-800 pl-4 md:pl-0 pr-0 md:pr-4 md:mb-1">
//             Technical community organization, open-source evangelism, system prototyping, and real-world deployment challenges.
//           </p>
//         </div>
//       </div>

//       {/* COMPONENT INTERACTION GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
//         {/* LEFT COLUMN: INTERACTIVE HOVER TERMINAL LIST */}
//         <div className="lg:col-span-5 space-y-3 order-2 lg:order-1">
//           <div className="flex items-center gap-2 px-2 pb-2 border-b border-neutral-900 font-mono text-[10px] text-neutral-600 tracking-wider">
//             <Terminal className="w-3.5 h-3.5 text-neutral-500" />
//             <span>HOVER_TO_STREAM_DATA:</span>
//           </div>
          
//           <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-900">
//             {activities.map((act, index) => {
//               const isSelected = activeIndex === index;
//               return (
//                 <div
//                   key={index}
//                   onMouseEnter={() => setActiveIndex(index)}
//                   className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer group flex items-center justify-between ${
//                     isSelected
//                       ? 'bg-neutral-900/40 border-neutral-800 shadow-md shadow-black/40'
//                       : 'bg-transparent border-neutral-900/60 hover:border-neutral-900 hover:bg-neutral-900/10'
//                   }`}
//                 >
//                   <div className="space-y-1">
//                     <div className="flex items-center gap-2">
//                       <span className={`font-mono text-[9px] tracking-widest ${isSelected ? 'text-emerald-400' : 'text-neutral-600'}`}>
//                         [{act.period}]
//                       </span>
//                       <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
//                         {act.tag.split(' // ')[0]}
//                       </span>
//                     </div>
//                     <h3 className={`text-sm font-bold tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
//                       {act.title}
//                     </h3>
//                     <p className="text-[11px] text-neutral-500 font-light line-clamp-1">
//                       {act.role}
//                     </p>
//                   </div>
//                   <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isSelected ? 'bg-emerald-500 scale-125' : 'bg-neutral-800 group-hover:bg-neutral-600'}`} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT COLUMN: RE-ENGINEERED SIDE-BY-SIDE INTEGRATION TRAY */}
//         <div className="lg:col-span-7 lg:sticky lg:top-8 order-1 lg:order-2">
//           <div className="bg-neutral-900/20 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-12">
            
//             {/* INTEGRATED PORTRAIT/LANDSCAPE PICTURE BLOCK */}
//             <div className="md:col-span-5 bg-neutral-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-900 relative min-h-[300px] md:min-h-0">
//               <img
//                 key={activeIndex}
//                 src={activities[activeIndex].image}
//                 alt={activities[activeIndex].title}
//                 className="w-full h-full max-h-[440px] md:max-h-[460px] object-cover opacity-90 hover:opacity-100 transition-all duration-300 ease-out animate-fadeIn"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
//             </div>

//             {/* INTEGRATED TEXT/CODE DETAILS MATRIX */}
//             <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-6">
//               <div className="space-y-4">
//                 <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-neutral-900 pb-3">
//                   <div>
//                     <h3 className="text-xl font-black tracking-tight text-white uppercase">
//                       {activities[activeIndex].title}
//                     </h3>
//                     <p className="text-xs text-emerald-400 font-mono tracking-wide mt-0.5">
//                       {activities[activeIndex].role}
//                     </p>
//                   </div>
//                   <span className="font-mono text-[10px] text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800 shrink-0">
//                     {activities[activeIndex].period}
//                   </span>
//                 </div>

//                 <p className="text-neutral-300 text-xs md:text-sm leading-relaxed font-light">
//                   {activities[activeIndex].summary}
//                 </p>
//               </div>

//               {/* LOWER TERMINAL CONSOLE BOX */}
//               <div className="bg-neutral-950/80 p-4 rounded-lg border border-neutral-900 font-mono text-[11px] leading-relaxed text-neutral-400 space-y-3 mt-auto">
//                 <div className="text-neutral-500 uppercase tracking-wider text-[9px] flex items-center gap-1.5 border-b border-neutral-900 pb-1.5">
//                   <Layers className="w-3 h-3 text-neutral-600" />
//                   <span>Subsystem_Execution_Details</span>
//                 </div>
//                 <p className="font-sans font-light text-[11px] text-neutral-400/90 leading-relaxed">
//                   {activities[activeIndex].details}
//                 </p>
//                 <div className="flex items-center justify-between text-[8px] text-neutral-600 tracking-widest uppercase pt-1 border-t border-neutral-900/60">
//                   <div className="flex items-center gap-1">
//                     <Code2 className="w-3 h-3 text-neutral-700" />
//                     <span>SYSTEM: OPTIMIZED_ASPECT</span>
//                   </div>
//                   <span className="text-neutral-700 font-bold">
//                     {activities[activeIndex].tag.split(' // ')[0]}
//                   </span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';
import { useState } from 'react';
import { Terminal, Code2, Layers } from 'lucide-react';

export default function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activities = [
    {
      title: "Google Developer Group",
      role: "Lead Organizer",
      period: "Oct 2025",
      tag: "COMMUNITY // SYSTEMS",
      image: "speaking1.jpeg",
      summary: "Led local tech community ecosystem events focusing on modern cloud architecture, developer tooling, and systems innovation.",
      details: "Organized engineering community meets, technical deep-dives, and micro-workshops. Cultivated dialogue around backend paradigms, microservices implementation, and early prototyping architectures."
    },
    {
      title: "IEEE Student Branch",
      role: "Event Host & Speaker",
      period: "2023 - 2024",
      tag: "LEADERSHIP // ACADEMIA",
      image: "IEEE_eventHost.jpg",
      summary: "Hosted and organized formal institutional technical ceremonies and foundational community building tracks.",
      details: "Spearheaded student-led technological forums, facilitating key industry-academia communication channels and hosting formal launch events for departmental technological frameworks."
    },
    {
      title: "System Ideation & Pitching",
      role: "Core Innovator",
      period: "2023",
      tag: "PROTOTYPING // PRODUCT",
      image: "ideation_choss.jpg",
      summary: "Developed architectures and business models tackling complex local ecological problems like digital e-waste tracking.",
      details: "Pitched direct ecosystem service applications to evaluation panels, focusing on user pain-points, verification nodes, and sustainable asset life-cycles."
    },
    {
      title: "Oxygnite 2K23",
      role: "Hackathon Winner",
      period: "Dec 2023",
      tag: "COMPETITION // RECOGNITION",
      image: "oxford_winning.jpg",
      summary: "Secured top placement at The Oxford College of Engineering technical symposium.",
      details: "Built and demonstrated technical engineering features under constrained timelines, presenting working deployment builds to domain experts and evaluation matrices."
    },
    {
      title: "AWS Cloud Conference",
      role: "Technical Delegate",
      period: "2024",
      tag: "CLOUD // NETWORKING",
      image: "AWS_conference.jpg",
      summary: "Represented student-developer cohorts at large-scale regional cloud architecture events.",
      details: "Engaged with global computing frameworks, cloud engineers, and containerization experts to implement modern microservices configurations in local university environments."
    },
    {
      title: "IIT Madras Research Forum",
      role: "Academic Delegate",
      period: "2024",
      tag: "RESEARCH // INNOVATION",
      image: "IIT_madras.jpg",
      summary: "Visited leading research hubs to analyze emerging technical engineering standards.",
      details: "Explored advanced methodologies in data systems and institutional engineering paradigms to enrich local student development pipelines."
    }
  ];

  return (
    <section id="activities" className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-12 pb-16 border-t border-neutral-900 bg-neutral-950 text-white font-sans antialiased">
      
      {/* BALANCED HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-x-12 gap-y-6 mb-8">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-emerald-500 uppercase mb-1.5">
            // LIVE_ECOSYSTEM_ENGAGEMENT
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
            Ecosystem & <br />
            <span className="text-neutral-500 font-light lowercase font-serif italic">activities.</span>
          </h2>
        </div>

        <div className="max-w-sm md:text-right">
          <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-neutral-800 pl-4 md:pl-0 pr-0 md:pr-4 md:mb-1">
            Technical community organization, open-source evangelism, system prototyping, and real-world deployment challenges.
          </p>
        </div>
      </div>

      {/* COMPONENT INTERACTION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE HOVER TERMINAL LIST */}
        <div className="lg:col-span-5 space-y-3 order-2 lg:order-1 w-full">
          <div className="flex items-center gap-2 px-2 pb-2 border-b border-neutral-900 font-mono text-[10px] text-neutral-600 tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-neutral-500" />
            <span>HOVER_TO_STREAM_DATA:</span>
          </div>
          
          <div className="space-y-2 max-h-[340px] md:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {activities.map((act, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer group flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-neutral-900/40 border-neutral-800 shadow-md shadow-black/40'
                      : 'bg-transparent border-neutral-900/60 hover:border-neutral-900 hover:bg-neutral-900/10'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-mono text-[9px] tracking-widest ${isSelected ? 'text-emerald-400' : 'text-neutral-600'}`}>
                        [{act.period}]
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 truncate">
                        {act.tag.split(' // ')[0]}
                      </span>
                    </div>
                    <h3 className={`text-sm font-bold tracking-tight transition-colors truncate ${isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                      {act.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light line-clamp-1">
                      {act.role}
                    </p>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0 ${isSelected ? 'bg-emerald-500 scale-125' : 'bg-neutral-800 group-hover:bg-neutral-600'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: RE-ENGINEERED SIDE-BY-SIDE INTEGRATION TRAY */}
        <div className="lg:col-span-7 lg:sticky lg:top-8 order-1 lg:order-2 w-full overflow-hidden">
          <div className="bg-neutral-900/20 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-12 w-full">
            
            {/* INTEGRATED PORTRAIT/LANDSCAPE PICTURE BLOCK */}
            <div className="md:col-span-5 bg-neutral-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-900 relative min-h-[240px] max-h-[300px] md:max-h-none md:min-h-0">
              <img
                key={activeIndex}
                src={activities[activeIndex].image}
                alt={activities[activeIndex].title}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 ease-out animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* INTEGRATED TEXT/CODE DETAILS MATRIX */}
            <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4 min-w-0">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-900 pb-3">
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-black tracking-tight text-white uppercase truncate">
                      {activities[activeIndex].title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono tracking-wide mt-0.5 truncate">
                      {activities[activeIndex].role}
                    </p>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800 shrink-0 self-start sm:self-auto">
                    {activities[activeIndex].period}
                  </span>
                </div>

                <p className="text-neutral-300 text-xs md:text-sm leading-relaxed font-light break-words">
                  {activities[activeIndex].summary}
                </p>
              </div>

              {/* LOWER TERMINAL CONSOLE BOX */}
              <div className="bg-neutral-950/80 p-4 rounded-lg border border-neutral-900 font-mono text-[11px] leading-relaxed text-neutral-400 space-y-2.5">
                <div className="text-neutral-500 uppercase tracking-wider text-[9px] flex items-center gap-1.5 border-b border-neutral-900 pb-1.5">
                  <Layers className="w-3 h-3 text-neutral-600 shrink-0" />
                  <span>Subsystem_Execution_Details</span>
                </div>
                <p className="font-sans font-light text-[11px] text-neutral-400/90 leading-relaxed break-words">
                  {activities[activeIndex].details}
                </p>
                <div className="flex items-center justify-between text-[8px] text-neutral-600 tracking-widest uppercase pt-1 border-t border-neutral-900/60 gap-2">
                  <div className="flex items-center gap-1 truncate">
                    <Code2 className="w-3 h-3 text-neutral-700 shrink-0" />
                    <span className="truncate">SYSTEM: OPTIMIZED_ASPECT</span>
                  </div>
                  <span className="text-neutral-700 font-bold shrink-0">
                    {activities[activeIndex].tag.split(' // ')[0]}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}