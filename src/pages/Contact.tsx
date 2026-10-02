import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { PageHeader, Section } from "../components/ui";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHeader
        index="Channel // contact"
        title={
          <>
            OPEN A <span className="text-viol">CHANNEL_</span>
          </>
        }
        intro="Questions about events, joining the association, or sponsoring V3CT0R CTF — send a transmission and the crew will respond."
      />

      <Section className="!py-16 md:!py-24">
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-panel p-8 md:p-12">
            <p className="eyebrow">Coordinates</p>
            <h2 className="display mt-4 text-[clamp(28px,3.4vw,44px)]">FIND US_</h2>
            <ul className="mt-6 list-none p-0">
              <li className="border-t border-line py-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-pulse uppercase">Base</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink">
                  Department of CSE (Cyber Security), Dr. N.G.P. Institute of
                  Technology, Coimbatore — 641048.
                </p>
              </li>
              <li className="border-t border-line py-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-pulse uppercase">Routing</p>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  The form opens your mail app addressed to the association — the
                  current office bearers pick it up from there.
                </p>
              </li>
              <li className="border-t border-b border-line py-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-pulse uppercase">Live links</p>
                <div className="mt-3 grid gap-2">
                  <a
                    href="https://vector.cybernexus.live"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] text-viol hover:text-pulse"
                  >
                    V3CT0R arena — vector.cybernexus.live <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="https://ctftime.org/event/3080"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] text-muted hover:text-viol"
                  >
                    Cyber Quest on CTFtime <ArrowUpRight size={13} />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-void p-8 md:p-12">
            <p className="eyebrow">Transmission form</p>
            {sent ? (
              <div className="grid content-center gap-3 py-16 text-center">
                <p className="display text-4xl">
                  LOGGED<span className="text-viol">_</span>
                </p>
                <p className="mx-auto max-w-sm text-[14px] leading-relaxed text-muted">
                  Your message is staged in your mail app. Hit send and the
                  Cybernexus crew will respond.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(`Cybernexus enquiry — ${data.get("topic")}`);
                  const body = encodeURIComponent(
                    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
                  );
                  window.location.href = `mailto:cybernexus@drngpit.ac.in?subject=${subject}&body=${body}`;
                  setSent(true);
                }}
              >
                <div className="grid gap-2">
                  <label htmlFor="name" className="font-mono text-[10px] tracking-[0.12em] text-soft uppercase">
                    Callsign / name
                  </label>
                  <input id="name" name="name" required placeholder="e.g. Alex Kumar" className="field" autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-mono text-[10px] tracking-[0.12em] text-soft uppercase">
                    Return frequency / email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@college.edu" className="field" autoComplete="email" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="topic" className="font-mono text-[10px] tracking-[0.12em] text-soft uppercase">
                    Channel
                  </label>
                  <select id="topic" name="topic" className="field">
                    <option>Joining Cybernexus</option>
                    <option>Playing V3CT0R CTF</option>
                    <option>Volunteering / Authoring challenges</option>
                    <option>Sponsorship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="font-mono text-[10px] tracking-[0.12em] text-soft uppercase">
                    Payload / message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Who you are and how you want to plug in."
                    className="field resize-y"
                  />
                </div>
                <button type="submit" className="btn-primary mt-1 justify-center">
                  Transmit via email
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
