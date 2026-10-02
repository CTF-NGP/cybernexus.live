import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Section, SectionHead, Stats } from "../components/ui";

export default function Home() {
  return (
    <div>
      {/* ——— HERO ——— */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line px-[8vw] pt-40 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        <div
          className="pointer-events-none absolute top-1/2 left-3/4 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(203,147,255,0.13), rgba(128,224,223,0.05) 45%, transparent 70%)",
            filter: "blur(48px)",
          }}
          aria-hidden="true"
        />
        <div className="signal-rings" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <span className="signal-sweep" />
        </div>

        <div className="reveal relative max-w-[850px]">
          <p className="eyebrow !text-pulse">Student association / CSE (Cyber Security)</p>
          <h1 className="display mt-6 text-[clamp(72px,13vw,180px)]">
            CYBER
            <br />
            <em className="text-viol not-italic">NEXUS_</em>
          </h1>
          <p className="mt-10 max-w-[380px] text-[15px] leading-[1.6] text-muted">
            The security crew of Dr. N.G.P. Institute of Technology — learning by
            breaking, building, and competing together since July 2025.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to="/events" className="btn-primary">
              Explore events <ArrowRight size={14} />
            </Link>
            <Link to="/team" className="btn-ghost">
              Meet the crew <ArrowRight size={14} />
            </Link>
          </div>
          <p className="mt-[18px] font-mono text-[11px] tracking-[0.08em] text-pulse uppercase">
            Dept. of CSE (CS) · Coimbatore — 641048
          </p>
        </div>

        <div className="reveal reveal-1 relative mt-[72px] grid w-full max-w-[560px] grid-cols-2 gap-9 self-end lg:absolute lg:right-[8vw] lg:bottom-[76px] lg:mt-0">
          <div className="border-t border-line pt-3">
            <span className="eyebrow !text-soft">Founded</span>
            <strong className="mt-2.5 block font-mono text-base leading-relaxed font-normal">
              July
              <br />
              2025
            </strong>
          </div>
          <div className="border-t border-line pt-3">
            <span className="eyebrow !text-soft">Next signal</span>
            <strong className="mt-2.5 block font-mono text-base leading-relaxed font-normal">
              V3CT0R
              <br />
              CTF —
              <a
                href="https://vector.cybernexus.live"
                target="_blank"
                rel="noreferrer"
                className="text-viol underline decoration-viol/40 underline-offset-4 hover:text-pulse"
              >
                arena ↗
              </a>
            </strong>
          </div>
        </div>
      </section>

      {/* ——— 001 / SIGNAL ——— */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <p className="eyebrow !text-soft pt-3.5">001 — Signal</p>
          <div className="max-w-[730px]">
            <SectionHead
              index="The association"
              title={
                <>
                  LEARN BY <span className="text-viol">BREAKING_</span>
                </>
              }
              lede="Classroom theory only goes so far in security. We learn fastest with live targets, scoreboards, and teammates."
            />
          </div>
        </div>
        <div className="mt-16">
          <Stats
            items={[
              ["09", "Founding members"],
              ["02", "CTFs conducted"],
              ["01", "Flagship upcoming"],
              ["02", "Batches strong"],
            ]}
          />
        </div>
      </Section>

      {/* ——— 002 / OPS LOG ——— */}
      <Section className="border-t border-line">
        <SectionHead
          index="002 — Ops log"
          title={
            <>
              FROM FIRST FLAG <span className="text-viol">TO FLAGSHIP_</span>
            </>
          }
          lede="Two CTFs down. One flagship on the way — all run by students, for students and beyond."
        />

        <div className="mx-auto mt-16 grid max-w-[1440px] grid-cols-1 gap-px border border-line bg-line md:grid-cols-3 md:grid-rows-2 md:[grid-template-rows:215px_215px]">
          <a
            href="https://vector.cybernexus.live"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden bg-panel p-6 transition-colors duration-300 hover:bg-[#211a2a] md:row-span-2 md:p-8"
          >
            <span className="font-mono text-[10px] text-viol">V3CT0R — Upcoming</span>
            <div>
              <h3 className="display text-4xl md:text-5xl">V3CT0R CTF</h3>
              <p className="mt-2 text-xs text-muted">A dedicated arena at vector.cybernexus.live.</p>
            </div>
            <ArrowUpRight
              size={22}
              className="absolute right-5 bottom-5 text-pulse transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
          <Link
            to="/events"
            className="group relative flex flex-col justify-between overflow-hidden bg-panel p-6 transition-colors duration-300 hover:bg-[#211a2a] md:p-8"
          >
            <span className="font-mono text-[10px] text-viol">13.10.2025 — Internal</span>
            <div>
              <h3 className="display text-3xl">CYBER HEIST</h3>
              <p className="mt-2 text-xs text-muted">The intro CTF for CSE (CS) students.</p>
            </div>
            <ArrowUpRight
              size={22}
              className="absolute right-5 bottom-5 text-pulse transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
          <a
            href="https://ctftime.org/event/3080"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden bg-panel p-6 transition-colors duration-300 hover:bg-[#211a2a] md:p-8"
          >
            <span className="font-mono text-[10px] text-viol">Kanam 26 — External</span>
            <div>
              <h3 className="display text-3xl">CYBER QUEST</h3>
              <p className="mt-2 text-xs text-muted">Our first open scoreboard, on CTFtime.</p>
            </div>
            <ArrowUpRight
              size={22}
              className="absolute right-5 bottom-5 text-pulse transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
          <Link
            to="/events"
            className="flex items-center justify-between bg-panel2 p-6 transition-colors duration-300 hover:bg-[#241d33] md:col-span-2 md:p-8"
          >
            <span className="font-mono text-[10px] tracking-[0.08em] text-viol uppercase">
              Full ops log — all events
            </span>
            <ArrowRight size={16} className="text-pulse" />
          </Link>
        </div>
      </Section>

      {/* ——— 003 / PROTOCOL ——— */}
      <Section className="border-t border-line">
        <div className="grid gap-[9vw] md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="eyebrow">003 — Protocol</p>
            <h2 className="display mt-5 text-[clamp(52px,6vw,92px)]">
              HOW WE
              <br />
              <span className="text-viol">OPERATE_</span>
            </h2>
          </div>
          <ol className="m-0 list-none border-t border-line p-0">
            {[
              ["01", "Hands-on first", "Intro CTFs, open CTFs, and soon a flagship arena — every event is built to be played, not just attended."],
              ["02", "Department first, then the world", "We start with our own CSE (Cyber Security) cohort, then open the scoreboard to external players through Kanam and V3CT0R."],
              ["03", "Student-run, clean handover", "Nine founding members across two batches set the tone: organise well, document everything, hand over cleanly."],
            ].map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[62px_1fr] gap-5 border-b border-line py-6">
                <span className="font-mono text-[11px] text-viol">{n}</span>
                <div>
                  <h3 className="text-[21px] leading-none font-medium tracking-[-0.045em]">{t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ——— JOIN CHANNEL ——— */}
      <Section className="border-t border-line">
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-panel p-10 md:p-12">
            <p className="eyebrow">Recruitment channel</p>
            <h2 className="display mt-4 text-[clamp(30px,3.4vw,44px)]">
              PLAY. VOLUNTEER.
              <br />
              <span className="text-viol">SPONSOR_</span>
            </h2>
            <ul className="mt-6 mb-2 list-none p-0">
              {[
                "First-year curious about flags",
                "Senior ready to author challenges",
                "Orgs backing student security",
              ].map((li) => (
                <li key={li} className="border-t border-line py-2.5 text-[13px] text-muted">
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex min-h-[300px] flex-col bg-[#1c1730] p-10 md:p-12">
            <p className="eyebrow !text-pulse">Open channel</p>
            <h3 className="display mt-4 text-[clamp(28px,3vw,40px)]">JOIN THE CREW_</h3>
            <p className="mt-4 max-w-[380px] text-[13px] leading-relaxed text-muted">
              Tell us who you are and how you want to plug in — the current office
              bearers will route your message.
            </p>
            <Link to="/contact" className="btn-primary mt-8 self-start">
              Open contact <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
