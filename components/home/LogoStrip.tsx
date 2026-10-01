import { Aperture, Atom, Orbit, Waves, Zap } from "lucide-react";
import Reveal from "../ui/Reveal";

const logos = [Waves, Atom, Zap, Aperture, Orbit];

export default function LogoStrip() {
  return (
    <section aria-label="Partners" className="bg-slate-100 py-10">
      <Reveal className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 text-slate-500 lg:justify-between lg:px-10">
        {logos.map((Icon, i) => (
          <div key={i} className="flex items-center gap-2 transition-colors hover:text-brand">
            <Icon className="h-7 w-7" /><span className="font-heading text-lg font-semibold">Logoipsum</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
