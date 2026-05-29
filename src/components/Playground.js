// 'use client';
// import { useState } from 'react';
// import { Terminal, Database, Send, Play, Code2, Cpu, Activity, ShieldCheck } from 'lucide-react';

// export default function Playground() {
//   const [activeTab, setActiveTab] = useState('guestbook'); 
//   const [message, setMessage] = useState('');
//   const [isRunning, setIsRunning] = useState(false);
  
//   // Real-time tracking stats for visual flair
//   const [metrics, setMetrics] = useState({ latency: '0ms', cpu: 0, memory: '14.2MB', status: 'READY' });
//   const [logs, setLogs] = useState([
//     { id: 1, text: 'System diagnostics initialized. Database handshake nominal.', type: 'system' }
//   ]);

//   // Handle live guestbook entry submits
//   const handleGuestbookSubmit = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     const userLog = { id: Date.now(), text: `POST /api/v1/guestbook - "${message}"`, type: 'request' };
//     setLogs((prev) => [...prev, userLog]);
//     setMetrics({ latency: 'calculating...', cpu: 45, memory: '16.8MB', status: 'PROCESSING' });
    
//     const currentMsg = message;
//     setMessage('');

//     setTimeout(() => {
//       setLogs((prev) => [
//         ...prev,
//         { id: Date.now() + 1, text: `201 CREATED - Payload securely committed to PostgreSQL clusters: "${currentMsg}"`, type: 'success' }
//       ]);
//       setMetrics({ latency: '12ms', cpu: 2, memory: '15.1MB', status: 'SUCCESS' });
//     }, 600);
//   };

//   // Fun, animated step runner for preset backend routes
//   const runPresetTest = (steps, initialMem, peakMem, finalLatency) => {
//     if (isRunning) return;
//     setIsRunning(true);
    
//     setLogs([{ id: Date.now(), text: `[CORE] Spawning isolated runtime virtual thread...`, type: 'system' }]);
//     setMetrics({ latency: 'running...', cpu: 12, memory: initialMem, status: 'EXECUTING' });

//     steps.forEach((step, index) => {
//       setTimeout(() => {
//         setLogs(prev => [...prev, { id: Date.now() + index, text: step.text, type: step.type }]);
        
//         // Randomly simulate varying CPU spikes per code block execution step
//         const simulatedCpu = Math.floor(Math.random() * (85 - 55 + 1)) + 55;
//         setMetrics(prev => ({
//           ...prev,
//           cpu: index === steps.length - 1 ? 1 : simulatedCpu,
//           memory: index === steps.length - 1 ? initialMem : peakMem
//         }));

//         if (index === steps.length - 1) {
//           setIsRunning(false);
//           setMetrics(prev => ({ ...prev, latency: finalLatency, status: 'SUCCESS' }));
//         }
//       }, (index + 1) * 550);
//     });
//   };

//   return (
//     <section id="playground" className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16 border-t border-neutral-900 bg-neutral-950 text-white font-sans antialiased">
      
//       {/* SECTION HEADER ROW */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-x-12 gap-y-4 mb-8">
//         <div>
//           <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-emerald-400 mb-3 uppercase tracking-wider">
//             <Database className="w-3 h-3" /> System Engine Sandbox
//           </div>
//           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
//             Testing the Backend, <br />
//             <span className="text-neutral-500 font-light lowercase font-serif italic">In Real Time.</span>
//           </h2>
//         </div>
//         <div className="max-w-sm md:text-right">
//           <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-neutral-800 pl-4 md:pl-0 pr-0 md:pr-4 md:mb-1">
//             Interact with live console triggers to trace exactly how data channels cascade down server subsystems.
//           </p>
//         </div>
//       </div>

//       {/* CORE CONTROL GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
//         {/* LEFT COLUMN: INTERACTIVE API ROUTE CHANNEL BUTTONS */}
//         <div className="lg:col-span-5 space-y-3">
//           <p className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase px-1">
//             // ROUTE_SELECTION_CLUSTER:
//           </p>

//           <div className="space-y-2">
//             {/* Context Module 1: Live Guestbook Pipeline */}
//             <button
//               onClick={() => { if(!isRunning) { setActiveTab('guestbook'); setLogs([{ id: 1, text: 'Attached live pipeline to port guestbook-stream.', type: 'system' }]); setMetrics({ latency: '0ms', cpu: 0, memory: '14.2MB', status: 'READY' }); } }}
//               disabled={isRunning}
//               className={`w-full text-left p-4 rounded-xl border text-xs flex flex-col gap-1.5 transition-all duration-200 group relative ${
//                 activeTab === 'guestbook' ? 'bg-neutral-900/40 border-neutral-800 shadow-lg shadow-black/50' : 'border-neutral-900/40 hover:bg-neutral-900/10'
//               } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
//             >
//               <div className="flex justify-between items-center w-full font-mono text-[10px]">
//                 <span className="text-neutral-500 tracking-wider">PORTFOLIO DEPLOYMENT</span>
//                 <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900 px-1.5 py-0.5 rounded font-bold">POST</span>
//               </div>
//               <h3 className="font-mono text-sm font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">/api/v1/guestbook</h3>
//               <p className="text-neutral-500 text-[11px] font-sans font-light">Direct interactive portal channel. Submits plain text parameters directly through state targets.</p>
//             </button>

//             {/* Context Module 2: Movie Booking App Core Verification */}
//             <button
//               onClick={() => { if(!isRunning) { setActiveTab('movie'); setLogs([{ id: 1, text: 'Context target switched to Movie Booking microservices matrix.', type: 'system' }]); setMetrics({ latency: '0ms', cpu: 0, memory: '28.4MB', status: 'READY' }); } }}
//               disabled={isRunning}
//               className={`w-full text-left p-4 rounded-xl border text-xs flex flex-col gap-1.5 transition-all duration-200 group relative ${
//                 activeTab === 'movie' ? 'bg-neutral-900/40 border-neutral-800 shadow-lg shadow-black/50' : 'border-neutral-900/40 hover:bg-neutral-900/10'
//               } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
//             >
//               <div className="flex justify-between items-center w-full font-mono text-[10px]">
//                 <span className="text-neutral-500 tracking-wider">MOVIE BOOKING ENGINE</span>
//                 <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900 px-1.5 py-0.5 rounded font-bold">POST</span>
//               </div>
//               <h3 className="font-mono text-sm font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">/booking/verify</h3>
//               <p className="text-neutral-500 text-[11px] font-sans font-light">Simulates parsing signature hashes derived from secure Razorpay secure webhooks alongside transactional AWS S3 triggers.</p>
//             </button>

//             {/* Context Module 3: Accountant/Ticket microservice */}
//             <button
//               onClick={() => { if(!isRunning) { setActiveTab('erp'); setLogs([{ id: 1, text: 'Context target switched to ERP core system analytics.', type: 'system' }]); setMetrics({ latency: '0ms', cpu: 0, memory: '8.9MB', status: 'READY' }); } }}
//               disabled={isRunning}
//               className={`w-full text-left p-4 rounded-xl border text-xs flex flex-col gap-1.5 transition-all duration-200 group relative ${
//                 activeTab === 'erp' ? 'bg-neutral-900/40 border-neutral-800 shadow-lg shadow-black/50' : 'border-neutral-900/40 hover:bg-neutral-900/10'
//               } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
//             >
//               <div className="flex justify-between items-center w-full font-mono text-[10px]">
//                 <span className="text-neutral-500 tracking-wider">ERP APPLICATION HUB</span>
//                 <span className="bg-blue-950/80 text-blue-400 border border-blue-900 px-1.5 py-0.5 rounded font-bold">GET</span>
//               </div>
//               <h3 className="font-mono text-sm font-bold text-neutral-200 group-hover:text-blue-400 transition-colors">/erp/tickets/status</h3>
//               <p className="text-neutral-500 text-[11px] font-sans font-light">Pings cross-service diagnostic telemetry logs across decoupled SQLite persistence runtimes.</p>
//             </button>
//           </div>

//           {/* DYNAMIC SIMULATOR EXECUTION TOGGLE BUTTON */}
//           {activeTab !== 'guestbook' && (
//             <button
//               onClick={() => {
//                 if (activeTab === 'movie') {
//                   runPresetTest([
//                     { text: '→ POST /api/v1/movies/booking/verify', type: 'request' },
//                     { text: '[API] Intercepted async payment callback payload from Razorpay payload gateway...', type: 'system' },
//                     { text: '[DB] Initializing Row-Level explicit locks inside PostgreSQL clusters...', type: 'system' },
//                     { text: '[S3] Buffering memory architecture to stream receipt files onto digital cloud buckets...', type: 'system' },
//                     { text: '✓ 200 OK - Payment signature match verified. Seat assignment sequence locked securely.', type: 'success' }
//                   ], '28.4MB', '64.1MB', '42ms');
//                 } else if (activeTab === 'erp') {
//                   runPresetTest([
//                     { text: '→ GET /api/v1/erp/tickets/status', type: 'request' },
//                     { text: '[GATEWAY] Reverse proxy load balancing routing request straight into Accountant-Ticket-Service...', type: 'system' },
//                     { text: '[DB] Invoking index scans over relational SQLite memory partitions...', type: 'system' },
//                     { text: '✓ 200 OK - Microservice context nominal. Current active tracking message pipelines: [3]', type: 'success' }
//                   ], '8.9MB', '18.2MB', '16ms');
//                 }
//               }}
//               disabled={isRunning}
//               className={`w-full mt-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg shadow-emerald-950/20 ${
//                 isRunning ? 'opacity-40 cursor-not-allowed animate-pulse' : 'cursor-pointer'
//               }`}
//             >
//               <Play className="w-3.5 h-3.5 fill-current" />
//               <span>{isRunning ? 'Processing Call...' : 'Fire Simulation Request'}</span>
//             </button>
//           )}
//         </div>

//         {/* RIGHT COLUMN: HIGH-TECH STREAMING TERMINAL W/ LIVE RESOURCE TRACKER */}
//         <div className="lg:col-span-7 space-y-4">
//           <div className="w-full bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl">
            
//             {/* TERMINAL HEADER HEADER TOP BAR */}
//             <div className="bg-neutral-900/40 px-4 py-3 border-b border-neutral-900 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Terminal className="w-4 h-4 text-neutral-500" />
//                 <span className="font-mono text-xs text-neutral-400 select-none">guestbook-stream.log</span>
//               </div>
//               <div className="flex gap-1.5">
//                 <div className="w-2 h-2 rounded-full bg-neutral-800" />
//                 <div className="w-2 h-2 rounded-full bg-neutral-800" />
//                 <div className="w-2 h-2 rounded-full bg-neutral-800" />
//               </div>
//             </div>

//             {/* RAW LOG LOG STREAM SHELF */}
//             <div className="p-4 h-48 overflow-y-auto font-mono text-xs space-y-1.5 bg-neutral-950/60 custom-scrollbar">
//               {logs.map((log) => (
//                 <div key={log.id} className="leading-relaxed break-all transition-all duration-300">
//                   {log.type === 'system' && <span className="text-neutral-500">[SYS] {log.text}</span>}
//                   {log.type === 'request' && <span className="text-amber-500">&rarr; {log.text}</span>}
//                   {log.type === 'success' && <span className="text-emerald-400 font-medium">&check; {log.text}</span>}
//                 </div>
//               ))}
//             </div>

//             {/* HIGH TECH DIAGNOSTIC DASHBOARD ATTACHMENT PANEL */}
//             <div className="grid grid-cols-4 border-t border-neutral-900 bg-neutral-950/90 font-mono text-[10px] text-neutral-400 divide-x divide-neutral-900 text-center">
//               <div className="py-3 px-1 space-y-1">
//                 <span className="text-neutral-600 block text-[8px] tracking-wider uppercase">THREAD_STATUS</span>
//                 <span className={`font-bold transition-colors ${
//                   metrics.status === 'SUCCESS' ? 'text-emerald-400' : metrics.status.includes('ING') ? 'text-amber-400' : 'text-neutral-400'
//                 }`}>
//                   // {metrics.status}
//                 </span>
//               </div>
//               <div className="py-3 px-1 space-y-1">
//                 <span className="text-neutral-600 block text-[8px] tracking-wider uppercase flex items-center justify-center gap-1">
//                   <Activity className="w-2.5 h-2.5 text-neutral-700" /> LATENCY
//                 </span>
//                 <span className="text-neutral-200 font-bold">{metrics.latency}</span>
//               </div>
//               <div className="py-3 px-1 space-y-1">
//                 <span className="text-neutral-600 block text-[8px] tracking-wider uppercase flex items-center justify-center gap-1">
//                   <Cpu className="w-2.5 h-2.5 text-neutral-700" /> CPU_LOAD
//                 </span>
//                 <span className="text-neutral-200 font-bold transition-all">{metrics.cpu}%</span>
//               </div>
//               <div className="py-3 px-1 space-y-1">
//                 <span className="text-neutral-600 block text-[8px] tracking-wider uppercase flex items-center justify-center gap-1">
//                   <ShieldCheck className="w-2.5 h-2.5 text-neutral-700" /> SYSTEM_VM
//                 </span>
//                 <span className="text-neutral-200 font-bold">{metrics.memory}</span>
//               </div>
//             </div>

//             {/* LIVE FOOTER FORM CONTROL AREA */}
//             <div className="border-t border-neutral-900 bg-neutral-950 p-3">
//               {activeTab === 'guestbook' ? (
//                 <form onSubmit={handleGuestbookSubmit} className="flex gap-2">
//                   <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Stream a personalized terminal message into the framework logs..."
//                     className="flex-1 bg-transparent text-xs text-white px-2 focus:outline-none placeholder-neutral-700 font-mono"
//                   />
//                   <button type="submit" className="bg-white text-black p-2 rounded hover:bg-neutral-200 transition-colors cursor-pointer shrink-0">
//                     <Send className="w-3.5 h-3.5" />
//                   </button>
//                 </form>
//               ) : (
//                 <div className="flex items-center justify-between font-mono text-[9px] text-neutral-500 px-2 py-0.5 tracking-wider uppercase">
//                   <span>Runtime Interface: Sandbox Active</span>
//                   <span className="text-neutral-700 text-[8px] tracking-widest">// AUTOMATED_TRACE_LOOP</span>
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
import { Terminal, Database, Send, Play, Code2, Cpu, Activity, ShieldCheck } from 'lucide-react';

export default function Playground() {
  const [activeTab, setActiveTab] = useState('guestbook'); 
  const [message, setMessage] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  
  const [metrics, setMetrics] = useState({ latency: '0ms', cpu: 0, memory: '14.2MB', status: 'READY' });
  const [logs, setLogs] = useState([
    { id: 1, text: 'System diagnostics initialized. Database handshake nominal.', type: 'system' }
  ]);

  const handleGuestbookSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userLog = { id: Date.now(), text: `POST /api/v1/guestbook - "${message}"`, type: 'request' };
    setLogs((prev) => [...prev, userLog]);
    setMetrics({ latency: 'calculating...', cpu: 45, memory: '16.8MB', status: 'PROCESSING' });
    
    const currentMsg = message;
    setMessage('');

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: Date.now() + 1, text: `201 CREATED - Payload securely committed to PostgreSQL clusters: "${currentMsg}"`, type: 'success' }
      ]);
      setMetrics({ latency: '12ms', cpu: 2, memory: '15.1MB', status: 'SUCCESS' });
    }, 600);
  };

  const runPresetTest = (steps, initialMem, peakMem, finalLatency) => {
    if (isRunning) return;
    setIsRunning(true);
    
    setLogs([{ id: Date.now(), text: `[CORE] Spawning isolated runtime virtual thread...`, type: 'system' }]);
    setMetrics({ latency: 'running...', cpu: 12, memory: initialMem, status: 'EXECUTING' });

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, { id: Date.now() + index, text: step.text, type: step.type }]);
        
        const simulatedCpu = Math.floor(Math.random() * (85 - 55 + 1)) + 55;
        setMetrics(prev => ({
          ...prev,
          cpu: index === steps.length - 1 ? 1 : simulatedCpu,
          memory: index === steps.length - 1 ? initialMem : peakMem
        }));

        if (index === steps.length - 1) {
          setIsRunning(false);
          setMetrics(prev => ({ ...prev, latency: finalLatency, status: 'SUCCESS' }));
        }
      }, (index + 1) * 550);
    });
  };

  return (
    <section id="playground" className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-12 pb-16 border-t border-neutral-900 bg-neutral-950 text-white font-sans antialiased">
      
      {/* SECTION HEADER ROW */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-x-12 gap-y-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            <Database className="w-3 h-3" /> System Engine Sandbox
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight md:leading-none">
            Testing the Backend, <br />
            <span className="text-neutral-500 font-light lowercase font-serif italic">In Real Time.</span>
          </h2>
        </div>
        <div className="max-w-sm md:text-right">
          <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-neutral-800 pl-4 md:pl-0 pr-0 md:pr-4 md:mb-1">
            Interact with live console triggers to trace exactly how data channels cascade down server subsystems.
          </p>
        </div>
      </div>

      {/* CORE CONTROL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE API ROUTE CHANNEL BUTTONS */}
        <div className="lg:col-span-5 space-y-3">
          <p className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase px-1">
            // ROUTE_SELECTION_CLUSTER:
          </p>

          <div className="space-y-2">
            {/* Context Module 1: Live Guestbook Pipeline */}
            <button
              onClick={() => { if(!isRunning) { setActiveTab('guestbook'); setLogs([{ id: 1, text: 'Attached live pipeline to port guestbook-stream.', type: 'system' }]); setMetrics({ latency: '0ms', cpu: 0, memory: '14.2MB', status: 'READY' }); } }}
              disabled={isRunning}
              className={`w-full text-left p-4 rounded-xl border text-xs flex flex-col gap-1.5 transition-all duration-200 group relative ${
                activeTab === 'guestbook' ? 'bg-neutral-900/40 border-neutral-800 shadow-lg shadow-black/50' : 'border-neutral-900/40 hover:bg-neutral-900/10'
              } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex justify-between items-center w-full font-mono text-[10px]">
                <span className="text-neutral-500 tracking-wider">PORTFOLIO DEPLOYMENT</span>
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900 px-1.5 py-0.5 rounded font-bold">POST</span>
              </div>
              <h3 className="font-mono text-sm font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">/api/v1/guestbook</h3>
              <p className="text-neutral-500 text-[11px] font-sans font-light leading-normal">Direct interactive portal channel. Submits plain text parameters directly through state targets.</p>
            </button>

            {/* Context Module 2: Movie Booking App Core Verification */}
            <button
              onClick={() => { if(!isRunning) { setActiveTab('movie'); setLogs([{ id: 1, text: 'Context target switched to Movie Booking microservices matrix.', type: 'system' }]); setMetrics({ latency: '0ms', cpu: 0, memory: '28.4MB', status: 'READY' }); } }}
              disabled={isRunning}
              className={`w-full text-left p-4 rounded-xl border text-xs flex flex-col gap-1.5 transition-all duration-200 group relative ${
                activeTab === 'movie' ? 'bg-neutral-900/40 border-neutral-800 shadow-lg shadow-black/50' : 'border-neutral-900/40 hover:bg-neutral-900/10'
              } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex justify-between items-center w-full font-mono text-[10px]">
                <span className="text-neutral-500 tracking-wider">MOVIE BOOKING ENGINE</span>
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900 px-1.5 py-0.5 rounded font-bold">POST</span>
              </div>
              <h3 className="font-mono text-sm font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">/booking/verify</h3>
              <p className="text-neutral-500 text-[11px] font-sans font-light leading-normal">Simulates parsing signature hashes derived from secure Razorpay secure webhooks alongside transactional AWS S3 triggers.</p>
            </button>

            {/* Context Module 3: Accountant/Ticket microservice */}
            <button
              onClick={() => { if(!isRunning) { setActiveTab('erp'); setLogs([{ id: 1, text: 'Context target switched to ERP core system analytics.', type: 'system' }]); setMetrics({ latency: '0ms', cpu: 0, memory: '8.9MB', status: 'READY' }); } }}
              disabled={isRunning}
              className={`w-full text-left p-4 rounded-xl border text-xs flex flex-col gap-1.5 transition-all duration-200 group relative ${
                activeTab === 'erp' ? 'bg-neutral-900/40 border-neutral-800 shadow-lg shadow-black/50' : 'border-neutral-900/40 hover:bg-neutral-900/10'
              } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex justify-between items-center w-full font-mono text-[10px]">
                <span className="text-neutral-500 tracking-wider">ERP APPLICATION HUB</span>
                <span className="bg-blue-950/80 text-blue-400 border border-blue-900 px-1.5 py-0.5 rounded font-bold">GET</span>
              </div>
              <h3 className="font-mono text-sm font-bold text-neutral-200 group-hover:text-blue-400 transition-colors">/erp/tickets/status</h3>
              <p className="text-neutral-500 text-[11px] font-sans font-light leading-normal">Pings cross-service diagnostic telemetry logs across decoupled SQLite persistence runtimes.</p>
            </button>
          </div>

          {/* DYNAMIC SIMULATOR EXECUTION TOGGLE BUTTON */}
          {activeTab !== 'guestbook' && (
            <button
              onClick={() => {
                if (activeTab === 'movie') {
                  runPresetTest([
                    { text: '→ POST /api/v1/movies/booking/verify', type: 'request' },
                    { text: '[API] Intercepted async payment callback payload from Razorpay payload gateway...', type: 'system' },
                    { text: '[DB] Initializing Row-Level explicit locks inside PostgreSQL clusters...', type: 'system' },
                    { text: '[S3] Buffering memory architecture to stream receipt files onto digital cloud buckets...', type: 'system' },
                    { text: '✓ 200 OK - Payment signature match verified. Seat assignment sequence locked securely.', type: 'success' }
                  ], '28.4MB', '64.1MB', '42ms');
                } else if (activeTab === 'erp') {
                  runPresetTest([
                    { text: '→ GET /api/v1/erp/tickets/status', type: 'request' },
                    { text: '[GATEWAY] Reverse proxy load balancing routing request straight into Accountant-Ticket-Service...', type: 'system' },
                    { text: '[DB] Invoking index scans over relational SQLite memory partitions...', type: 'system' },
                    { text: '✓ 200 OK - Microservice context nominal. Current active tracking message pipelines: [3]', type: 'success' }
                  ], '8.9MB', '18.2MB', '16ms');
                }
              }}
              disabled={isRunning}
              className={`w-full mt-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg shadow-emerald-950/20 ${
                isRunning ? 'opacity-40 cursor-not-allowed animate-pulse' : 'cursor-pointer'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? 'Processing Call...' : 'Fire Simulation Request'}</span>
            </button>
          )}
        </div>

        {/* RIGHT COLUMN: HIGH-TECH STREAMING TERMINAL W/ LIVE RESOURCE TRACKER */}
        <div className="lg:col-span-7 space-y-4 w-full overflow-hidden">
          <div className="w-full bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl">
            
            {/* TERMINAL HEADER HEADER TOP BAR */}
            <div className="bg-neutral-900/40 px-4 py-3 border-b border-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-2 max-w-[70%]">
                <Terminal className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="font-mono text-xs text-neutral-400 select-none truncate">guestbook-stream.log</span>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* RAW LOG LOG STREAM SHELF */}
            <div className="p-4 h-48 overflow-y-auto font-mono text-xs space-y-1.5 bg-neutral-950/60 custom-scrollbar">
              {logs.map((log) => (
                <div key={log.id} className="leading-relaxed break-words whitespace-pre-wrap transition-all duration-300">
                  {log.type === 'system' && <span className="text-neutral-500">[SYS] {log.text}</span>}
                  {log.type === 'request' && <span className="text-amber-500">&rarr; {log.text}</span>}
                  {log.type === 'success' && <span className="text-emerald-400 font-medium">&check; {log.text}</span>}
                </div>
              ))}
            </div>

            {/* HIGH TECH DIAGNOSTIC DASHBOARD ATTACHMENT PANEL */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-neutral-900 bg-neutral-950/90 font-mono text-[10px] text-neutral-400 divide-x divide-y sm:divide-y-0 divide-neutral-900 text-center">
              <div className="py-3 px-1 space-y-1">
                <span className="text-neutral-600 block text-[8px] tracking-wider uppercase">THREAD_STATUS</span>
                <span className={`font-bold transition-colors ${
                  metrics.status === 'SUCCESS' ? 'text-emerald-400' : metrics.status.includes('ING') ? 'text-amber-400' : 'text-neutral-400'
                }`}>
                  {metrics.status}
                </span>
              </div>
              <div className="py-3 px-1 space-y-1">
                <span className="text-neutral-600 block text-[8px] tracking-wider uppercase flex items-center justify-center gap-1">
                  <Activity className="w-2.5 h-2.5 text-neutral-700" /> LATENCY
                </span>
                <span className="text-neutral-200 font-bold">{metrics.latency}</span>
              </div>
              <div className="py-3 px-1 space-y-1 border-t border-neutral-900 sm:border-t-0">
                <span className="text-neutral-600 block text-[8px] tracking-wider uppercase flex items-center justify-center gap-1">
                  <Cpu className="w-2.5 h-2.5 text-neutral-700" /> CPU_LOAD
                </span>
                <span className="text-neutral-200 font-bold transition-all">{metrics.cpu}%</span>
              </div>
              <div className="py-3 px-1 space-y-1 border-t border-neutral-900 sm:border-t-0">
                <span className="text-neutral-600 block text-[8px] tracking-wider uppercase flex items-center justify-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5 text-neutral-700" /> SYSTEM_VM
                </span>
                <span className="text-neutral-200 font-bold">{metrics.memory}</span>
              </div>
            </div>

            {/* LIVE FOOTER FORM CONTROL AREA */}
            <div className="border-t border-neutral-900 bg-neutral-950 p-3">
              {activeTab === 'guestbook' ? (
                <form onSubmit={handleGuestbookSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Stream a terminal message into logs..."
                    className="flex-1 bg-transparent text-xs text-white px-2 focus:outline-none placeholder-neutral-700 font-mono min-w-0"
                  />
                  <button type="submit" className="bg-white text-black p-2 rounded hover:bg-neutral-200 transition-colors cursor-pointer shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between font-mono text-[9px] text-neutral-500 px-2 py-0.5 tracking-wider uppercase gap-2">
                  <span className="truncate">Runtime Interface: Sandbox Active</span>
                  <span className="text-neutral-700 text-[8px] tracking-widest shrink-0">// AUTOMATED_TRACE_LOOP</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}