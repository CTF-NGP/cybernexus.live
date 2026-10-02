import type { ReactNode } from "react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1440px] px-[6vw] py-24 md:py-36 ${className}`}>
      {children}
    </section>
  );
}

export function Index({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Numbered section heading in Vector language: index / giant uppercase title / lede. */
export function SectionHead({
  index,
  title,
  lede,
}: {
  index: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <div className="max-w-[820px]">
      <Index>{index}</Index>
      <h2 className="display mt-5 text-[clamp(44px,6vw,88px)]">{title}</h2>
      {lede && <p className="mt-6 max-w-[430px] text-[15px] leading-[1.7] text-muted">{lede}</p>}
    </div>
  );
}

/** Inner-page header: mono index, uppercase display title, muted intro. */
export function PageHeader({
  index,
  title,
  intro,
}: {
  index: string;
  title: ReactNode;
  intro: string;
}) {
  return (
    <div className="border-b border-line">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-[6vw] pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative">
          <Index>{index}</Index>
          <h1 className="display mt-5 max-w-5xl text-[clamp(52px,8vw,120px)]">{title}</h1>
          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.7] text-muted">{intro}</p>
        </div>
      </div>
    </div>
  );
}

/** Hairline stat grid: big violet numerals + mono captions. */
export function Stats({ items }: { items: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
      {items.map(([value, label], i) => (
        <div
          key={label}
          className={`min-h-[150px] px-4 py-6 md:px-6 ${i > 0 ? "border-l border-line" : ""} ${
            i === 2 ? "max-md:border-l-0 max-md:border-t max-md:border-line" : ""
          } ${i === 3 ? "max-md:border-t max-md:border-line" : ""}`}
        >
          <strong className="block text-[clamp(40px,4.5vw,64px)] leading-none font-medium tracking-[-0.06em] text-viol">
            {value}
          </strong>
          <span className="mt-3 block font-mono text-[10px] leading-relaxed tracking-[0.1em] text-soft uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
