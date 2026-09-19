import { motion } from "framer-motion";
import { featuredWork, moreWork } from "../data";
import { ease } from "../motion";

function Visual({ kind }: { kind: string }) {
  if (kind === "dma") {
    return (
      <div className="art art-dma">
        <div className="grid" />
        <div className="pulse-ring" />
        <div className="pulse-ring delay" />
      </div>
    );
  }
  if (kind === "sky") {
    return (
      <div className="art art-sky">
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
      </div>
    );
  }
  if (kind === "pong") {
    return (
      <div className="art art-pong">
        <div className="court" />
        <div className="paddle left" />
        <div className="paddle right" />
        <div className="ball" />
      </div>
    );
  }
  return (
    <div className="art art-certs">
      <div className="sheet" />
    </div>
  );
}

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">01 / Selected work</span>
          <h2>Some of the work</h2>
        </div>

        <div className="work-list">
          {featuredWork.map((project, i) => (
            <motion.article
              key={project.id}
              className="work-card"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              whileHover={{ y: -8 }}
            >
              <div className="work-visual">
                <Visual kind={project.visual} />
                <span className="work-shine" />
              </div>
              <div className="work-body">
                <div className="work-top">
                  <span>{project.index}</span>
                  <span>
                    {project.year} · {project.role}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="work-links">
                  {project.live && (
                    <a className="btn btn-solid" href={project.live} target="_blank" rel="noreferrer">
                      Live site
                    </a>
                  )}
                  {project.repo && (
                    <a className="btn btn-ghost" href={project.repo} target="_blank" rel="noreferrer">
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="more-grid">
          {moreWork.map((item, i) => {
            const inner = (
              <>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
                <div className="chips">
                  {item.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </>
            );
            const motionProps = {
              className: "more-card" as const,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 0.55, delay: i * 0.06, ease },
              whileHover: { y: -6 },
            };
            return item.href ? (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                {...motionProps}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={item.title} {...motionProps}>
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
