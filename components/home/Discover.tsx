"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categories, courses } from "@/lib/data";
import CourseCard from "../ui/CourseCard";
import Reveal from "../ui/Reveal";

export default function Discover() {
  const [active, setActive] = useState("Featured");
  const [showAll, setShowAll] = useState(false);
  const visibleCats = showAll ? categories : categories.slice(0, 17);
  const list = active === "Featured" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Discover Your Passion,<br />Build Your Skills</h2>
          <p className="mt-5 text-sm text-slate-500 sm:text-base">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2.5" >
          <div role="tablist" aria-label="Course categories" className="flex flex-wrap justify-center gap-2.5">
            {visibleCats.map((c) => (
              <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${active === c ? "text-ink" : "text-slate-600 hover:bg-slate-100"}`}>
                {active === c && <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-full bg-lime" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                <span className="relative">{c}</span>
              </button>
            ))}
            <button onClick={() => setShowAll((v) => !v)} className="rounded-full px-4 py-2 text-sm text-slate-600 hover:bg-slate-100">{showAll ? "Less" : "+ More"}</button>
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c, i) => (
              <motion.div key={c.id} layout initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <CourseCard course={c} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {list.length === 0 && <p className="mt-12 text-center text-slate-500">No courses in {active} yet. Check back soon or browse Featured.</p>}
      </div>
    </section>
  );
}
