"use client";
import { motion } from "motion/react";
import { Building2, Camera, Code2, Laptop, Megaphone, PenTool } from "lucide-react";
import { paths } from "@/lib/data";
import Reveal from "../ui/Reveal";

const icons = { Design: PenTool, Development: Code2, "IT & Software": Laptop, Business: Building2, Marketing: Megaphone, Photography: Camera };

export default function LearningPaths() {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there’s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map((p, i) => {
            const Icon = icons[p];
            return (
              <Reveal key={p} delay={i * 0.06} y={20}>
                <motion.a href="#courses" whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }}
                  className="group flex h-40 flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white transition-shadow hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-12"><Icon className="h-6 w-6" /></span>
                  <span className="text-sm font-medium">{p}</span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
