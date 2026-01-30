import { Check } from "lucide-react";

const benefits = [
  {
    category: "For Risk Managers",
    items: [
      "Real-time portfolio risk monitoring and decomposition",
      "AI-powered regime detection and volatility forecasting",
      "Automated hedging recommendations with backtesting",
      "Comprehensive audit trails for all decisions",
    ],
  },
  {
    category: "For Compliance Officers",
    items: [
      "Complete DORA and EU AI Act compliance coverage",
      "Automated attestation and certification management",
      "Third-party risk monitoring and due diligence",
      "One-click regulatory report generation",
    ],
  },
  {
    category: "For Portfolio Managers",
    items: [
      "Multi-factor risk attribution and exposure analysis",
      "Stress testing and scenario analysis tools",
      "Integration with existing portfolio systems",
      "Customizable alerts and threshold monitoring",
    ],
  },
];

export function BenefitsSection() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            Built for Institutional Excellence
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Designed to meet the rigorous demands of hedge funds, asset managers, and institutional investors.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-10 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <h3 className="text-2xl mb-8 text-slate-900">
                {benefit.category}
              </h3>
              <ul className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}