import { motion } from "framer-motion";
import { education, languages } from "../data";
import { fadeUp } from "../motion";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <motion.div
          className="about-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="kicker">04 / About</span>
          <h2>Hi — I’m Saadoun.</h2>
          <p>
            I grew up in Algeria, started in process engineering, then moved to
            Germany and threw myself into 42 Heilbronn. No lectures, no
            hand-holding: you pick a project, get stuck, figure it out, and
            have other students tear it apart. That’s still how I like to work.
          </p>
          <p>
            I interned at Digital Medical Academy in Stuttgart for about a year.
            DMA trains medical staff, and I sat on the admin tools behind that:
            syncing certificates out of their LMS, QR attendance, reminder
            emails, rewriting login so people could jump between apps, Stripe
            for billing. A lot of connecting systems that didn’t talk to each
            other, then making sure it still worked when real people used it.
            Before DMA I freelanced for SwiftSky — their site, AWS, a mailing
            setup.
          </p>
          <p>
            The internship wrapped in August, so right now I’m in that in-between
            stretch. I’m building personal projects to stay in the code, try
            ideas I didn’t have time for at work, and keep learning. I’m also
            looking for a full-time role on a team that ships real product —
            Heilbronn, Stuttgart, remote, I’m flexible.
          </p>
          <p>
            I speak {languages.slice(0, -1).join(", ")} and {languages.at(-1)}.
            If you’ve got a role in mind, or you just want to talk about a
            project, write me.
          </p>
        </motion.div>
        <div className="side-stack">
          {education.map((ed) => (
            <motion.article
              key={ed.school}
              className="edu-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="kicker">{ed.dates}</span>
              <h3>{ed.school}</h3>
              <p>
                {ed.detail}
                <br />
                {ed.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
