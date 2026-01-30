import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import riskMgmt3 from "@/assets/9462767fad5c671c0132a49e93878f81b82286e0.png";

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl tracking-tight leading-[1.1] text-slate-900 font-medium">
                <span className="block">AI-Powered</span>
                <span className="block">Risk Management</span>
                <span className="block text-blue-500">for Hedge Funds</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                Advanced volatility forecasting, automated hedging, and comprehensive compliance management powered by institutional-grade AI technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
              >
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/platform">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-medium"
                >
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:block hidden">
            {/* Background decoration */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-blue-100 via-slate-50 to-blue-50 blur-3xl opacity-50"></div>
            
            {/* Image container */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={riskMgmt3} 
                  alt="RiskOS Platform - Risk Decomposition"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}