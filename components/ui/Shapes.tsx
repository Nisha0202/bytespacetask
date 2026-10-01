"use client";
import { motion } from "motion/react";

interface P { className?: string; delay?: number; }

const float = (delay: number, amp = 12, dur = 5) => ({
  animate: { y: [0, -amp, 0], rotate: [0, 4, 0] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export function Ring({ className = "", delay = 0 }: P) {
  return (
    <motion.div aria-hidden className={`pointer-events-none rounded-full bg-lime shadow-[inset_-10px_-12px_24px_rgba(120,150,0,0.35),inset_8px_8px_18px_rgba(255,255,200,0.6)] ${className}`} {...float(delay)}>
      <div className="absolute inset-[24%] rounded-full bg-brand shadow-[inset_6px_6px_14px_rgba(0,0,60,0.5)]" />
    </motion.div>
  );
}

export function Triangle({ className = "", delay = 0, tone = "lime" }: P & { tone?: "lime" | "white" }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${tone === "lime" ? "bg-gradient-to-br from-lime to-lime-dark" : "bg-gradient-to-br from-white to-slate-200"} ${className}`}
      style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 85%)" }}
      {...float(delay, 10, 6)}
    />
  );
}

export function Squiggle({ className = "", delay = 0, tone = "lime" }: P & { tone?: "lime" | "white" }) {
  const stroke = tone === "lime" ? "#D2F81C" : "#FFFFFF";
  return (
    <motion.svg aria-hidden viewBox="0 0 80 110" className={`pointer-events-none ${className}`} fill="none" {...float(delay, 8, 4.5)}>
      <path d="M12 14c20-8 40-4 52 4M68 40C46 34 24 40 12 52M12 76c22-10 44-8 56 2M16 100c18-6 34-2 46 6" stroke={stroke} strokeWidth="14" strokeLinecap="round" />
    </motion.svg>
  );
}

export function Pill({ className = "", delay = 0 }: P) {
  return (
    <motion.div aria-hidden className={`pointer-events-none rounded-[40%] bg-gradient-to-br from-white to-slate-200 shadow-[inset_-8px_-10px_20px_rgba(0,0,0,0.12)] ${className}`} {...float(delay, 10, 7)} />
  );
}
