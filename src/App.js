import "./App.css";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
