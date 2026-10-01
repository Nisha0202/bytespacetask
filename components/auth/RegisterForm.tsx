"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import AuthLayout from "./AuthLayout";
import Field from "./Field";
import Button from "../ui/Button";
import { useAuthForm } from "./useAuthForm";

export default function RegisterForm() {
  const { values, errors, set, submit, done, loading } = useAuthForm({ name: "", email: "", password: "" });
  return (
    <AuthLayout title="Sign up and come in" text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <p className="text-lg text-brand">Create an Account</p>
      <h1 className="mt-1 text-4xl font-semibold leading-tight sm:text-5xl">Welcome to<br />ByteSpace</h1>
      <form onSubmit={submit} noValidate className="mt-10 space-y-6">
        <Field id="name" label="Full Name" placeholder="Jamie Davis" autoComplete="name" value={values.name} onChange={set("name")} error={errors.name} />
        <Field id="email" type="email" label="Email" placeholder="designer@example.com" autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} />
        <Field id="password" type="password" label="Password" placeholder="********" autoComplete="new-password" value={values.password} onChange={set("password")} error={errors.password} />
        <div className="flex justify-end"><Button type="submit" disabled={loading}>{loading ? "Creating…" : "Continue"}</Button></div>
        <AnimatePresence>
          {done && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="status" className="rounded-2xl bg-lime/30 px-4 py-3 text-sm">Account created (demo). Connect your backend in <code>useAuthForm.ts</code>.</motion.p>}
        </AnimatePresence>
      </form>
      <p className="mt-10 text-center text-slate-600">Already have an account? <Link href="/login" className="text-brand hover:underline">Login</Link></p>
    </AuthLayout>
  );
}
