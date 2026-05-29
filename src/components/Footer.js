'use client';
import { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Shield, HelpCircle, User, Radio, Trash2 } from 'lucide-react';

export default function Footer() {
  const [input, setInput] = useState('');
  
  // High-contrast S-Snake integrated logo
  const terminalLogo = `
      .----.
     /  ..  \\
    |  /  |  |
     \\  \\--'
      '--.  \\
    |\\  |  |
     \\  '--'
      '----'
    
    S R I J A N I // D E V
    [ STATUS: SYSTEM_READY ]
===================================================
`;

  const [history, setHistory] = useState([
    { text: terminalLogo, type: 'sys' },
    { text: 'Type "help" to view executable commands, or click a quick-action macro below.', type: 'sys' }
  ]);
  
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (commandText) => {
    const cmd = commandText.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `srijani_m:~ engine$ ${commandText}`, type: 'input' }];

    // 1. Security Blocklist
    const dangerousCommands = ['rm', 'sudo', 'halt', 'reboot', 'kill', 'shutdown', 'chown', 'chmod'];
    if (dangerousCommands.some(forbidden => cmd.startsWith(forbidden))) {
      setHistory([
        ...newHistory,
        { text: `[CRITICAL] Permission denied. Unauthorized attempt to execute destructive payload: "${cmd}". Access logged.`, type: 'error' }
      ]);
      return;
    }

    // 2. Simulated System Logic
    switch (cmd) {
      case 'help':
        setHistory([
          ...newHistory,
          { text: 'Available system operations:', type: 'sys' },
          { text: '   contact   - Dump secure communication points', type: 'item' },
          { text: '   about     - Dump profile credentials', type: 'item' },
          { text: '   ls        - List virtual directory contents', type: 'item' },
          { text: '   pwd       - Display current directory path', type: 'item' },
          { text: '   clear     - Wipe console active screen', type: 'item' }
        ]);
        break;

      case 'ls':
        setHistory([...newHistory, { text: 'srj_io_root/  bin/  etc/  home/  var/  tmp/  system_manifest.json', type: 'item' }]);
        break;

      case 'pwd':
        setHistory([...newHistory, { text: '/home/srijani_m/production_engine', type: 'item' }]);
        break;

      case 'cd':
      case 'cd ..':
        setHistory([...newHistory, { text: 'Directory access restricted. Maintaining node affinity to: /home/srijani_m/production_engine', type: 'sys' }]);
        break;

      case 'contact':
        setHistory([
          ...newHistory,
          { text: 'FETCH SUCCESS - Secure routes extracted:', type: 'success' },
          { text: '  ↳ EMAIL: sryjni@gmail.com', type: 'item' },
          { text: '  ↳ LINKEDIN: linkedin.com/in/srijani-m-59a013249/', type: 'item' },
          { text: '  ↳ GITHUB: github.com/MakeItTimeless', type: 'item' }
        ]);
        break;

      case 'about':
        setHistory([
          ...newHistory,
          { text: 'DEPLOYMENT NODE DETAILS:', type: 'sys' },
          { text: '  - Profile: Srijani Mondal // Associate Software Engineer (Backend Focus)', type: 'item' },
          { text: '  - Academic Stack: Cambridge Institute of Technology North Campus', type: 'item' },
          { text: '  - Core Specs: Distributed Microservices, Spring Boot Engine, Data Persistence Layers', type: 'item' }
        ]);
        break;

      case 'clear':
        setHistory([]);
        break;

      default:
        setHistory([
          ...newHistory,
          { text: `System operative: Command "${cmd}" is non-executable. Try 'help' for valid instruction sets.`, type: 'sys' }
        ]);
        break;
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  const handleMacroClick = (cmd) => {
    executeCommand(cmd);
  };

  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 font-mono antialiased select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-bold tracking-wide">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>srijani_m</span>
              <span className="text-neutral-700 font-medium">// production_v1.0</span>
            </div>
            <p className="text-neutral-500 font-medium text-xs leading-relaxed max-w-xs tracking-wide">
              Engineered with a focus on robust backend architectures, distributed transaction synchronization pipelines, and scalable database schemas.
            </p>
          </div>

          <div className="lg:col-span-8 w-full bg-neutral-950/60 border border-neutral-900 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-neutral-900/30 px-4 py-2.5 border-b border-neutral-900 flex items-center justify-between text-[10px] text-neutral-500 font-bold tracking-wide">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-neutral-700" />
                <span>root@srijani-engine:~</span>
              </div>
              <span className="text-[9px] tracking-widest text-neutral-700 font-black">// CLI_PORTAL</span>
            </div>

            <div className="p-4 h-56 overflow-y-auto text-xs space-y-1 bg-neutral-950/20 scrollbar-none tracking-wide whitespace-pre">
              {history.map((line, idx) => (
                <div key={idx} className="leading-relaxed break-all">
                  {line.type === 'input' && <span className="text-neutral-200 font-bold">{line.text}</span>}
                  {line.type === 'sys' && <span className="text-neutral-500 font-bold">{line.text}</span>}
                  {line.type === 'item' && <span className="text-neutral-400 font-semibold">{line.text}</span>}
                  {line.type === 'success' && <span className="text-emerald-400 font-black">{line.text}</span>}
                  {line.type === 'error' && <span className="text-rose-500 font-bold">{line.text}</span>}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <div className="bg-neutral-900/10 px-4 py-2 border-t border-neutral-900/60 flex flex-wrap gap-2 items-center">
              <span className="text-[9px] text-neutral-600 uppercase font-black tracking-wider mr-1">Quick Run:</span>
              <button onClick={() => handleMacroClick('help')} className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer">
                <HelpCircle className="w-2.5 h-2.5 text-neutral-500" /> <span>help</span>
              </button>
              <button onClick={() => handleMacroClick('about')} className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer">
                <User className="w-2.5 h-2.5 text-neutral-500" /> <span>about</span>
              </button>
              <button onClick={() => handleMacroClick('contact')} className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer">
                <Radio className="w-2.5 h-2.5 text-neutral-500" /> <span>contact</span>
              </button>
              <button onClick={() => handleMacroClick('clear')} className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-500 hover:text-rose-400 hover:border-rose-500/30 transition-all duration-200 ml-auto cursor-pointer">
                <Trash2 className="w-2.5 h-2.5" /> <span>clear</span>
              </button>
            </div>

            <form onSubmit={handleCommandSubmit} className="border-t border-neutral-900 bg-neutral-950 px-4 py-3 flex items-center gap-2">
              <span className="text-xs text-emerald-500 font-black tracking-wider select-none">srijani_m:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command or click an option above..."
                className="flex-1 bg-transparent text-xs text-white font-bold tracking-wide focus:outline-none placeholder-neutral-800"
                maxLength={40}
                autoComplete="off"
              />
              <button type="submit" className="text-neutral-700 hover:text-emerald-400 transition-colors cursor-pointer">
                <CornerDownLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-900/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-neutral-600 font-bold">
          <div><span className="tracking-wide">© 2026 Srijani Mondal. All rights reserved.</span></div>
          <div className="flex gap-4 tracking-wider">
            <span>STABLE_BUILD_2026</span> <span className="text-neutral-900">|</span> <span>// BENGALURU_NODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}