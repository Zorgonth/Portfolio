import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { fadeUp } from "../motion";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("sent");
    } catch {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <motion.div
          className="contact-lead"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="kicker">05 / Contact</span>
          <h2>Say hi</h2>
          <p>
            Looking for a full-time gig, but I’m around for a conversation either
            way. Email’s the fastest — I do read it.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <small>Email</small>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/zorgonth
              <small>GitHub</small>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <small>Profile</small>
            </a>
            <span>
              {profile.location}
              <small>Based in</small>
            </span>
          </div>
        </motion.div>

        <motion.form
          className="form"
          onSubmit={onSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" required placeholder="Role, project, or just hello" />
          </label>
          <button className="btn btn-solid" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <div className={`form-status${status === "error" ? " is-error" : ""}`}>
            {status === "sent" && "Got it — I’ll reply."}
            {status === "error" && "That didn’t go through. Opening your mail app instead."}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
