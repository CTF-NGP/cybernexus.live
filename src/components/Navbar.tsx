import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Crew" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/85 backdrop-blur-xl">
      <div
        className="flex items-center justify-center gap-9 border-b border-line bg-viol/5 px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-pulse uppercase"
        aria-hidden="true"
      >
        <span>Student association — CSE (Cyber Security)</span>
        <span className="hidden sm:inline">Since July 2025</span>
        <span className="hidden md:inline">NGPiTech · Coimbatore</span>
      </div>

      <div className="flex h-[72px] items-center gap-9 px-[4vw]">
        <NavLink
          to="/"
          className="font-mono text-[22px] font-medium tracking-[-0.1em] text-ink"
          aria-label="Cybernexus home"
        >
          CYBERNEXUS<span className="text-viol">_</span>
        </NavLink>

        <nav className="ml-auto hidden items-center gap-[22px] md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-xs transition-colors ${isActive ? "text-viol" : "text-muted hover:text-ink"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://vector.cybernexus.live"
          target="_blank"
          rel="noreferrer"
          className="ml-auto hidden min-h-[38px] items-center gap-3 border border-viol/45 bg-viol/10 px-3.5 font-mono text-[10px] tracking-[0.08em] text-ink uppercase transition-colors hover:bg-viol/20 md:ml-0 md:inline-flex"
        >
          V3CT0R CTF <ArrowUpRight size={14} />
        </a>

        <button
          className="ml-auto grid h-8 w-8 place-items-center text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="grid gap-1 border-t border-line bg-void px-[6vw] py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-baseline gap-4 border-b border-line py-3 ${isActive ? "text-viol" : "text-ink"}`
              }
            >
              <span className="font-mono text-[10px] text-pulse">0{i + 1}</span>
              <span className="display text-2xl">{l.label}</span>
            </NavLink>
          ))}
          <a
            href="https://vector.cybernexus.live"
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-3 justify-center"
          >
            V3CT0R CTF <ArrowUpRight size={14} />
          </a>
        </nav>
      )}
    </header>
  );
}
