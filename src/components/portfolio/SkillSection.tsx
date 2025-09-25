const skills = [
  "TypeScript",
  "React",
  "Vite",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
];
export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
