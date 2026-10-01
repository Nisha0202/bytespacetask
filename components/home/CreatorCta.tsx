import { Pill, Squiggle, Triangle } from "../ui/Shapes";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-grid py-20 lg:py-28">
      <Squiggle tone="white" className="absolute left-[8%] top-6 hidden h-20 w-14 sm:block" />
      <Triangle className="absolute right-[10%] top-6 hidden h-20 w-20 sm:block" />
      <Pill className="absolute -left-8 bottom-4 hidden h-28 w-24 sm:block" />
      <Squiggle className="absolute -right-4 bottom-4 hidden h-36 w-24 sm:block" delay={1} />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <div className="mt-8"><Button href="/register">Join as Creator</Button></div>
      </Reveal>
    </section>
  );
}
