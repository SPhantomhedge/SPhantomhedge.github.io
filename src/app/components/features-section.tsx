import { Target, TrendingDown, Layers, Shield, Activity, Brain } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Horizon Preservation",
    description: "Prevents macro shocks from extending your thesis realization timelines—keep strategies aligned with intended holding periods without forced premature exits.",
  },
  {
    icon: TrendingDown,
    title: "Drawdown Control Without Killing Conviction",
    description: "Reduces deep drawdowns caused by non-thesis risks while allowing you to hold core positions instead of trimming under stress.",
  },
  {
    icon: Layers,
    title: "Separation of Alpha vs Noise",
    description: "Distinguish idiosyncratic (thesis-driven) risk from systematic (macro/liquidity) noise—hedge what you don't understand, keep what you believe in.",
  },
  {
    icon: Shield,
    title: "Protection Against Forced Market Dynamics",
    description: "Shield your portfolio from forced selling by leveraged players, correlation spikes, and liquidity-driven dislocations—avoid being collateral damage.",
  },
  {
    icon: Activity,
    title: "Path Efficiency Improvement",
    description: "Smooth PnL trajectory without requiring position exits—improve time underwater, recovery speed, and make returns more usable and predictable.",
  },
  {
    icon: Brain,
    title: "Structured Decision Framework",
    description: "Avoid discretionary panic hedging and late-stage de-risking—answer 'Is this a thesis problem or a market problem?' with clarity under stress.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            Decision Intelligence for Conviction-Driven Funds
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A decision layer designed specifically for hedge funds and asset managers where deep sector expertise and long-term conviction drive alpha—not macro timing or systematic beta harvesting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}