"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { footerColumns } from "@/lib/data";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMsg(/^\S+@\S+\.\S+$/.test(email) ? "Thanks! You're on the list." : "Enter a valid email address.");
    if (/^\S+@\S+\.\S+$/.test(email)) setEmail("");
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-md text-slate-600">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form onSubmit={onSubmit} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input id="newsletter" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                className="p-4 h-14 flex-1 rounded-full border border-slate-300 px-6 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p role="status" className="mt-3 min-h-5 text-sm text-brand">{msg}</p>
            <p className="max-w-md text-xs text-slate-500">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((item) => (
                  <li key={item}><Link href="#" className="text-slate-600 transition-colors hover:text-brand">{item}</Link></li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((t) => (
              <Link key={t} href="#" className="hover:text-brand">{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
