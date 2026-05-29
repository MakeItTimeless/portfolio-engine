// 'use client';
// import { useState } from 'react';
// import { Database, FileCode, Server, Cloud, FolderGit2, FileText, ArrowUpRight } from 'lucide-react';

// export default function Dependencies() {
//   const [activeHover, setActiveHover] = useState(null);

//   const techManifest = {
//     coreRuntimes: {
//       title: "Core Engines & Architecture",
//       icon: <Server className="w-4 h-4 text-neutral-400" />,
//       items: [
//         { name: "Java", version: "17.x", details: "Core platform foundation used to engineer strongly-typed, object-oriented enterprise application logic across backend portfolios." },
//         { name: "Spring Boot", version: "3.x", details: " Leveraged to construct self-contained RESTful APIs, configuring inversion of control (IoC) and dependency injection layers." },
//         { name: "Microservices", version: "Distributed", details: "Architected decoupled system architectures, isolating independent logical service layers to ensure clean horizontal scaling." },
//         { name: "Feign Client", version: "Spring Cloud", details: "Implemented declarative REST clients to streamline synchronous, inter-service HTTP communications smoothly between microservice nodes." }
//       ]
//     },
//     dataTier: {
//       title: "Persistence & Data Tier",
//       icon: <Database className="w-4 h-4 text-neutral-400" />,
//       items: [
//         { name: "PostgreSQL", version: "15.x", details: "Deployed in repository layers to design relational schemas, executing complex multi-table fetch joins, index scans, and pagination." },
//         { name: "MySQL", version: "8.x", details: "Configured relational schemas, relational keys, and transactional query constraints for robust order and data lifecycle operations." },
//         { name: "Repository Pattern", version: "Spring Data JPA", details: "Abstracted core database query layers, designing custom DTO-driven projection logic to optimize network payloads." }
//       ]
//     },
//     cloudIntegrations: {
//       title: "Cloud & Infrastructure Hooks",
//       icon: <Cloud className="w-4 h-4 text-neutral-400" />,
//       items: [
//         { name: "AWS S3", version: "Cloud Storage", details: "Configured secure storage buckets to store, manage, and isolate movie digital banner assets and localized poster media streams." },
//         { name: "Razorpay API", version: "v2.x Integration", details: "Embedded secure checkout webhooks to process transaction signatures, verifying payment gateway tokens securely." },
//         { name: "JWT Auth", version: "Stateless Security", details: "Configured secure stateless token extraction filters inside request pipelines to manage individual user session contexts." }
//       ]
//     }
//   };

//   return (
//     <section id="dependencies" className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16 border-t border-neutral-900 bg-neutral-950 text-white font-sans antialiased">
      
//       {/* HEADER SECTION ROW */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-x-12 gap-y-4 mb-10">
//         <div>
//           <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-emerald-400 mb-3 uppercase tracking-wider">
//             <FileCode className="w-3 h-3" /> System Manifest
//           </div>
//           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
//             System Dependencies, <br />
//             <span className="text-neutral-500 font-light lowercase font-serif italic">Tech Manifest Tier.</span>
//           </h2>
//         </div>

//         {/* RESUME DOWNLOAD ACTION LINK */}
//         <div className="shrink-0 flex items-center">
//           <a 
//             href="/resume.pdf" // Ensure your resume PDF is named 'resume.pdf' inside your public folder
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl font-mono text-xs text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
//           >
//             <FileText className="w-3.5 h-3.5 text-neutral-500" />
//             <span>Fetch_Resume.pdf</span>
//             <ArrowUpRight className="w-3 h-3 text-neutral-600" />
//           </a>
//         </div>
//       </div>

//       {/* CORE MATRIX DISPATCH GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
//         {/* LEFT COLUMN: THE SYSTEM CATEGORY MANIFEST */}
//         <div className="lg:col-span-7 space-y-6">
//           {Object.entries(techManifest).map(([key, section]) => (
//             <div key={key} className="space-y-2.5">
//               <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 tracking-widest uppercase px-1">
//                 {section.icon}
//                 <span>{section.title}</span>
//               </div>
              
//               {/* CHIPS WRAPPER MATRIX */}
//               <div className="flex flex-wrap gap-2">
//                 {section.items.map((tech, idx) => {
//                   const uniqueId = `${key}-${idx}`;
//                   const isCurrent = activeHover === uniqueId;
//                   return (
//                     <div
//                       key={idx}
//                       onMouseEnter={() => setActiveHover(uniqueId)}
//                       onMouseLeave={() => setActiveHover(null)}
//                       className={`px-3 py-2 rounded-xl border font-mono text-xs transition-all duration-200 select-none cursor-help flex items-center gap-2 ${
//                         isCurrent 
//                           ? 'bg-neutral-900 border-neutral-700 text-emerald-400 shadow-md shadow-black' 
//                           : 'bg-neutral-950/40 border-neutral-900/60 text-neutral-400 hover:border-neutral-800'
//                       }`}
//                     >
//                       <span className="text-neutral-200 font-bold">{tech.name}</span>
//                       <span className="text-[10px] text-neutral-600 px-1 py-0.2 bg-neutral-900/60 rounded border border-neutral-800/40">
//                         {tech.version}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT COLUMN: RE-ENGINEERED COMPILER TOOLTIP HOVER STREAM */}
//         <div className="lg:col-span-5 flex flex-col justify-between">
//           <div className="w-full h-full bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[220px]">
            
//             {/* COMPILER STATUS WINDOW BAR */}
//             <div className="bg-neutral-900/40 px-4 py-3 border-b border-neutral-900 flex items-center justify-between font-mono text-[10px] text-neutral-500">
//               <div className="flex items-center gap-2">
//                 <FolderGit2 className="w-3.5 h-3.5 text-neutral-600" />
//                 <span>manifest-compiler.log</span>
//               </div>
//               <div className="flex gap-1">
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
//               </div>
//             </div>

//             {/* DYNAMIC COMPILER CONTENT BODY AREA */}
//             <div className="p-5 font-mono flex-1 flex flex-col justify-center bg-neutral-950/40">
//               {activeHover ? (
//                 // IF MOUSE HOVERING OVER CHIP
//                 <div className="space-y-3 animate-fade-in">
//                   {(() => {
//                     const [sectionKey, itemIdx] = activeHover.split('-');
//                     const targetTech = techManifest[sectionKey].items[parseInt(itemIdx)];
//                     return (
//                       <>
//                         <div className="flex items-center justify-between border-b border-neutral-900 pb-2">
//                           <span className="text-emerald-400 font-bold text-sm">
//                             &gt;_ {targetTech.name}
//                           </span>
//                           <span className="text-[10px] text-neutral-500">
//                             Build: STABLE_{targetTech.version.replace(/\s+/g, '_').toUpperCase()}
//                           </span>
//                         </div>
//                         <p className="text-neutral-400 font-sans font-light text-xs leading-relaxed">
//                           {targetTech.details}
//                         </p>
//                       </>
//                     );
//                   })()}
//                 </div>
//               ) : (
//                 // DEFAULT IDLE CONSOLE STATE
//                 <div className="text-center space-y-1 py-6">
//                   <p className="text-neutral-600 text-xs tracking-tight">// HOVER_OVER_DEPENDENCY_MODULE</p>
//                   <p className="text-neutral-700 text-[10px]">Awaiting system pointer stream tracking parameters...</p>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';
import { useState } from 'react';
import { Database, FileCode, Server, Cloud, FolderGit2, FileText, ArrowUpRight } from 'lucide-react';

export default function Dependencies() {
  const [activeHover, setActiveHover] = useState(null);

  const techManifest = {
    coreRuntimes: {
      title: "Core Engines & Architecture",
      icon: <Server className="w-4 h-4 text-neutral-400" />,
      items: [
        { name: "Java", version: "17.x", details: "Core platform foundation used to engineer strongly-typed, object-oriented enterprise application logic across backend portfolios." },
        { name: "Spring Boot", version: "3.x", details: " Leveraged to construct self-contained RESTful APIs, configuring inversion of control (IoC) and dependency injection layers." },
        { name: "Microservices", version: "Distributed", details: "Architected decoupled system architectures, isolating independent logical service layers to ensure clean horizontal scaling." },
        { name: "Feign Client", version: "Spring Cloud", details: "Implemented declarative REST clients to streamline synchronous, inter-service HTTP communications smoothly between microservice nodes." }
      ]
    },
    dataTier: {
      title: "Persistence & Data Tier",
      icon: <Database className="w-4 h-4 text-neutral-400" />,
      items: [
        { name: "PostgreSQL", version: "15.x", details: "Deployed in repository layers to design relational schemas, executing complex multi-table fetch joins, index scans, and pagination." },
        { name: "MySQL", version: "8.x", details: "Configured relational schemas, relational keys, and transactional query constraints for robust order and data lifecycle operations." },
        { name: "Repository Pattern", version: "Spring Data JPA", details: "Abstracted core database query layers, designing custom DTO-driven projection logic to optimize network payloads." }
      ]
    },
    cloudIntegrations: {
      title: "Cloud & Infrastructure Hooks",
      icon: <Cloud className="w-4 h-4 text-neutral-400" />,
      items: [
        { name: "AWS S3", version: "Cloud Storage", details: "Configured secure storage buckets to store, manage, and isolate movie digital banner assets and localized poster media streams." },
        { name: "Razorpay API", version: "v2.x Integration", details: "Embedded secure checkout webhooks to process transaction signatures, verifying payment gateway tokens securely." },
        { name: "JWT Auth", version: "Stateless Security", details: "Configured secure stateless token extraction filters inside request pipelines to manage individual user session contexts." }
      ]
    }
  };

  return (
    <section id="dependencies" className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-12 pb-16 border-t border-neutral-900 bg-neutral-950 text-white font-sans antialiased">
      
      {/* HEADER SECTION ROW */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-x-12 gap-y-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            <FileCode className="w-3 h-3" /> System Manifest
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight md:leading-none">
            System Dependencies, <br />
            <span className="text-neutral-500 font-light lowercase font-serif italic">Tech Manifest Tier.</span>
          </h2>
        </div>

        {/* RESUME DOWNLOAD ACTION LINK */}
        <div className="shrink-0 flex items-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl font-mono text-xs text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>Fetch_Resume.pdf</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-600" />
          </a>
        </div>
      </div>

      {/* CORE MATRIX DISPATCH GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* LEFT COLUMN: THE SYSTEM CATEGORY MANIFEST */}
        <div className="lg:col-span-7 space-y-6">
          {Object.entries(techManifest).map(([key, section]) => (
            <div key={key} className="space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 tracking-widest uppercase px-1">
                {section.icon}
                <span>{section.title}</span>
              </div>
              
              {/* CHIPS WRAPPER MATRIX */}
              <div className="flex flex-wrap gap-2">
                {section.items.map((tech, idx) => {
                  const uniqueId = `${key}-${idx}`;
                  const isCurrent = activeHover === uniqueId;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveHover(uniqueId)}
                      onMouseLeave={() => setActiveHover(null)}
                      onClick={() => setActiveHover(activeHover === uniqueId ? null : uniqueId)}
                      className={`px-3 py-2 rounded-xl border font-mono text-xs transition-all duration-200 select-none cursor-help flex items-center gap-2 max-w-full ${
                        isCurrent 
                          ? 'bg-neutral-900 border-neutral-700 text-emerald-400 shadow-md shadow-black' 
                          : 'bg-neutral-950/40 border-neutral-900/60 text-neutral-400 hover:border-neutral-800'
                      }`}
                    >
                      <span className="text-neutral-200 font-bold truncate">{tech.name}</span>
                      <span className="text-[10px] text-neutral-600 px-1 py-0.2 bg-neutral-900/60 rounded border border-neutral-800/40 shrink-0">
                        {tech.version}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: RE-ENGINEERED COMPILER TOOLTIP HOVER STREAM */}
        <div className="lg:col-span-5 flex flex-col justify-between w-full overflow-hidden">
          <div className="w-full h-full bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[200px]">
            
            {/* COMPILER STATUS WINDOW BAR */}
            <div className="bg-neutral-900/40 px-4 py-3 border-b border-neutral-900 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <div className="flex items-center gap-2 max-w-[80%]">
                <FolderGit2 className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                <span className="truncate">manifest-compiler.log</span>
              </div>
              <div className="flex gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* DYNAMIC COMPILER CONTENT BODY AREA */}
            <div className="p-5 font-mono flex-1 flex flex-col justify-center bg-neutral-950/40">
              {activeHover ? (
                <div className="space-y-3 animate-fade-in">
                  {(() => {
                    const [sectionKey, itemIdx] = activeHover.split('-');
                    const targetTech = techManifest[sectionKey].items[parseInt(itemIdx)];
                    return (
                      <>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-900 pb-2">
                          <span className="text-emerald-400 font-bold text-sm truncate">
                            &gt;_ {targetTech.name}
                          </span>
                          <span className="text-[9px] sm:text-[10px] text-neutral-500 truncate">
                            Build: STABLE_{targetTech.version.replace(/\s+/g, '_').toUpperCase()}
                          </span>
                        </div>
                        <p className="text-neutral-400 font-sans font-light text-xs leading-relaxed break-words">
                          {targetTech.details}
                        </p>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="text-center space-y-1 py-6">
                  <p className="text-neutral-600 text-xs tracking-tight">// HOVER_OR_TAP_DEPENDENCY_MODULE</p>
                  <p className="text-neutral-700 text-[10px]">Awaiting system pointer stream tracking parameters...</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}