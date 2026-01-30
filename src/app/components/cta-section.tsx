import { Button } from "@/app/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl tracking-tight leading-tight font-medium">
            <span className="block">Ready to transform</span>
            <span className="block">your risk management?</span>
          </h2>
          
          <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            Join leading hedge funds leveraging AI-powered risk infrastructure to maximize alpha and ensure regulatory compliance.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-500 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-medium"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-500 transition-all duration-300 font-medium"
              onClick={() => window.location.href = 'mailto:info@phantomhedge.de?subject=Contact%20Request'}
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}