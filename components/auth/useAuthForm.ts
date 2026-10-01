"use client";
import { useState, type FormEvent } from "react";

type Values = Record<string, string>;
type Errors = Record<string, string>;

export function validate(v: Values): Errors {
  const e: Errors = {};
  if ("name" in v && v.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.password.length < 8) e.password = "Use at least 8 characters.";
  return e;
}

export function useAuthForm(initial: Values) {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string) => (e: { target: { value: string } }) => {
    setValues((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: "" }));
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    // Demo only: replace with a real API call.
    setTimeout(() => { setLoading(false); setDone(true); }, 700);
  };
  return { values, errors, set, submit, done, loading };
}
