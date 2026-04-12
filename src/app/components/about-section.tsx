import { Target, Shield, TrendingUp, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            About Phantom Hedge
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A decision layer for hedge funds and asset managers where conviction drives alpha—and macro noise shouldn't determine outcomes
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-12 lg:p-16 border border-slate-200 mb-16">
          <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
            <p className="text-xl">
              Phantom Hedge delivers a conviction-preserving decision layer designed specifically for hedge funds and asset managers where deep sector expertise and long-term conviction drive alpha—not macro timing or systematic beta harvesting.
            </p>
            <p>
              The challenge for thematic funds isn't managing risk—it's managing the <em>right</em> risk. When a correct thesis takes 18 months to play out but a macro shock extends it to 36 months, that's not a risk management success story. When forced selling by leveraged players creates correlation spikes that punish your best ideas, trimming positions isn't conviction—it's capitulation.
            </p>
            <p>
              Our decision layer helps funds preserve conviction while neutralizing non-thesis risk. We separate idiosyncratic (thesis-driven) risk from systematic (macro/liquidity) noise, enabling you to hedge what you don't understand while protecting what you believe in. The result: shallower drawdowns, faster recovery cycles, and strategies that stay aligned with intended holding periods—without killing the alpha that comes from conviction.
            </p>
            <p>
              By combining AI-powered regime detection and volatility forecasting with intelligent hedging automation, we provide portfolio managers with a structured framework for decision-making under stress. The question isn't "should we de-risk?"—it's "is this a thesis problem or a market problem?" Our decision layer answers that question with clarity, preventing panic hedging that locks in losses and preserving the path efficiency that makes returns actually usable.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Conviction Preservation</h3>
            <p className="text-slate-600 leading-relaxed">
              Enabling funds to hold core positions through macro volatility without premature trimming or forced exits
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Thesis Protection</h3>
            <p className="text-slate-600 leading-relaxed">
              Shielding portfolios from forced market dynamics and correlation spikes—avoid being collateral damage
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Path Efficiency</h3>
            <p className="text-slate-600 leading-relaxed">
              Smoothing PnL trajectory without requiring position exits—improving time underwater and recovery speed
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Capital Stability</h3>
            <p className="text-slate-600 leading-relaxed">
              Reducing visible volatility lowers investor anxiety and redemption pressure—maintaining AUM stability and long-term capital trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}