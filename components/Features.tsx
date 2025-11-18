import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Heart, Shield, Lock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative bg-slate-50/50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Why Developers Choose Echo
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-semibold mb-6 text-slate-900 tracking-tight"
          >
            More than just <span className="text-primary-600">Text-to-Speech</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Echo is a complete cognitive audio platform designed to handle the nuances of human conversation at scale.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* Feature 1: Latency (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 text-slate-900" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 text-amber-600">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-slate-900 mb-2">Real-time Latency</h3>
                <p className="text-slate-500 max-w-md">Processing speeds under 500ms ensure natural, interruptible conversations that feel completely human.</p>
              </div>

              {/* Visualization: Latency Timeline */}
              <div className="w-full bg-slate-50 rounded-xl border border-slate-100 p-4 flex items-center gap-4">
                 <div className="flex-1 flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-400 uppercase w-12">User</span>
                        <div className="h-8 flex-1 bg-slate-200/50 rounded-md overflow-hidden flex items-center px-2 gap-1">
                            {[...Array(12)].map((_, i) => (
                                <motion.div 
                                    key={i}
                                    className="w-1 bg-slate-400 rounded-full"
                                    animate={{ height: [10, 20, 10] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-primary-500 uppercase w-12">Echo</span>
                        {/* The Gap */}
                        <div className="w-12 flex flex-col items-center justify-center relative">
                           <div className="h-px w-full bg-primary-200 relative" />
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary-600 bg-slate-50 px-1">300ms</div>
                        </div>
                        <div className="h-8 flex-1 bg-primary-50 rounded-md overflow-hidden flex items-center px-2 gap-1">
                            {[...Array(12)].map((_, i) => (
                                <motion.div 
                                    key={i}
                                    className="w-1 bg-primary-500 rounded-full"
                                    animate={{ height: [10, 24, 10] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 + 0.5 }}
                                />
                            ))}
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Language Support (Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 group relative bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500"
          >
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">Global Reach</h3>
                <p className="text-slate-500 text-sm mb-8">Instantly speak 95+ languages with native accents and dialects.</p>

                {/* Visual: Floating Languages */}
                <div className="relative flex-1 min-h-[120px] w-full flex items-center justify-center">
                    <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                        {['Hello', 'Bonjour', 'Hola', '你好', 'Ciao', 'Olá', 'Namaste', 'Hallo'].map((lang, i) => (
                            <motion.div
                                key={lang}
                                className="absolute bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full text-xs font-medium text-slate-600"
                                animate={{ 
                                    y: [0, -20, 0],
                                    x: [0, Math.random() * 20 - 10, 0],
                                    opacity: [0.4, 1, 0.4]
                                }}
                                transition={{ 
                                    duration: 4 + Math.random() * 3, 
                                    repeat: Infinity, 
                                    delay: i * 0.8,
                                    ease: "easeInOut" 
                                }}
                                style={{
                                    top: `${Math.random() * 80 + 10}%`,
                                    left: `${Math.random() * 80 + 10}%`,
                                }}
                            >
                                {lang}
                            </motion.div>
                        ))}
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Feature 3: Sentiment Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 group relative bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500"
          >
             <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-4 text-pink-600">
                  <Heart className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">Sentiment Analysis</h3>
             <p className="text-slate-500 text-sm mb-6">Detects user emotion and adjusts tone in real-time.</p>
             
             <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                    <span>Neutral</span>
                    <span className="text-pink-600">Empathetic</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden relative">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-400 to-pink-500"
                        animate={{ width: ["30%", "80%", "45%", "90%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <div className="mt-3 flex gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                    <div className="h-1.5 w-8 rounded-full bg-slate-200" />
                    <div className="h-1.5 w-12 rounded-full bg-slate-200" />
                </div>
             </div>
          </motion.div>

          {/* Feature 4: Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 group relative bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500"
          >
             <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                  <Shield className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">Enterprise Security</h3>
             <p className="text-slate-500 text-sm mb-6">SOC2 Type II compliant with PII redaction.</p>
             
             <div className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-lg border border-emerald-100/50">
                 <div className="bg-white p-2 rounded-md shadow-sm">
                     <Lock className="w-4 h-4 text-emerald-600" />
                 </div>
                 <div className="flex flex-col gap-1.5 flex-1">
                     <div className="h-1.5 w-16 rounded-full bg-emerald-200" />
                     <div className="h-1.5 w-10 rounded-full bg-emerald-200/60" />
                 </div>
                 <div className="text-[10px] font-mono text-emerald-700 font-medium bg-white px-1.5 py-0.5 rounded border border-emerald-100">
                     ENCRYPTED
                 </div>
             </div>
          </motion.div>

          {/* Feature 5: Scalability (Fill remaining space or make it a 3rd col item) */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 group relative bg-slate-900 rounded-3xl border border-slate-800 p-8 overflow-hidden hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-500"
          >
             <div className="relative z-10">
                 <h3 className="text-xl font-display font-semibold text-white mb-2">Infinite Scale</h3>
                 <p className="text-slate-400 text-sm mb-6">Handle 10k+ concurrent calls without degradation.</p>
                 <div className="flex gap-1 items-end h-12">
                     {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                         <motion.div 
                            key={i}
                            className="flex-1 bg-primary-500 rounded-t-sm opacity-80"
                            initial={{ height: '10%' }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                         />
                     ))}
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;