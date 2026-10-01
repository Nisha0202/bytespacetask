"use client";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import Button from "../ui/Button";
import HappyStudents from "../ui/HappyStudents";
import { Pill, Ring, Squiggle, Triangle } from "../ui/Shapes";

// Uses /public/img1.jpg. 
export function Learner({ className = "" }: { className?: string }) {
  return (
   
    <img
      src="/img1.png"
      alt="Smiling learner with headphones and a laptop"
      className={`w-auto max-w-none object-contain ${className}`}
    />
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Get Access to Hundreds Courses Available
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-base"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-xl focus-within:ring-4 focus-within:ring-lime/50"
        >
          <Search className="h-5 w-5 shrink-0 text-slate-400" />

<input
  aria-label="Search courses"
  placeholder="Course, topic, creator"
  className="min-w-0 flex-1 bg-transparent px-2 py-2 outline-none placeholder:text-transparent md:placeholder:text-slate-400"
/>


          <Button type="submit" className="px-4 py-2 lg:px-6 lg:py-2.5 text-sm md:text-base">Search</Button>
      
      
      
        </motion.form>

        <div className="relative mx-auto mt-6 h-[300px] max-w-4xl sm:h-[380px] lg:h-[440px]">
          {/* Lime circle: centered horizontally, vertical position unchanged */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: "-50%" }}
            className="absolute bottom-[-22%] md:bottom-[-75%] left-1/2 aspect-square w-[95%] rounded-full bg-lime sm:w-[80%]"
          />

          {/* Hero image */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ x: "-50%" }}
            className="absolute bottom-0 left-1/2 h-full"
          >
            <Learner className="h-full" />
          </motion.div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-32 sm:block  rounded-2xl bg-white p-4 text-left shadow-card top-44 lg:left-32 lg:top-28">
            <p className="font-heading text-sm md:text-base font-semibold">UI/UX Design</p>
            <p className="text-[11px] text-slate-500">200 Courses · 1000+ Students</p>
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.7 }} className="absolute right-0 top-44 hidden w-44 rounded-2xl bg-white p-4 text-left shadow-card sm:block lg:right-44">
            <p className="text-xs text-slate-500">Learning Progress</p>
            <p className="font-heading text-4xl font-semibold">55%</p>
            <div className="mt-2 h-2 rounded-full bg-slate-200"><motion.div initial={{ width: 0 }} animate={{ width: "55%" }} transition={{ delay: 1.2, duration: 1.2 }} className="h-full rounded-full bg-lime" /></div>
          </motion.div>
          <HappyStudents className="absolute bottom-14 left-0 hidden w-52 text-left sm:block lg:left-2 bg-white" />
        </div>
      </div>
    </section>
  );
}
