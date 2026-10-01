"use client";
import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props extends InputHTMLAttributes<HTMLInputElement> { label: string; error?: string; }

export default function Field({ label, error, id, type = "text", ...rest }: Props) {
  const [show, setShow] = useState(false);
  const isPw = type === "password";
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label>
      <div className="relative">
        <input id={id} type={isPw && show ? "text" : type} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined}
          className={`h-14 w-full rounded-2xl border bg-white px-5 text-base outline-none transition placeholder:text-slate-400 focus:ring-4 ${error ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-brand focus:ring-brand/15"}`}
          {...rest} />
        {isPw && (
          <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand">
            {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
