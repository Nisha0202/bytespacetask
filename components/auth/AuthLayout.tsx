"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import Logo from "../ui/Logo";
import CourseCard from "../ui/CourseCard";
import HappyStudents from "../ui/HappyStudents";
import { Ring, Squiggle, Triangle } from "../ui/Shapes";
import { courses } from "@/lib/data";

export default function AuthLayout({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-grid">
      <div className="mx-auto grid min-h-screen max-w-[1400px] gap-10 px-5 py-8 lg:grid-cols-2 lg:px-12 lg:py-12">
        <div className="relative flex flex-col">
          <Logo markOnly />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8 max-w-lg lg:mt-14">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">{text}</p>
          </motion.div>
          <div className="relative mt-10 hidden h-[560px] w-full max-w-[560px] lg:block" aria-hidden>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="absolute bottom-10 left-0 w-[330px]">
              <CourseCard course={courses[1]} compact className="h-[340px] overflow-hidden" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="absolute left-[165px] top-0 w-[330px]">
              <CourseCard course={courses[2]} compact />
            </motion.div>
            <HappyStudents className="absolute bottom-0 left-[240px] w-[260px]" />
            <Ring className="absolute left-[75px] top-[60px] h-32 w-32" />
            <Triangle className="absolute -left-2 bottom-0 h-28 w-28" delay={1} />
            <Squiggle tone="white" className="absolute right-0 bottom-10 h-28 w-20" delay={0.5} />
          </div>
        </div>
        <div className="flex items-center">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full rounded-[2rem] bg-white p-7 shadow-2xl sm:p-10 lg:p-12">
            {children}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
