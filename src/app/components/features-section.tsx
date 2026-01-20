import { Brain, Shield, Zap, LineChart, AlertCircle, FileText } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Forecasting",
    description: "Advanced machine learning models for volatility prediction and regime detection with industry-leading accuracy.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Automated Hedging",
    description: "Real-time portfolio protection with intelligent automation that responds instantly to market conditions.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Complete DORA and EU AI Act compliance with automated reporting, attestations, and audit trails.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: LineChart,
    title: "Risk Decomposition",
    description: "Comprehensive portfolio analytics with multi-factor risk attribution and exposure monitoring.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: AlertCircle,
    title: "Threshold Monitoring",
    description: "Configurable risk thresholds with real-time alerting via email, SMS, and Slack integration.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: FileText,
    title: "Audit & Reporting",
    description: "Complete audit trails with automated report generation for regulatory compliance and internal review.",
    color: "from-blue-400 to-cyan-400",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
            Enterprise-Grade Risk Management
          </h2>
          <p className="text-xl text-slate-600">
            Built for institutional investors who demand precision, reliability, and compliance in their risk management infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-5`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
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
