import { motion } from "framer-motion";
import { profile } from "../data";
import { fadeUp, stagger } from "../motion";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="wrap">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div className="availability" variants={fadeUp}>
            <span className="pulse" />
            {profile.availability}
          </motion.div>
          <motion.h1 variants={fadeUp}>
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>
          </motion.h1>
        </motion.div>

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-copy">
              Full-stack developer in Heilbronn. I just finished a year at DMA
              and I’m filling the gap with personal projects while I look for a
              full-time role.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#work">
                See selected work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero-side"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="stat-row">
              <div className="stat-card">
                <strong>1+</strong>
                <span>Year in production</span>
              </div>
              <div className="stat-card">
                <strong>42</strong>
                <span>Heilbronn, then industry</span>
              </div>
            </div>
            <div className="now-card">
              <span>Right now</span>
              <p>
                Hacking on my own stuff, keeping the stack sharp, and talking to
                teams about a full-time job.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
