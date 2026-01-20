import { Button } from "@/app/components/ui/button";
import { Menu } from "lucide-react";
import logoImage from "figma:asset/5708e2d101fbfbab27d9808cb219f2db50da8ca2.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Phantom Hedge Logo" className="w-10 h-10" />
            <span className="text-2xl text-slate-900">Phantom Hedge</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#platform" className="text-slate-600 hover:text-blue-600 transition-colors">
              Platform
            </a>
            <a href="#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
              About
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-slate-600">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Demo
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
