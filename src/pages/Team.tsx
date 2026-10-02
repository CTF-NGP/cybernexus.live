import { PageHeader, Section, SectionHead } from "../components/ui";
import { foundingCommittee, roleOrder } from "../data/team";

function MemberRow({ index, name, role, batch }: { index: string; name: string; role: string; batch: string }) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-4 border-b border-line bg-panel p-6 transition-colors duration-300 hover:bg-[#211a2a] md:grid-cols-[64px_1fr_auto] md:items-center md:gap-6 md:p-7">
      <span className="font-mono text-[11px] text-viol">{index}</span>
      <div>
        <h3 className="text-xl font-medium tracking-[-0.04em]">{name}</h3>
        <p className="mt-1 font-mono text-[10px] tracking-[0.1em] text-pulse uppercase">{role}</p>
      </div>
      <p className="col-span-2 font-mono text-[11px] text-soft md:col-span-1">Batch {batch}</p>
    </div>
  );
}

export default function Team() {
  const officers = [...foundingCommittee.filter((m) => m.role !== "Executive Member")].sort(
    (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
  );
  const execs = foundingCommittee.filter((m) => m.role === "Executive Member");

  return (
    <div>
      <PageHeader
        index="Crew file // founding 9"
        title={
          <>
            THE NINE WHO <span className="text-viol">STARTED IT_</span>
          </>
        }
        intro="Founding committee (2025–26) across the 2023–2027 and 2024–2028 batches of CSE (Cyber Security). A new crew has now taken over — full roster incoming."
      />

      <Section className="!py-16 md:!py-24">
        <SectionHead
          index="Command — office bearers"
          title={
            <>
              CORE <span className="text-viol">FIVE_</span>
            </>
          }
          lede="President through treasurer — the five who ran our first two CTFs."
        />
        <div className="mt-12 border-t border-line">
          {officers.map((m, i) => (
            <MemberRow
              key={m.name}
              index={`C-0${i + 1}`}
              name={m.name}
              role={m.role}
              batch={m.batch}
            />
          ))}
        </div>
      </Section>

      <Section className="border-t border-line !py-16 md:!py-24">
        <SectionHead
          index="Support — executive members"
          title={
            <>
              OPS <span className="text-viol">FOUR_</span>
            </>
          }
          lede="Four organisers who handled everything from registrations to challenge testing."
        />
        <div className="mt-12 border-t border-line">
          {execs.map((m, i) => (
            <MemberRow
              key={m.name}
              index={`E-0${i + 1}`}
              name={m.name}
              role={m.role}
              batch={m.batch}
            />
          ))}
        </div>

        <div className="mt-14 border border-dashed border-viol/40 bg-viol/5 p-8 text-center md:p-12">
          <p className="font-mono text-[10px] tracking-[0.13em] text-pulse uppercase">
            2026 — Leadership handover
          </p>
          <h2 className="display mx-auto mt-4 max-w-2xl text-[clamp(28px,4vw,48px)]">
            NEW CREW <span className="text-viol">INBOUND_</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-muted">
            Founding committee archived above. Watch this file and
            vector.cybernexus.live for the incoming team and the V3CT0R crew.
          </p>
        </div>
      </Section>
    </div>
  );
}
