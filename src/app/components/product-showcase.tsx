import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Compliance & Audit images (merged from previous Compliance & Risk Management sections)
import complianceImage1 from "figma:asset/dcccec9ab6fc81c23f11593ffb5a64564800a6e2.png";
import complianceImage2 from "figma:asset/3dbddd27f22e60cc0fa9cc7acbe0bb424570d0b9.png";
import complianceImage3 from "figma:asset/2afe487897bb97d369af307dc17bd7ca590766ab.png";
import complianceImage4 from "figma:asset/b06630c699f506f612cf79de1434974d03b6c0e8.png";
import complianceImage5 from "figma:asset/6474686fd9dda5d1219ebe4309b0b25932996911.png";
import complianceImage6 from "figma:asset/c09701679cfa6963e3567cbd284870285f9f07d0.png";
import complianceImage7 from "figma:asset/db3c7567ef379a68ae1131555d551898b7a1e0dc.png";
import complianceImage8 from "figma:asset/c8c850617bd05139c071f614ec52fdff12e20677.png";
import complianceImage9 from "figma:asset/636605eda623c68e24c650ba4e9072e5bb9fb18d.png";

// Risk Management images (new screenshots)
import riskMgmt1 from "figma:asset/d4efbc01affae8f2f69c829eb3e1894aa5890032.png";
import riskMgmt2 from "figma:asset/94975f34315f48a1fa35144e8554e858ff0506e6.png";
import riskMgmt3 from "figma:asset/9462767fad5c671c0132a49e93878f81b82286e0.png";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};

export function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
            RiskOS Platform
          </h2>
          <p className="text-xl text-slate-600">
            A comprehensive risk management operating system designed for the demands of modern hedge funds and institutional investors.
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Compliance & Audit Section */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl mb-4 text-slate-900">Compliance & Audit</h3>
              <p className="text-lg text-slate-600">
                Comprehensive DORA and EU AI Act compliance management with automated model monitoring, attestations, audit trails, ICT risk management, and incident reporting.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-lg p-4">
              <Slider {...sliderSettings}>
                {[
                  { src: complianceImage1, alt: "AI Model Compliance Dashboard" },
                  { src: complianceImage2, alt: "Attestations Management" },
                  { src: complianceImage9, alt: "Audit History" },
                  { src: complianceImage4, alt: "DORA Resilience Testing" },
                  { src: complianceImage5, alt: "ICT Incident Reporting" },
                  { src: complianceImage6, alt: "ICT Risk Management" },
                  { src: complianceImage7, alt: "Risk Thresholds" },
                  { src: complianceImage8, alt: "Threshold Configuration" },
                  { src: complianceImage3, alt: "Third Party Risk" },
                ].map((image, index) => (
                  <div key={index} className="px-2">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Risk Management Section */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl mb-4 text-slate-900">Risk Management</h3>
              <p className="text-lg text-slate-600">
                Advanced portfolio risk analytics, forward-looking risk simulations with AI-powered forecasting, and real-time risk decomposition across multiple factors.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-lg p-4">
              <Slider {...sliderSettings}>
                {[
                  { src: riskMgmt1, alt: "Hedging Lab & Forward-Looking Simulations" },
                  { src: riskMgmt2, alt: "AI-Generated Simulations & Risk Analysis" },
                  { src: riskMgmt3, alt: "Risk Decomposition Analysis" },
                ].map((image, index) => (
                  <div key={index} className="px-2">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Monitoring & Alerts Section */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl mb-4 text-slate-900">Monitoring & Alerts</h3>
              <p className="text-lg text-slate-600">
                Configurable risk thresholds with multi-channel notifications and comprehensive audit logging for all system activities.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-lg p-4">
              <Slider {...sliderSettings}>
                {[
                  { src: complianceImage7, alt: "Risk Thresholds" },
                  { src: complianceImage8, alt: "Threshold Configuration" },
                  { src: complianceImage3, alt: "Third Party Risk Monitoring" },
                ].map((image, index) => (
                  <div key={index} className="px-2">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
