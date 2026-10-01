"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./ui/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#creators", label: "Creators" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-brand/90 shadow-lg backdrop-blur-md" : "bg-brand"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = l.href === "/" && pathname === "/";
            return (
              <Link key={l.label} href={l.href} className="group relative py-1 text-base text-white/90 transition-colors hover:text-white">
                <span className={active ? "font-medium text-white" : ""}>{l.label}</span>
                <span className={`absolute -bottom-0.5 left-0 h-0.5 rounded bg-lime transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login" className="text-white/90 transition-colors hover:text-lime">Sign In</Link>
          <Link href="/register" className="text-white/90 transition-colors hover:text-lime">Join Us</Link>
          <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }} aria-label="Shopping bag" className="text-white">
            <ShoppingBag className="h-5 w-5" />
          </motion.button>
        </div>

        <button className="rounded-lg p-2 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {[...links, { href: "/login", label: "Sign In" }].map((l, i) => (
                <motion.div key={l.label} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <Link href={l.href} className="block rounded-xl px-3 py-3 text-lg text-white hover:bg-white/10">{l.label}</Link>
                </motion.div>
              ))}
              <Link href="/register" className="mt-3 rounded-full bg-lime px-6 py-3 text-center font-medium text-ink">Join Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
