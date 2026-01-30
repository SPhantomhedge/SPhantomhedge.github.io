import { Link } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import logoImage from "figma:asset/5708e2d101fbfbab27d9808cb219f2db50da8ca2.png";
import logoText from "figma:asset/eafe7f001b3bfacb3c565ee9fb1c60ab97d51f24.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src={logoImage} 
              alt="Phantom Hedge Logo" 
              className="h-[5.25rem] w-auto"
            />
            <img 
              src={logoText} 
              alt="Phantom Hedge" 
              className="h-[6rem] w-auto hidden sm:block"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-slate-600 hover:text-blue-500 transition-colors">
              Features
            </Link>
            <Link to="/platform" className="text-slate-600 hover:text-blue-500 transition-colors">
              Platform
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link to="/careers" className="text-slate-600 hover:text-blue-500 transition-colors">
              Careers
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex text-slate-700 hover:text-blue-500"
              onClick={() => window.location.href = 'mailto:info@phantomhedge.de?subject=Contact%20Request'}
            >
              Contact Us
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}