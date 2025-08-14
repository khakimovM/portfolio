import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Portfolio() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ParticleBackground />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
