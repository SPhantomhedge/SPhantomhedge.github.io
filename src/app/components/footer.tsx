import { Linkedin, Twitter, Mail } from "lucide-react";
import logoImage from "@/assets/5708e2d101fbfbab27d9808cb219f2db50da8ca2.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Phantom Hedge Logo" className="w-8 h-8" />
              <span className="text-xl text-white">Phantom Hedge</span>
            </div>
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
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">RiskOS Platform</a></li>
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
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; 2026 Phantom Hedge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
