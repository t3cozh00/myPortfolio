import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <form
          className="card p-6 space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-3"
            placeholder="Your name"
            required
          />
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-3"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-3"
            rows={5}
            placeholder="Message"
            required
          />
          <button className="btn btn-accent" type="submit">
            Send
          </button>
        </form>
        <div className="space-y-3">
          <a className="btn btn-ghost" href="mailto:you@example.com">
            <Mail size={18} />
            kaarekura@gmail.com
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            className="btn btn-ghost"
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
