"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "../ui/Reveal";
import CourseCard from "../ui/CourseCard";
import HappyStudents from "../ui/HappyStudents";
import { Squiggle } from "../ui/Shapes";
import { Learner } from "./Hero";
import { courses } from "@/lib/data";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (l) => setV(Math.round(l)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export default function Growth() {
  return (
    <section className="bg-soft-glow overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-20 px-5 lg:space-y-28 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you aim to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="mt-10 flex gap-10 sm:gap-14">
              {[["Students", 12, "K"], ["Courses", 70, "+"], ["Creators", 16, ""]].map(([l, n, s]) => (
                <div key={l as string}>
                  <dd className="order-1 font-heading text-3xl font-semibold text-brand sm:text-4xl"><Count to={n as number} suffix={s as string} /></dd>
                  <dt className="text-sm text-slate-500">{l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
          {/* 1. Make sure overflow is visible on the container so the shadow can bleed out */}
          <Reveal x={40} y={0} className="relative mx-auto h-[360px] w-full max-w-md sm:h-[420px] overflow-visible">
            <CourseCard course={courses[5]} compact className="absolute left-0 top-0 w-60 sm:w-60 z-0" />

            {/* 2. Use a directional drop-shadow that casts backward/leftward behind the image */}
            <Learner className="absolute bottom-0 right-22 h-[90%] z-10 drop-shadow-[-15px_10px_25px_rgba(0,0,0,0.75)]" />

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="w-40 absolute right-5 top-44 rounded-2xl bg-white p-4 shadow-card z-10">
              <p className="text-xs text-slate-500">Learning Progress</p>
              <p className="font-heading text-3xl font-semibold">55%</p>
              <div className="mt-2 h-2 rounded-full bg-slate-200"><motion.div initial={{ width: 0 }} animate={{ width: "55%" }} transition={{ delay: 1.2, duration: 1.2 }} className="h-full rounded-full bg-lime" /></div>
  
           
            </motion.div>
            <Squiggle className="absolute -right-2 top-36 h-20 w-14 z-20" />
          </Reveal>
        </div>

        <div id="creators" className="grid scroll-mt-24 items-center gap-12 lg:grid-cols-2">
          <Reveal x={-40} y={0} className="relative mx-auto h-[360px] w-full max-w-md">
            <div className="absolute left-0 top-4 z-10 w-44 rounded-2xl bg-brand p-4 text-white shadow-card">
              <p className="text-xs text-white/70">Total Revenue</p><p className="text-xs text-white/50">July 1-28</p>
              <p className="mt-1 font-heading text-2xl font-semibold">$120.29</p>
            </div>
            <div className="absolute left-0 top-32 z-10 w-44 rounded-2xl bg-brand p-4 text-white shadow-card">
              <p className="text-xs text-white/70">Year to Date</p>
              <p className="mt-1 font-heading text-xl font-semibold">$1,200.38</p>
              <span className="mt-1 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium text-ink">+12%</span>
            </div>
            <Learner className="absolute bottom-0 left-12 h-[92%]" />
            <HappyStudents className="absolute bottom-6 right-0 w-48" />
          </Reveal>
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Create &amp; Manage<br />Courses Easily.</h2>
            <p className="mt-5 text-slate-500"><b className="text-ink">ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="mt-6 space-y-3">
              {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((t, i) => (
                <motion.li key={t} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i }} className="flex items-center gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> {t}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
