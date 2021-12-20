import "./App.css";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [sticky, setStick] = useState(false);

  const addSticky = () => {
    if (window.scrollY >= 1200) {
      setStick(true);
    } else {
      setStick(false);
    }
  };

  window.addEventListener("scroll", addSticky);

  return (
    <div className={sticky ? "sticky" : ""}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
