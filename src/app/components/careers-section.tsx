import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Code, Brain, Users } from "lucide-react";

export function CareersSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent('Quantitative Developer - Initiative Application');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLinkedIn: ${formData.linkedIn}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@phantomhedge.de?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="careers" className="py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're building the future of risk management. If you're passionate about AI, quantitative finance, and engineering excellence, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Job Description */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl mb-4">Quantitative Developer</h3>
              <p className="text-lg text-blue-100 mb-2">
                Initiative Application
              </p>
              <p className="text-blue-50">
                Full Time • Remote or Berlin
              </p>
            </div>

            <div>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                We're looking for talented quantitative developers to join our team and help build RiskOS, the next generation of risk management infrastructure for hedge funds and institutional investors.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-slate-900">Technical Excellence</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Strong background in Python, C++, or similar languages. Experience with quantitative finance, machine learning, or risk modeling is a plus.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-slate-900">AI & Quantitative Skills</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Knowledge of AI/ML techniques, statistical modeling, and quantitative analysis. Understanding of financial markets and risk management frameworks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-slate-900">Startup Mindset</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Self-motivated, entrepreneurial spirit with the ability to work in a fast-paced environment. Strong problem-solving and communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-3xl mb-8 text-slate-900">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base text-slate-700">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-2 h-12 bg-white border-slate-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base text-slate-700">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2 h-12 bg-white border-slate-300"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base text-slate-700">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 123 456 7890"
                  className="mt-2 h-12 bg-white border-slate-300"
                />
              </div>

              <div>
                <Label htmlFor="linkedIn" className="text-base text-slate-700">LinkedIn Profile</Label>
                <Input
                  id="linkedIn"
                  name="linkedIn"
                  type="url"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="mt-2 h-12 bg-white border-slate-300"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base text-slate-700">Why do you want to join Phantom Hedge? *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your experience, skills, and why you're interested in joining our team..."
                  rows={6}
                  className="mt-2 bg-white border-slate-300"
                />
              </div>

              <Button type="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white">
                Submit Application
              </Button>

              <p className="text-sm text-slate-500 text-center">
                Your application will be sent to <a href="mailto:info@phantomhedge.de" className="text-blue-500 hover:underline">info@phantomhedge.de</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}