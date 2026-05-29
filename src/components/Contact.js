'use client';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-20 border-t border-neutral-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div className="space-y-4 max-w-xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Let's build <br />
            <span className="text-neutral-500">something solid.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Whether you are looking to scale backend infrastructure, optimize deep relational database pipelines, or discuss system architecture layouts, let's connect.
          </p>
        </div>

        <div>
          {/* Updated href to link directly to your LinkedIn profile */}
          <a 
            href="https://www.linkedin.com/in/srijani-m-59a013249/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-8 py-4 rounded-md hover:bg-neutral-200 transition-all group cursor-pointer"
          >
            Get In Touch 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}