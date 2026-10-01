"use client";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-grid">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
            className="bg-gradient-to-b from-lime via-lime/60 to-transparent bg-clip-text font-heading text-[7.5rem] font-bold leading-[0.85] text-transparent sm:text-[14rem] lg:text-[20rem]"
          >
            404
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="-mt-6 text-4xl font-semibold leading-tight text-white sm:-mt-16 sm:text-6xl lg:-mt-24 lg:text-7xl">
            The page you are looking for doesn’t exist
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-6 text-lg text-white/80">
            Try to use a correct url or go back to homepage to start again
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8">
            <Button href="/">Back to Home</Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
