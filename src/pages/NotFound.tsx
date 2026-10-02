import { Link } from "react-router-dom";
import { Section } from "../components/ui";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-mono text-[11px] tracking-[0.13em] text-viol uppercase">404 // null pointer</p>
      <h1 className="display mx-auto mt-5 max-w-3xl text-[clamp(48px,8vw,110px)]">
        FLAG NOT <span className="text-viol">FOUND_</span>
      </h1>
      <p className="mx-auto mt-5 max-w-sm text-[14px] leading-relaxed text-muted">
        This route isn't on the scoreboard. The signal you want is probably on
        the home grid.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Return to base
      </Link>
    </Section>
  );
}
