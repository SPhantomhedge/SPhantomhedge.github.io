import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import logoImage from "@/assets/5708e2d101fbfbab27d9808cb219f2db50da8ca2.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Phantom Hedge Logo" className="w-12 h-12" />
              <span className="text-xl text-white font-medium">Phantom Hedge</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              AI-powered risk management for institutional investors and hedge funds.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@phantomhedge.de" 
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link to="/platform" className="hover:text-blue-400 transition-colors">RiskOS Platform</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hedge Funds</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Asset Managers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Family Offices</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Institutional Investors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><a href="mailto:info@phantomhedge.de" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2026 Phantom Hedge. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
            </div>
          </div>
          
          <div className="text-xs text-slate-500 text-center md:text-left leading-relaxed">
            <p>
              Phantom Hedge UG is registered in Berlin Charlottenburg (Amtsgericht). 
              Geschäftsführer: Ganapa Sai Raghava Reddy. Handelsregisternummer: HRB274189B.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}