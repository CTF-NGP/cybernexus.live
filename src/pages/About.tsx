import { PageHeader, Section, SectionHead } from "../components/ui";
import { timeline } from "../data/events";

const facts: [string, string][] = [
  ["Department", "Computer Science and Engineering (Cyber Security)"],
  ["Institute", "Dr. N.G.P. Institute of Technology, Coimbatore — 641048"],
  ["Founded", "July 2025"],
  ["Focus", "CTFs · Workshops · Security community"],
];

export default function About() {
  return (
    <div>
      <PageHeader
        index="Dossier // association"
        title={
          <>
            BREAK THINGS <span className="text-viol">RESPONSIBLY_</span>
          </>
        }
        intro="Cybernexus Association is the student association of the Department of Computer Science and Engineering (Cyber Security), Dr. N.G.P. Institute of Technology, Coimbatore — 641048. Started in July 2025."
      />

      {/* Dossier facts */}
      <Section>
        <div className="grid gap-[9vw] md:grid-cols-[0.8fr_1.2fr]">
          <div className="md:sticky md:top-[110px] md:self-start">
            <SectionHead
              index="File 01 — Dossier"
              title={
                <>
                  WHO <span className="text-viol">WE ARE_</span>
                </>
              }
            />
          </div>
          <dl className="m-0 grid gap-px border border-line bg-line p-0">
            {facts.map(([k, v]) => (
              <div key={k} className="grid gap-1 bg-panel p-6 md:p-7">
                <dt className="font-mono text-[10px] tracking-[0.12em] text-pulse uppercase">
                  {k}
                </dt>
                <dd className="m-0 text-[15px] font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Protocol */}
      <Section className="border-t border-line">
        <div className="grid gap-[9vw] md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="eyebrow">File 02 — Doctrine</p>
            <h2 className="display mt-5 text-[clamp(52px,6vw,92px)]">
              WHY WE <span className="text-viol">EXIST_</span>
            </h2>
            <p className="mt-6 max-w-[390px] text-[15px] leading-[1.7] text-muted">
              Classroom theory only goes so far in security. We learn fastest with
              live targets, scoreboards, and teammates.
            </p>
          </div>
          <ol className="m-0 list-none border-t border-line p-0">
            {[
              ["01", "Hands-on first", "Intro CTFs, open CTFs, and soon a flagship arena — every event is built to be played, not just attended."],
              ["02", "For CSE (Cyber Security) and beyond", "We start with our own department, then open the scoreboard to external players through Kanam and V3CT0R."],
              ["03", "Student-run, faculty-guided", "Nine founding members across two batches set the tone: organise well, document everything, hand over cleanly."],
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

      {/* Timeline */}
      <Section className="border-t border-line">
        <SectionHead
          index="File 03 — Timeline"
          title={
            <>
              HOW WE <span className="text-viol">GOT HERE_</span>
            </>
          }
          lede="From a July idea to an October scoreboard to a public arena."
        />
        <div className="mt-14">
          {timeline.map((t) => (
            <div
              key={t.title}
              className="relative grid grid-cols-[74px_28px_1fr] gap-4 border-line py-5 not-last:after:absolute not-last:after:top-[26px] not-last:after:bottom-0 not-last:after:left-[87px] not-last:after:w-px not-last:after:bg-line md:grid-cols-[110px_28px_1fr]"
            >
              <time className="pt-0.5 font-mono text-[10px] tracking-[0.13em] text-muted uppercase">
                {t.date}
              </time>
              <span
                className="z-[1] mt-0.5 h-2.5 w-2.5 rounded-full border border-viol"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[21px] leading-none font-medium tracking-[-0.045em]">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-[560px] text-[13px] leading-relaxed text-muted">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
