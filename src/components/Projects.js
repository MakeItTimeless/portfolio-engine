// 'use client';
// import { useState } from 'react';
// import { Terminal, ExternalLink } from 'lucide-react';

// export default function Projects() {
//   const [activeProject, setActiveProject] = useState(1);
//   const [isHoveringDetails, setIsHoveringDetails] = useState(false);

//   const projectData = [
//     {
//       id: 1,
//       title: "Movie Booking Infrastructure",
//       tag: "CORE // TICKETING_LIVE_STREAM",
//       repoUrl: "https://github.com/MakeItTimeless/movie-booking-service",
//       code: `> initializing booking_engine_v2... SUCCESS
// > scanning theater layout matrix [auditorium_4]
// > locking seats: [H-12, H-13] 
// > status: holding seats for 05:00 mins (anti-race-lock active)

// > firing payment gateway handshake... 
// > status: [RAZORPAY_REDIRECT] awaiting user auth
// > verification received! transaction_id: tx_9831a8f902
// > processing digital ticket manifest...

// SUCCESS: seats permanently allocated!
// sending confirmation payload to user email... done.
// system idling. awaiting next transaction.`
//     },
//     {
//       id: 2,
//       title: "Carbon Footprint Tracker",
//       tag: "EMISSIONS // LIVE_METRIC_EVALUATOR",
//       repoUrl: "https://github.com/MakeItTimeless/CarbonFootPrintTracker",
//       code: `> tracking real-time logistics activity vectors...
// > active telemetry hook: connected to user profile data

// [LOG_EVENT] user logged commute: 14.5 km via metro transit
// > calculating baseline offset metrics...
// > comparison: -78% carbon output vs personal fuel vehicle 🎉

// [LOG_EVENT] industrial data parsed: packaging sector updates
// > updating regional eco-index dashboard... 
// > generating weekly metrics summary chart.png

// SYSTEM VERDICT: eco-score improved by 4.2 points this week!
// database synchronized. waiting for next activity entry...`
//     },
//     {
//       id: 3,
//       title: "Visual Packet Tracker",
//       tag: "CYBER_SECURITY // FORENSIC_MAPPER",
//       repoUrl: "https://github.com/MakeItTimeless/VisualPacketTracker",
//       code: `> importing network capture file: example_capture.pcap
// > parsing pcap stream structures... [2,401 packets detected]
// > scanning source addresses against geolite2 database...

// [PACKET_042] 192.168.1.1  --> [ROUTE] --> 8.8.8.8 (California, USA)
// [PACKET_119] 185.220.101.5 --> [WARN] --> proxy entry point detected
// > mapping geographic coordinates matrix...

// > compiling visual map layer vectors...
// > generating google earth payload: network_map.kmz 

// RENDER READY: open network_map.kmz on kmzview.com to see 
// the globe light up with your real-world traffic origins!`
//     },
//     {
//       id: 4,
//       title: "E-Waste Dukaan",
//       tag: "SUSTAINABILITY // AI_VALUATION_STREAM",
//       repoUrl: "https://github.com/MakeItTimeless/e-waste-dukaan",
//       code: `> incoming pipeline: user requested device appraisal
// > downloading device image attachments... [iphone_13_back.jpg]
// > running computer vision component analyzer...

// [AI_SCAN] battery cell integrity: 84% 
// [AI_SCAN] logic board precious metals: high yield detected
// [AI_SCAN] display panel condition: cracked (reducing valuation)

// > calculated preliminary baseline quote: ₹14,500
// > dispatching technician validation prompt...


// workflow updated: final valuation pending physical handshake.`
//     }
//   ];

//   const current = projectData.find(p => p.id === activeProject) || projectData[0];

//   return (
//     <section id="projects" className="relative max-w-7xl mx-auto px-8 md:px-16 py-32 border-t border-neutral-900 bg-neutral-950 overflow-hidden select-none">
      
//       {/* GIANT BACKGROUND BLUEPRINT ILLUSTRATION */}
//       <div className="absolute right-0 bottom-0 top-12 w-full md:w-[60%] pointer-events-none mix-blend-screen transition-all duration-700 z-0 opacity-85">
//         <img 
//           src="/000_010.jpg" 
//           alt="Aesthetic Vector Matrix" 
//           className="w-full h-full object-contain object-right-bottom"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
//       </div>

//       {/* AMBIENT TECH GRID BACKGROUND */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

//       {/* SECTION IDENTIFIER HEADER */}
//       <div className="relative z-10 mb-24">
//         <p className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase mb-2">// CAPABILITIES_MANIFEST</p>
//         <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
//           System Blueprints<span className="text-emerald-500 font-light">.</span>
//         </h2>
//       </div>

//       {/* MAIN TWO-COLUMN SYSTEM GRAPH LAYOUT */}
//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
//         {/* LEFT COLUMN: INTERACTIVE NAVIGATION INDEX */}
//         <div className="lg:col-span-5 space-y-4 relative">
//           {projectData.map((project) => {
//             const isSelected = activeProject === project.id;
//             return (
//               <div
//                 key={project.id}
//                 onMouseEnter={() => {
//                   setActiveProject(project.id);
//                   setIsHoveringDetails(true);
//                 }}
//                 onMouseLeave={() => setIsHoveringDetails(false)}
//                 onClick={() => setActiveProject(project.id)}
//                 className="group block text-left cursor-pointer py-4 border-b border-neutral-900/60 relative z-20"
//               >
//                 <div className="flex items-center gap-4">
//                   <span className={`font-mono text-xs tracking-wider transition-colors duration-300 ${isSelected ? 'text-emerald-400' : 'text-neutral-700'}`}>
//                     [0{project.id}]
//                   </span>
//                   <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
//                     isSelected ? 'text-white translate-x-2' : 'text-neutral-500 group-hover:text-neutral-300'
//                   }`}>
//                     {project.title}
//                   </h3>
//                 </div>

//                 {/* Absolute glowing selector line under selected list element */}
//                 {isSelected && (
//                   <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500 via-purple-500 to-transparent" />
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT COLUMN: INTERACTIVE COPIED LOG TERMINAL */}
//         <div className="lg:col-span-7 w-full">
//           {/* Added hover state handlers to the container itself to catch navigation pointer transfers smoothly */}
//           <div 
//             onMouseEnter={() => setIsHoveringDetails(true)}
//             onMouseLeave={() => setIsHoveringDetails(false)}
//             className={`bg-neutral-950/20 border border-neutral-900/60 rounded-2xl overflow-hidden backdrop-blur-[2px] flex flex-col h-[380px] transition-all duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.8)] ${
//               isHoveringDetails 
//                 ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
//                 : 'opacity-0 translate-y-4 scale-[0.97] pointer-events-none'
//             }`}
//           >
            
//             {/* Terminal Window Header */}
//             <div className="bg-neutral-950/80 backdrop-blur-md px-5 py-3 border-b border-neutral-900/60 flex items-center justify-between">
//               <div className="flex items-center gap-1.5">
//                 <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
//                 <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
//                 <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
//               </div>
//               <div className="flex items-center gap-2 font-mono text-[9px] text-neutral-400 tracking-widest uppercase">
//                 <Terminal className="w-3 h-3 text-emerald-400 animate-pulse" />
//                 <span>{current.tag}</span>
//               </div>
//               <a 
//                 href={current.repoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-neutral-500 hover:text-white transition-colors relative z-30 p-1"
//               >
//                 <ExternalLink className="w-3.5 h-3.5" />
//               </a>
//             </div>

//             {/* Code Workspace Display */}
//             <div className="flex-1 p-6 font-mono text-[11px] md:text-xs leading-relaxed overflow-auto custom-scrollbar relative bg-black/10">
//               <div className="absolute top-4 right-4 text-[9px] text-emerald-500/40 font-mono tracking-widest animate-pulse">
//                 ● LIVE_DASHBOARD
//               </div>
//               <pre className="text-neutral-300 selection:bg-neutral-800 whitespace-pre-wrap">
//                 <code>{current.code}</code>
//               </pre>
//             </div>

//             {/* Terminal Status Footer */}
//             <div className="bg-neutral-950/80 backdrop-blur-md px-5 py-2.5 border-t border-neutral-900/60 flex items-center justify-between font-mono text-[9px] text-neutral-600">
//               <span className="flex items-center gap-1.5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//                 TELEMETRY_STREAM: ONLINE
//               </span>
//               <span>SYS_REF_0{current.id}</span>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';
import { useState } from 'react';
import { Terminal, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(1);
  const [isHoveringDetails, setIsHoveringDetails] = useState(false);

  const projectData = [
    {
      id: 1,
      title: "Movie Booking Infrastructure",
      tag: "CORE // TICKETING_LIVE_STREAM",
      repoUrl: "https://github.com/MakeItTimeless/movie-booking-service",
      code: `> initializing booking_engine_v2... SUCCESS
> scanning theater layout matrix [auditorium_4]
> locking seats: [H-12, H-13] 
> status: holding seats for 05:00 mins (anti-race-lock active)

> firing payment gateway handshake... 
> status: [RAZORPAY_REDIRECT] awaiting user auth
> verification received! transaction_id: tx_9831a8f902
> processing digital ticket manifest...

SUCCESS: seats permanently allocated!
sending confirmation payload to user email... done.
system idling. awaiting next transaction.`
    },
    {
      id: 2,
      title: "Carbon Footprint Tracker",
      tag: "EMISSIONS // LIVE_METRIC_EVALUATOR",
      repoUrl: "https://github.com/MakeItTimeless/CarbonFootPrintTracker",
      code: `> tracking real-time logistics activity vectors...
> active telemetry hook: connected to user profile data

[LOG_EVENT] user logged commute: 14.5 km via metro transit
> calculating baseline offset metrics...
> comparison: -78% carbon output vs personal fuel vehicle 🎉

[LOG_EVENT] industrial data parsed: packaging sector updates
> updating regional eco-index dashboard... 
> generating weekly metrics summary chart.png

SYSTEM VERDICT: eco-score improved by 4.2 points this week!
database synchronized. waiting for next activity entry...`
    },
    {
      id: 3,
      title: "Visual Packet Tracker",
      tag: "CYBER_SECURITY // FORENSIC_MAPPER",
      repoUrl: "https://github.com/MakeItTimeless/VisualPacketTracker",
      code: `> importing network capture file: example_capture.pcap
> parsing pcap stream structures... [2,401 packets detected]
> scanning source addresses against geolite2 database...

[PACKET_042] 192.168.1.1  --> [ROUTE] --> 8.8.8.8 (California, USA)
[PACKET_119] 185.220.101.5 --> [WARN] --> proxy entry point detected
> mapping geographic coordinates matrix...

> compiling visual map layer vectors...
> generating google earth payload: network_map.kmz 

RENDER READY: open network_map.kmz on kmzview.com to see 
the globe light up with your real-world traffic origins!`
    },
    {
      id: 4,
      title: "E-Waste Dukaan",
      tag: "SUSTAINABILITY // AI_VALUATION_STREAM",
      repoUrl: "https://github.com/MakeItTimeless/e-waste-dukaan",
      code: `> incoming pipeline: user requested device appraisal
> downloading device image attachments... [iphone_13_back.jpg]
> running computer vision component analyzer...

[AI_SCAN] battery cell integrity: 84% 
[AI_SCAN] logic board precious metals: high yield detected
[AI_SCAN] display panel condition: cracked (reducing valuation)

> calculated preliminary baseline quote: ₹14,500
> dispatching technician validation prompt...

workflow updated: final valuation pending physical handshake.`
    }
  ];

  const current = projectData.find(p => p.id === activeProject) || projectData[0];

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-32 border-t border-neutral-900 bg-neutral-950 overflow-hidden select-none">
      
      {/* GIANT BACKGROUND BLUEPRINT ILLUSTRATION */}
      <div className="absolute right-0 bottom-0 top-12 w-full md:w-[60%] pointer-events-none mix-blend-screen transition-all duration-700 z-0 opacity-45 md:opacity-85">
        <img 
          src="/000_010.jpg" 
          alt="Aesthetic Vector Matrix" 
          className="w-full h-full object-contain object-right-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
      </div>

      {/* AMBIENT TECH GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* SECTION IDENTIFIER HEADER */}
      <div className="relative z-10 mb-12 md:mb-24">
        <p className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase mb-2">// CAPABILITIES_MANIFEST</p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white">
          System Blueprints<span className="text-emerald-500 font-light">.</span>
        </h2>
      </div>

      {/* MAIN TWO-COLUMN SYSTEM GRAPH LAYOUT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE NAVIGATION INDEX */}
        <div className="lg:col-span-5 space-y-2 md:space-y-4 relative w-full">
          {projectData.map((project) => {
            const isSelected = activeProject === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setActiveProject(project.id);
                  setIsHoveringDetails(true);
                }}
                onMouseLeave={() => setIsHoveringDetails(false)}
                onClick={() => {
                  setActiveProject(project.id);
                  setIsHoveringDetails(true);
                }}
                className="group block text-left cursor-pointer py-3 md:py-4 border-b border-neutral-900/60 relative z-20"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className={`font-mono text-[10px] sm:text-xs tracking-wider transition-colors duration-300 ${isSelected ? 'text-emerald-400' : 'text-neutral-700'}`}>
                    [0{project.id}]
                  </span>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
                    isSelected ? 'text-white translate-x-1 md:translate-x-2' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                {/* Selector glowing strip */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500 via-purple-500 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: INTERACTIVE COPIED LOG TERMINAL */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div 
            onMouseEnter={() => setIsHoveringDetails(true)}
            onMouseLeave={() => setIsHoveringDetails(false)}
            className={`bg-neutral-950/80 border border-neutral-900/60 rounded-2xl overflow-hidden backdrop-blur-[4px] flex flex-col h-[360px] md:h-[380px] transition-all duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.8)] ${
              isHoveringDetails 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-4 scale-100 lg:scale-[0.97]'
            }`}
          >
            
            {/* Terminal Window Header */}
            <div className="bg-neutral-950/90 backdrop-blur-md px-4 md:px-5 py-3 border-b border-neutral-900/60 flex items-center justify-between gap-2">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <div className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase truncate max-w-[65%]">
                <span>{current.tag}</span>
              </div>
              <a 
                href={current.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors p-1 shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Code Workspace Display */}
            <div className="flex-1 p-4 md:p-6 font-mono text-[11px] leading-relaxed overflow-auto custom-scrollbar relative bg-black/10">
              <div className="absolute top-4 right-4 text-[8px] md:text-[9px] text-emerald-500/40 font-mono tracking-widest animate-pulse select-none hidden sm:block">
                ● LIVE_DASHBOARD
              </div>
              <pre className="text-neutral-300 selection:bg-neutral-800 whitespace-pre-wrap break-all md:break-normal">
                <code>{current.code}</code>
              </pre>
            </div>

            {/* Terminal Status Footer */}
            <div className="bg-neutral-950/90 backdrop-blur-md px-4 md:px-5 py-2.5 border-t border-neutral-900/60 flex items-center justify-between font-mono text-[9px] text-neutral-600 gap-2">
              <span className="flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">STREAM: ONLINE</span>
              </span>
              <span className="shrink-0">SYS_REF_0{current.id}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}