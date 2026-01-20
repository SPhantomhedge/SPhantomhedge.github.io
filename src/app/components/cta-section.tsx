import { Button } from "@/app/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative space-y-8">
            <h2 className="text-4xl lg:text-5xl">
              Ready to Transform Your Risk Management?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join leading hedge funds in leveraging AI-powered risk management. Schedule a personalized demo with our team.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Sales
              </Button>
            </div>
            
            <div className="pt-8 text-blue-200 text-sm">
              Trusted by institutional investors managing over $50B in assets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
