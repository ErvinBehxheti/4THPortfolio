import "./App.css"
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import AboutHero from "./pages/About";
import ProjectsGrid from "./pages/Projects";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <HeroSection />
        <AboutHero />
        <ProjectsGrid />
        <ContactForm />
        <SocialLinks />
      </motion.div>
    </>
  );
}

export default App;
