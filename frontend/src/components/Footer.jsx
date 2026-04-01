import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold text-cyan-400 mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              &lt;SM /&gt;
            </h3>
            <p className="text-slate-400 text-sm">
              Data Engineer passionate about building scalable, high-performance data pipelines that drive business impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:subhadeep.mondal2001@gmail.com"
                className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/subhadeep-mondal-kiit/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/smondal1174"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2025 Subhadeep Mondal. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center">
              Built with <Heart size={14} className="mx-1 text-cyan-400" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;