"use client";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import Button from "../ui/Button";
import HappyStudents from "../ui/HappyStudents";
import { Pill, Ring, Squiggle, Triangle } from "../ui/Shapes";

export function Learner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 340" className={className} aria-hidden>
      <path d="M40 340c0-70 40-100 110-100s110 30 110 100z" fill="#F9A8D4" />
      <rect x="125" y="190" width="50" height="60" rx="20" fill="#E9B98F" />
      <ellipse cx="150" cy="140" rx="58" ry="66" fill="#F1C7A1" />
      <path d="M90 130c-4-50 30-80 66-76 38 4 58 36 54 80-10-26-30-40-62-40-24 0-46 12-58 36z" fill="#3B2A22" />
      <path d="M84 150c0-70 28-100 68-100s66 30 66 100" fill="none" stroke="#1D4ED8" strokeWidth="12" strokeLinecap="round" />
      <rect x="72" y="132" width="24" height="44" rx="12" fill="#1D4ED8" />
      <rect x="204" y="132" width="24" height="44" rx="12" fill="#1D4ED8" />
      <circle cx="128" cy="144" r="4" fill="#2B2B2B" /><circle cx="174" cy="144" r="4" fill="#2B2B2B" />
      <path d="M126 170c10 14 38 14 48 0" stroke="#7A3E2B" strokeWidth="5" fill="#fff" strokeLinecap="round" />
      <rect x="60" y="270" width="190" height="70" rx="8" fill="#CBD5E1" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <Squiggle className="absolute -left-6 top-24 hidden h-44 w-32 sm:block" />
      <Squiggle tone="white" className="absolute left-[14%] top-[48%] hidden h-24 w-16 lg:block" delay={1} />
      <Triangle tone="white" className="absolute right-[12%] top-[40%] hidden h-24 w-24 lg:block" delay={0.5} />
      <Squiggle className="absolute -right-4 bottom-24 hidden h-44 w-28 sm:block" delay={1.5} />
      <Ring className="absolute -bottom-6 left-[3%] hidden h-32 w-32 sm:block" delay={0.8} />
      <Pill className="absolute -right-8 top-24 hidden h-32 w-24 lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 pb-0 pt-14 text-center lg:px-10 lg:pt-20">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Get Access to Hundreds Courses Available
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-xl focus-within:ring-4 focus-within:ring-lime/50">
          <Search className="h-5 w-5 shrink-0 text-slate-400" />
          <input aria-label="Search courses" placeholder="Course, topic, creator" className="min-w-0 flex-1 bg-transparent px-2 py-2 outline-none placeholder:text-slate-400" />
          <Button type="submit" className="!px-6 !py-2.5">Search</Button>
        </motion.form>

        <div className="relative mx-auto mt-10 h-[300px] max-w-3xl sm:h-[380px] lg:h-[440px]">
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[-50%] left-1/2 aspect-square w-[85%] -translate-x-1/2 rounded-full bg-lime sm:w-[80%]" />
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="absolute bottom-0 left-1/2 h-full -translate-x-1/2">
            <Learner className="h-full" />
          </motion.div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-0 top-6 hidden rounded-2xl bg-white p-3 text-left shadow-card sm:block lg:left-4">
            <p className="font-heading text-sm font-semibold">UI/UX Design</p>
            <p className="text-[11px] text-slate-500">200 Courses · 1000+ Students</p>
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.7 }} className="absolute right-0 top-14 hidden w-44 rounded-2xl bg-white p-4 text-left shadow-card sm:block lg:right-2">
            <p className="text-xs text-slate-500">Learning Progress</p>
            <p className="font-heading text-3xl font-semibold">55%</p>
            <div className="mt-2 h-2 rounded-full bg-slate-200"><motion.div initial={{ width: 0 }} animate={{ width: "55%" }} transition={{ delay: 1.2, duration: 1.2 }} className="h-full rounded-full bg-lime" /></div>
          </motion.div>
          <HappyStudents className="absolute bottom-14 left-0 hidden w-52 text-left sm:block lg:left-2" />
        </div>
      </div>
    </section>
  );
}
