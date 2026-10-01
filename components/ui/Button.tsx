"use client";
import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "lime" | "outline" | "blue";
const styles: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-lime-dark",
  blue: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-white/40 text-white hover:bg-white/10",
};

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  href?: string;
  variant?: Variant;
  children: ReactNode;
}

export default function Button({ href, variant = "lime", className = "", children, ...rest }: Props) {
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-colors disabled:opacity-60 ${styles[variant]} ${className}`;
  if (href) {
    return (
      <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={cls}>{children}</Link>
      </motion.span>
    );
  }
  return (
    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className={cls} {...rest}>
      {children}
    </motion.button>
  );
}
