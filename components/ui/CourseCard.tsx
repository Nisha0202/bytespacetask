"use client";
import { motion } from "motion/react";
import { BarChart3, Star } from "lucide-react";
import Thumb from "./Thumb";
import Avatars from "./Avatars";
import type { Course } from "@/lib/data";

export default function CourseCard({ course, compact = false, className = "" }: { course: Course; compact?: boolean; className?: string }) {
  return (
    <motion.article
      whileHover={compact ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`rounded-3xl border border-slate-200 bg-white p-3 shadow-card ${className}`}
    >
      <div className="relative aspect-[16/9.5] overflow-hidden rounded-2xl">
        <Thumb kind={course.thumb} />
        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5 text-[11px] text-slate-600 sm:text-xs">
          <span className="rounded-full bg-white/75 px-2.5 py-1 backdrop-blur">{course.lessons} Lessons</span>
          <span className="rounded-full bg-white/75 px-2.5 py-1 backdrop-blur">{course.duration}</span>
          <span className="rounded-full bg-white/75 px-2.5 py-1 backdrop-blur">{course.comments} Comments</span>
        </div>
      </div>
      <div className="px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 font-heading text-lg font-semibold leading-snug">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-slate-500">
            {course.rating} <Star className="h-4 w-4 fill-lime text-lime" />
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-500">by <span className="text-brand">{course.author}</span></p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
            <BarChart3 className="h-4 w-4" /> {course.level}
          </span>
          <Avatars count={4} size={30} />
        </div>
        <p className="mt-3 text-xl font-semibold text-brand">
          ${course.price}<span className="text-sm font-normal text-slate-500">/lifetime</span>
        </p>
      </div>
    </motion.article>
  );
}
