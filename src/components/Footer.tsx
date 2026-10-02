import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="border-b border-line bg-panel/70">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-1.5 border-r border-line px-6 py-7">
            <p className="mb-1 font-mono text-[9px] tracking-[0.12em] text-viol uppercase">Association</p>
            <p className="text-sm font-medium text-ink">Cybernexus Association</p>
            <p className="text-xs leading-relaxed text-muted">CSE (Cyber Security) · Since July 2025</p>
          </div>
          <div className="flex flex-col gap-1.5 px-6 py-7 lg:border-r lg:border-line">
            <p className="mb-1 font-mono text-[9px] tracking-[0.12em] text-viol uppercase">Institute</p>
            <p className="text-sm font-medium text-ink">Dr. N.G.P. Institute of Technology</p>
            <p className="text-xs leading-relaxed text-muted">Coimbatore — 641048</p>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-line px-6 py-7 max-lg:border-r lg:border-r lg:border-t-0">
            <p className="mb-1 font-mono text-[9px] tracking-[0.12em] text-viol uppercase">Arena</p>
            <div className="grid gap-2">
              <a
                href="https://vector.cybernexus.live"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-viol"
              >
                V3CT0R CTF <ArrowUpRight size={12} />
              </a>
              <a
                href="https://ctftime.org/event/3080"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-viol"
              >
                Cyber Quest — CTFtime <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-line px-6 py-7 lg:border-t-0">
            <p className="mb-1 font-mono text-[9px] tracking-[0.12em] text-viol uppercase">Index</p>
            <div className="grid gap-2">
              {[
                ["/about", "About"],
                ["/events", "Events"],
                ["/team", "Crew"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-viol"
                >
                  {label} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <p
          className="giant-outline absolute bottom-[-3vh] left-1/2 -translate-x-1/2 text-[clamp(90px,17vw,280px)] leading-none"
          aria-hidden="true"
        >
          CYBERNEXUS
        </p>
        <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-[6vw] py-5">
          <p className="font-mono text-[18px] font-medium tracking-[-0.1em] text-ink">
            CYBERNEXUS<span className="text-viol">_</span>
          </p>
          <p className="font-mono text-[10px] tracking-[0.06em] text-soft">
            © {currentYear} Cybernexus Association
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-9 w-9 place-items-center border border-line text-muted transition-colors hover:border-viol/60 hover:text-viol"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
