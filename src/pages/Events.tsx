import { ArrowUpRight } from "@phosphor-icons/react";
import { PageHeader, Section, SectionHead } from "../components/ui";
import { events } from "../data/events";

export default function Events() {
  const upcoming = events.filter((e) => e.status === "Upcoming");
  const completed = events.filter((e) => e.status === "Completed");

  return (
    <div>
      <PageHeader
        index="Ops log // events"
        title={
          <>
            EVERY FLAG <span className="text-viol">LOGGED_</span>
          </>
        }
        intro="Cyber Heist introduced our own students to flags. Cyber Quest opened the board to the outside world. V3CT0R is the flagship."
      />

      {upcoming.map((e) => (
        <Section key={e.slug} className="!py-16 md:!py-24">
          <div className="border border-line bg-[#1c1730] p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="bg-viol/10 px-3 py-1 font-mono text-[10px] tracking-[0.1em] text-pulse uppercase">
                {e.tag} · {e.status}
              </span>
              <span className="font-mono text-[11px] tracking-[0.08em] text-soft uppercase">
                {e.date}
              </span>
            </div>
            <h2 className="display mt-6 text-[clamp(44px,6vw,88px)]">
              {e.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-viol">{e.title.split(" ").slice(-1)}_</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted">{e.summary}</p>
            <ul className="mt-6 grid list-none gap-px border border-line bg-line p-0 md:grid-cols-3">
              {e.details.map((d) => (
                <li key={d} className="bg-panel px-5 py-4 text-[13px] text-muted">
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] tracking-[0.08em] text-pulse uppercase">
              {e.audience}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {e.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-primary">
                  {l.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t border-line !pt-16 md:!pt-24">
        <SectionHead
          index="Archive — completed ops"
          title={
            <>
              ALREADY <span className="text-viol">PWNED_</span>
            </>
          }
        />
        <div className="mt-12 grid gap-px border border-line bg-line">
          {completed.map((e, i) => (
            <article key={e.slug} className="grid gap-6 bg-panel p-7 md:grid-cols-[1fr_280px] md:p-10">
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-viol">
                  OP-0{i + 1} // {e.tag}
                </p>
                <h2 className="display mt-3 text-[clamp(32px,4vw,56px)]">{e.title}</h2>
                <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-muted">{e.summary}</p>
                <ul className="mt-4 list-none p-0">
                  {e.details.map((d) => (
                    <li key={d} className="border-t border-line py-2.5 text-[13px] text-muted">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid content-start gap-3 border border-line bg-void p-5">
                <p className="font-mono text-[11px] leading-relaxed text-muted">{e.date}</p>
                <p className="font-mono text-[11px] leading-relaxed text-muted">{e.audience}</p>
                <span className="inline-block w-fit bg-viol/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-pulse uppercase">
                  {e.status}
                </span>
                {e.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost mt-1 justify-center !min-h-[42px]"
                  >
                    {l.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
