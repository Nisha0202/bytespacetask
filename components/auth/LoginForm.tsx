"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import AuthLayout from "./AuthLayout";
import Field from "./Field";
import Button from "../ui/Button";
import { useAuthForm } from "./useAuthForm";

const Facebook = () => (<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden><path fill="#111" d="M24 12a12 12 0 1 0-13.900 11.900v-8.400H7.100V12h3V9.400c0-3 1.800-4.700 4.500-4.700 1.300 0 2.700.2 2.700.2v3h-1.500c-1.500 0-2 .9-2 1.900V12h3.400l-.5 3.500h-2.900v8.400A12 12 0 0 0 24 12z" /></svg>);
const Google = () => (<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden><path fill="#111" d="M12.200 10.200v3.900h5.500c-.2 1.400-1.700 4.100-5.500 4.100a6.200 6.200 0 0 1 0-12.400c2 0 3.300.9 4 1.600l2.700-2.600A9.800 9.800 0 0 0 12.200 2a10 10 0 1 0 0 20c5.800 0 9.600-4 9.600-9.700 0-.7-.1-1.200-.2-1.700z" /></svg>);

export default function LoginForm() {
  const { values, errors, set, submit, done, loading } = useAuthForm({ email: "", password: "" });
  return (
    <AuthLayout title="Sign in with ease" text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <p className="text-lg text-brand">Sign In</p>
      <h1 className="mt-1 text-4xl font-semibold leading-tight sm:text-5xl">Welcome Back</h1>
      <form onSubmit={submit} noValidate className="mt-10 space-y-6">
        <Field id="email" type="email" label="Email" placeholder="designer@example.com" autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} />
        <Field id="password" type="password" label="Password" placeholder="********" autoComplete="current-password" value={values.password} onChange={set("password")} error={errors.password} />
        <div className="flex justify-end"><Button type="submit" disabled={loading}>{loading ? "Signing in…" : "Sign In"}</Button></div>
        <AnimatePresence>
          {done && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="status" className="rounded-2xl bg-lime/30 px-4 py-3 text-sm">Signed in (demo). Connect your backend in <code>useAuthForm.ts</code>.</motion.p>}
        </AnimatePresence>
      </form>
      <div className="my-8 flex items-center gap-4 text-slate-500"><span className="h-px flex-1 bg-slate-300" />or<span className="h-px flex-1 bg-slate-300" /></div>
      <div className="flex justify-center gap-4">
        {[["Continue with Facebook", <Facebook key="f" />], ["Continue with Google", <Google key="g" />]].map(([l, icon]) => (
          <motion.button key={l as string} type="button" aria-label={l as string} whileHover={{ y: -3 }} whileTap={{ scale: 0.94 }} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-300 hover:border-brand">{icon}</motion.button>
        ))}
      </div>
      <p className="mt-8 text-center text-slate-600">New user? <Link href="/register" className="text-brand hover:underline">Create an account</Link></p>
    </AuthLayout>
  );
}
