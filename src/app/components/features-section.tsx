import { Brain, Shield, Zap, LineChart, AlertCircle, FileText } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Forecasting",
    description: "Advanced machine learning models for volatility prediction and regime detection with industry-leading accuracy.",
  },
  {
    icon: Zap,
    title: "Automated Hedging",
    description: "Real-time portfolio protection with intelligent automation that responds instantly to market conditions.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Complete DORA and EU AI Act compliance with automated reporting, attestations, and audit trails.",
  },
  {
    icon: LineChart,
    title: "Risk Decomposition",
    description: "Comprehensive portfolio analytics with multi-factor risk attribution and exposure monitoring.",
  },
  {
    icon: AlertCircle,
    title: "Threshold Monitoring",
    description: "Configurable risk thresholds with real-time alerting via email, SMS, and Slack integration.",
  },
  {
    icon: FileText,
    title: "Audit & Reporting",
    description: "Complete audit trails with automated report generation for regulatory compliance and internal review.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            Enterprise-Grade Risk Management
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Built for institutional investors who demand precision, reliability, and compliance in their risk management infrastructure.
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