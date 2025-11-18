import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Logo Cloud Section */}
        <div className="border-y border-slate-100 bg-slate-50/50 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Powering next-gen startups</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    {['Acme', 'Bolt', 'Nvidia', 'Stripe', 'Raycast'].map((logo) => (
                        <span key={logo} className="text-xl font-bold text-slate-900 font-display">{logo}</span>
                    ))}
                </div>
            </div>
        </div>

        <Features />
        
        {/* Interactive CTA Break */}
        <section className="py-24 px-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white" />
             
             <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 p-12 rounded-3xl border border-slate-800 shadow-2xl shadow-slate-900/20 overflow-hidden relative"
                >
                    {/* Subtle background glow inside the dark CTA card */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/50 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">Ready to build?</h2>
                      <p className="text-slate-400 mb-8 text-lg">Get your API key in seconds and start streaming voice conversations immediately.</p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/25">
                              Get API Key
                          </button>
                          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/10 transition-all">
                              Read Documentation
                          </button>
                      </div>
                    </div>
                </motion.div>
             </div>
        </section>

        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;