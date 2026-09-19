import { motion } from "framer-motion";
import { experience } from "../data";
import { fadeUp } from "../motion";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">02 / Experience</span>
          <h2>Jobs so far</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <motion.article
              key={job.company}
              className="exp"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="exp-meta">
                <strong>{job.dates}</strong>
                {job.place}
              </div>
              <div>
                <h3>{job.company}</h3>
                <div className="type">
                  {job.role} · {job.type}
                </div>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
