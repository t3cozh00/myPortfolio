const projects = [
  {
    title: "Project One",
    desc: "A short sentence about what it does.",
    href: "#",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Project Two",
    desc: "Another cool project with a catchy explanation.",
    href: "#",
    tags: ["TypeScript", "Vite"],
  },
  {
    title: "Project Three",
    desc: "Something experimental and fun.",
    href: "#",
    tags: ["Node", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="card p-5 block"
          >
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="subtle mb-3">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-full border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
