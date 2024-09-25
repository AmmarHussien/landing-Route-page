import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Cta from "./components/CTA";
import ReviewSection from "./components/Mobile";
import "../i18n"; // Import the i18n configuration
import { useTranslation } from "react-i18next";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const { i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
      <GlobalStyle />
      <div style={{ direction }}>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Redirect any invalid route to home page */}
            <Route path="*" element={<Navigate to="/landing-page" />} />

            <Route path="/landing-page" element={<Layout />}>
              <Route
                index
                element={
                  <>
                    <Hero />
                    <HowItWorks />
                    <Features />
                    <VisionMission />
                    <Services />
                    <Cta />
                  </>
                }
              />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="mobile" element={<ReviewSection />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
