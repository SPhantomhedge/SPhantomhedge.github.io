import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Compliance & Audit images
import complianceOverview from "figma:asset/491216e9ed3dac08820527b3d58ea42a202fead1.png";
import aiModelCompliance from "figma:asset/2b64b2814d42b2e8d0ba0b1b35c40b90e8685542.png";
import doraMonitoring from "figma:asset/19db3913c1d573d3ee76a6143b36e01117ebe8e5.png";

// Risk Management images
import aiSimulation from "figma:asset/f5762359bfbcb0b10162367f1369fe9ada3d3d91.png";
import aiCausality from "figma:asset/e3706ea70242f2c919aab9509eb0f79b41963fc4.png";
import riskDecomposition from "figma:asset/6d34c3947e7ab1432ddaa3f3f071917f68229641.png";

// Monitoring & Hedging images
import alertsConfig from "figma:asset/0b7f6c8aca120df73be8b8603b9a4c95687eb8f4.png";
import prePostHedge from "figma:asset/23b35a187996874db9233e1ebb2d35ad532c8f18.png";
import hedgeResults from "figma:asset/8dbacd66400a24c21ee285fe32a8184e29394159.png";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};

const sections = {
  compliance: {
    title: "Compliance & Audit",
    description: "Comprehensive DORA and EU AI Act compliance management with automated model monitoring, attestations, and audit trails.",
    panels: [
      {
        src: complianceOverview,
        title: "Compliance Overview",
        description: "Real-time compliance scoring across all policy areas with trend analysis and actionable insights."
      },
      {
        src: aiModelCompliance,
        title: "AI Model Compliance",
        description: "Complete lifecycle management and monitoring of AI models with compliance tracking and risk classification."
      },
      {
        src: doraMonitoring,
        title: "DORA Monitoring",
        description: "ICT risk management framework with detailed control area tracking and automated regulatory compliance checks."
      }
    ],
  },
  riskManagement: {
    title: "Risk Management",
    description: "Advanced AI-powered risk analytics with forward-looking simulations and comprehensive portfolio risk decomposition.",
    panels: [
      {
        src: aiSimulation,
        title: "AI-Generated Simulations",
        description: "Forward-looking risk simulations using regime prediction and volatility forecasting with detailed metrics including VaR, CVaR, and Sharpe Ratio."
      },
      {
        src: aiCausality,
        title: "AI-Based Causality Overview",
        description: "Real-time news and event analysis with AI-powered impact assessment on portfolio risk and sector exposure."
      },
      {
        src: riskDecomposition,
        title: "Risk Decomposition View",
        description: "Multi-level risk decomposition analysis with CVaR breakdown across sectors, instruments, and risk factors."
      }
    ],
  },
  monitoringHedging: {
    title: "Monitoring & Hedging",
    description: "Configurable risk thresholds with intelligent hedging strategies and comprehensive pre/post hedge analysis.",
    panels: [
      {
        src: alertsConfig,
        title: "Alerts Configuration",
        description: "Customizable risk metric thresholds with multi-channel notifications via email, SMS, and Slack integration."
      },
      {
        src: prePostHedge,
        title: "Pre vs Post Hedge Comparison",
        description: "Interactive portfolio P&L distribution analysis showing the impact of hedging strategies on risk reduction."
      },
      {
        src: hedgeResults,
        title: "Hedge Instruments",
        description: "Detailed hedge instrument allocation with Greeks analysis and position optimization for portfolio protection."
      }
    ],
  },
};

export function ProductShowcase() {
  const [activeSection, setActiveSection] = useState<'compliance' | 'riskManagement' | 'monitoringHedging'>('compliance');
  
  const currentSection = sections[activeSection];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            RiskOS Platform
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A comprehensive risk management operating system designed for the demands of modern hedge funds and institutional investors.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveSection('compliance')}
            className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
              activeSection === 'compliance'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Compliance & Audit
          </button>
          <button
            onClick={() => setActiveSection('riskManagement')}
            className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
              activeSection === 'riskManagement'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Risk Management
          </button>
          <button
            onClick={() => setActiveSection('monitoringHedging')}
            className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
              activeSection === 'monitoringHedging'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Monitoring & Hedging
          </button>
        </div>

        {/* Section Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl mb-4 text-slate-900">{currentSection.title}</h3>
          <p className="text-lg text-slate-600 leading-relaxed">{currentSection.description}</p>
        </div>

        {/* Panels Grid */}
        <div className="space-y-32">
          {currentSection.panels.map((panel, index) => (
            <div key={index} className={`grid lg:grid-cols-12 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Text Content */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                <div className="inline-flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500 text-white font-semibold text-lg">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent max-w-[60px]"></div>
                </div>
                <h4 className="text-4xl text-slate-900 font-medium leading-tight">{panel.title}</h4>
                <p className="text-lg text-slate-600 leading-relaxed">{panel.description}</p>
              </div>
              
              {/* Image Panel - Clean Professional Design */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  {/* Browser-like window chrome */}
                  <div className="bg-slate-100 rounded-t-xl px-4 py-3 flex items-center gap-2 border border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="ml-4 flex-1 bg-white rounded px-3 py-1 text-xs text-slate-400 font-mono">
                      riskos.phantomhedge.com
                    </div>
                  </div>
                  
                  {/* Image container */}
                  <div className="relative bg-white border-x border-b border-slate-200 rounded-b-xl overflow-hidden shadow-2xl">
                    <img 
                      src={panel.src} 
                      alt={panel.title}
                      className="w-full h-auto object-cover object-top"
                      style={{ maxHeight: '600px' }}
                    />
                    {/* Subtle bottom fade for cropped images */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -top-8 -left-8 w-48 h-48 bg-slate-500/5 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}