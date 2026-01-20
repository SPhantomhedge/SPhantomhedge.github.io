import { Button } from "@/app/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-800/30 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-200">Enterprise Risk Management</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl tracking-tight">
              <span className="block">AI-Powered</span>
              <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Risk Management
              </span>
              <span className="block">for Hedge Funds</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-lg">
              Advanced volatility forecasting, automated hedging, and comprehensive compliance management powered by institutional-grade AI technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              >
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-300 text-blue-100 hover:bg-blue-800/50"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-8 border-t border-blue-800/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-2xl">AI-Based</div>
                  <div className="text-sm text-blue-300">Forecasting & Hedging</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-lg border border-blue-400/20 flex items-center justify-center">
                  <Shield className="w-24 h-24 text-blue-400/40" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-blue-900/30 rounded border border-blue-400/10"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}