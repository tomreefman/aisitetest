import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Enterprise', href: '#enterprise' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative w-8 h-8 flex items-center justify-center bg-primary-600 rounded-lg overflow-hidden group-hover:rotate-12 transition-transform shadow-lg shadow-primary-600/20">
            <Mic className="w-5 h-5 text-white relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-cyan-400 opacity-50" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">Echo AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
            Log in
          </a>
          <button className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.2)]">
            Start Free Trial
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button className="w-full py-3 bg-slate-900 text-white font-semibold rounded-lg">
                  Start Free Trial
                </button>
                <button className="w-full py-3 text-slate-900 border border-slate-200 rounded-lg">
                  Log in
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;