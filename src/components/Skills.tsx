import { motion } from "framer-motion";
import { skillGroups } from "../data";
import { fadeUp } from "../motion";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">03 / Stack</span>
          <h2>What I work with</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="skill-block"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3>{group.label}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
