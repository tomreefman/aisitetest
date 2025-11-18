import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import VoiceVisualizer from './VoiceVisualizer';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            v2.0 Now Available
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900">
            Voice AI that <br />
            <span className="text-primary-600">actually understands.</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Replace clunky IVR systems with human-like, conversational AI agents. 
            Echo handles complex queries, bookings, and support 24/7 with <span className="text-slate-900 font-semibold">zero latency</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-50 border border-slate-200 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-primary-600" />
              Listen to Demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/32/32?random=${i}`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p>Trusted by 2,000+ innovative companies</p>
          </div>
        </motion.div>

        {/* Right Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
           {/* Decoration Circles */}
           <div className="absolute w-[500px] h-[500px] border border-slate-200 rounded-full animate-[spin_10s_linear_infinite]" />
           <div className="absolute w-[350px] h-[350px] border border-slate-200 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
           
           <div className="relative bg-white/60 border border-white/50 p-8 rounded-3xl backdrop-blur-xl shadow-2xl shadow-slate-200/50 w-full max-w-md ring-1 ring-slate-900/5">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">LIVE_AGENT_SESSION_01</div>
              </div>
              
              <VoiceVisualizer />
              
              <div className="mt-6 space-y-3">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100">
                      <p className="text-sm text-slate-600">Hello! I'd like to reschedule my appointment for next Tuesday.</p>
                  </div>
                  <div className="bg-primary-50 border border-primary-100 p-3 rounded-lg rounded-tr-none ml-auto">
                      <p className="text-sm text-primary-800">I can help with that. I have openings at 10 AM and 2 PM. Which works for you?</p>
                  </div>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;