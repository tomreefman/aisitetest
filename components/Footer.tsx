import React from 'react';
import { Mic, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center shadow-md shadow-primary-600/20">
                <Mic className="w-3 h-3 text-white" />
               </div>
               <span className="text-lg font-bold font-display text-slate-900">Echo AI</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Building the future of voice interaction. Natural, fast, and infinitely scalable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 Echo AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;