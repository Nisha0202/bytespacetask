"use client";
import { motion } from "motion/react";
import { testimonials } from "@/lib/data";
import Reveal from "../ui/Reveal";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-white via-white to-lime/25 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <Reveal><h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Discover What Our Community Is Saying</h2></Reveal>
          <Reveal delay={0.1}><p className="text-sm leading-relaxed text-slate-500 sm:text-base">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning through our courses and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p></Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.figure whileHover={{ y: -6 }} className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
  <figcaption className="flex items-center gap-4">
    <Image
      src={t.avatar}
      alt={t.name}
      width={56}
      height={56}
      className="h-14 w-14 rounded-full object-cover ring-2 ring-lime"
    />
    <div>
      <p className="font-heading font-semibold">{t.name}</p>
      <p className="text-sm text-brand">{t.role}</p>
    </div>
  </figcaption>
  <blockquote className="mt-4 text-sm leading-relaxed text-slate-500">“{t.quote}”</blockquote>
</motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
