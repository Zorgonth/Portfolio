import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import { Cursor } from "./components/Cursor";
import { Preloader } from "./components/Preloader";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 2400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <div className="grain" />
      <motion.div className="progress" style={{ scaleX }} />
      <Cursor />
      <AnimatePresence>
        {!ready && <Preloader key="loader" onDone={() => setReady(true)} />}
      </AnimatePresence>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <div className="splash">
          <Hero />
          <Marquee />
        </div>
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
