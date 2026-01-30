import { Rocket, Target, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            About Phantom Hedge
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Redefining institutional risk management through advanced AI and quantitative innovation
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-12 lg:p-16 border border-slate-200 mb-16">
          <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
            <p className="text-xl">
              Phantom Hedge delivers RiskOS, an enterprise-grade risk management operating system designed specifically for hedge funds and institutional investors who demand precision, intelligence, and real-time decisioning capabilities.
            </p>
            <p>
              Traditional risk management systems treat risk as a periodic compliance exercise, generating static reports that quickly become outdated in dynamic markets. RiskOS transforms this paradigm by positioning risk at the center of portfolio decision-making, enabling continuous monitoring, intelligent forecasting, and automated protection strategies that maximize alpha while maintaining robust risk controls.
            </p>
            <p>
              Our platform integrates advanced AI-powered volatility forecasting and regime detection with automated hedging capabilities and comprehensive compliance management. By combining institutional-grade quantitative models with cutting-edge machine learning techniques, we provide fund managers with the tools they need to navigate complex market environments, optimize portfolio performance, and ensure full regulatory compliance across DORA and EU AI Act requirements.
            </p>
            <p>
              RiskOS is built for the modern financial landscape where speed, accuracy, and adaptability are paramount. Our technology empowers portfolio managers, risk officers, and compliance teams to make informed decisions backed by forward-looking analytics, real-time monitoring, and intelligent automation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Innovation First</h3>
            <p className="text-slate-600 leading-relaxed">
              Developing cutting-edge AI and quantitative models for institutional risk management
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Precision Engineering</h3>
            <p className="text-slate-600 leading-relaxed">
              Building robust risk infrastructure with engineering-grade quality and reliability
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
            <div className="inline-flex p-4 rounded-2xl bg-blue-500 mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Alpha Generation</h3>
            <p className="text-slate-600 leading-relaxed">
              Transforming risk from a reporting function into a continuous alpha-maximizing process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}