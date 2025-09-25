import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mt-4 px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* brand – same gradient in both states */}
            <a href="#home" className="text-l font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 to-green-500 bg-clip-text text-transparent">
                DevPortfolio_o
              </span>
            </a>

            {/* desktop menu */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="font-semibold text-white hover:text-slate-700 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* desktop icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* mobile toggle */}
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* mobile panel */}
          {open && (
            <div className="md:hidden">
              <ul className="mt-3 list-none space-y-2">
                {links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2 text-white hover:bg-slate-100"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="flex gap-3 px-1 pt-2">
                  <a
                    href="https://github.com/yourname"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourname"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
