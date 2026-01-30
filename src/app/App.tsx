import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { HomePage } from "@/app/pages/home";
import { FeaturesPage } from "@/app/pages/features";
import { PlatformPage } from "@/app/pages/platform";
import { AboutPage } from "@/app/pages/about";
import { CareersPage } from "@/app/pages/careers";
import { PrivacyPage } from "@/app/pages/privacy";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
