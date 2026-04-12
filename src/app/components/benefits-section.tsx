import { Check } from "lucide-react";

const benefits = [
  {
    category: "For Portfolio Managers",
    items: [
      "Maintain core positions through macro volatility without premature trimming",
      "Clear separation: Is this a thesis problem or a market problem?",
      "Avoid panic decisions and late-stage de-risking that lock in losses",
      "Keep strategies aligned with intended holding periods",
    ],
  },
  {
    category: "For Risk Managers",
    items: [
      "Prevent macro shocks from extending thesis realization timelines",
      "Control drawdowns without killing conviction",
      "Smooth PnL trajectory without requiring position exits",
      "Shield portfolio from forced selling and correlation spikes",
    ],
  },
  {
    category: "For LPs & Investors",
    items: [
      "Reduced visible volatility decreases redemption pressure",
      "Faster recovery cycles from shallower drawdowns",
      "More predictable returns improve long-term capital trust",
      "Consistent risk framework across different thematic strategies",
    ],
  },
];

export function BenefitsSection() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            When Conviction Meets Volatility
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A decision layer for hedge funds and asset managers where deep sector expertise drives strategy while macro noise shouldn't determine outcomes.
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