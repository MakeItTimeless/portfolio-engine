import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Playground from "@/components/Playground";
import Dependencies from '@/components/Dependencies';
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Activities from '@/components/Activities';
import Contact from "@/components/Contact";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-neutral-800 selection:text-white antialiased">
      
      {/* 1. SEAMLESS DYNAMIC NAVIGATION BAR COMPONENT */}
      <Navbar />

      {/* 2. HERO AREA */}
      <main className="max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-28 flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-88px)]">
        
        {/* Left Column: Bio Details */}
        <div className="flex-1 space-y-8 w-full order-2 lg:order-1">
          <div className="space-y-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block animate-pulse">
              // Systems & Backend Engineer
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
              Srijani Mondal. <br /> 
              <span className="text-neutral-500 text-3xl md:text-5xl font-bold block mt-2">
                Engineering at the core.
              </span>
            </h1>
          </div>

          {/* Code Dossier Window */}
          <div className="bg-neutral-900/30 border border-neutral-900 rounded-xl p-5 font-mono text-xs text-neutral-400 space-y-3 relative overflow-hidden max-w-xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <p className="leading-relaxed text-neutral-300">
              <span className="text-neutral-600">const</span> engineer = &#123;
              <br />
              &nbsp;&nbsp;focus: <span className="text-emerald-400">"Backend Systems, Microservices & Data Persistence"</span>,
              <br />
              &nbsp;&nbsp;stack: [<span className="text-purple-400">"Java", "Spring Boot", "PostgreSQL", "Feign Client", "AWS"</span>],
              <br />
              &nbsp;&nbsp;metrics: <span className="text-neutral-400">"Optimized API datasets & decoupled inter-service communications"</span>
              <br />
              &#125;;
            </p>
            <div className="h-[1px] bg-neutral-900 my-2" />
            <p className="font-sans text-neutral-400 leading-relaxed text-sm">
              I balance smooth client interfaces with highly scalable, transactional engine routing. From designing microservice frameworks to writing optimized database queries, I design logic meant to scale under production workloads.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#playground" className="bg-white text-black font-semibold px-6 py-3 rounded-lg text-sm hover:bg-neutral-200 transition-all shadow-xl hover:-translate-y-0.5 duration-300">
              Launch Sandbox
            </a>
            <a href="#projects" className="border border-neutral-800 text-neutral-300 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-neutral-900 hover:text-white transition-all hover:-translate-y-0.5 duration-300">
              View System Blueprints &rarr;
            </a>
          </div>
        </div>

        {/* Right Column: Beautiful Animated Profile Deck */}
        <div className="flex-1 w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-md aspect-[4/5] bg-neutral-900/40 border border-neutral-900 rounded-2xl flex flex-col justify-between p-4 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-neutral-800/80">
            
            {/* Ambient Background Radial Glow behind photo */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/10 via-transparent to-emerald-500/10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Upper Decor Frame */}
            <div className="flex items-center justify-between border-b border-neutral-900 pb-3 relative z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors duration-300" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500 transition-colors duration-300" />
                <div className="w-2 h-2 rounded-full bg-green-500/40 group-hover:bg-green-500 transition-colors duration-300" />
              </div>
              <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">
                CORE_AVATAR // ACTIVE
              </span>
            </div>

            {/* Main Picture Context Frame with Hover Animations */}
            <div className="flex-1 w-full relative z-10 my-3 rounded-xl overflow-hidden border border-neutral-900 bg-neutral-950 flex items-center justify-center shadow-inner">
              <Image 
                src="/srijaniprofile.jpeg" 
                alt="Srijani Mondal Profile"
                fill
                sizes="(max-w-md) 100vw"
                className="object-cover object-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-102 transition-all duration-700 ease-out"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent opacity-100 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Bottom Window Stats */}
            <div className="border-t border-neutral-900 pt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>RENDER_READY: TRUE</span>
              </div>
              <span className="text-neutral-600">SYS_v1.0.4</span>
            </div>

          </div>
        </div>

      </main>

      {/* 3. INTERACTIVE LIVE TERMINAL SANDBOX */}
      <div id="playground">
        <Playground />
      </div>

      {/* 4. SYSTEM LOG DEPENDENCIES MANIFEST */}
      <div id="dependencies">
        <Dependencies />
      </div>

      {/* 5. BACKGROUND DEVELOPMENT TIMELINE */}
      <div id="story">
        <Journey />
      </div>

      {/* 6. SYSTEM ARCHITECTURE & PROJECT BLUEPRINTS */}
      <div id="projects">
        <Projects />
      </div>

      {/* 7. RECENT OPERATIONAL ACTIVITIES */}
      <Activities />

      {/* 8. STANDARD CONTACT SECTION */}
      <div id="contact">
        <Contact />
      </div>

      {/* 9. COMMAND-LINE INTERACTIVE FOOTER PORTAL */}
      <Footer />
    </div>
  );
}