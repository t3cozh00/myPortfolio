import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-slate-300 leading-relaxed">
          I'm a developer who enjoys crafting delightful, performant user
          experiences and robust systems. I’ve worked with React, Node, Python,
          and cloud services.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>• Building web apps</li>
          <li>• Focus ...</li>
          <li>• Based in Oulu, Finland</li>
        </ul>
      </div>
    </section>
  );
}
