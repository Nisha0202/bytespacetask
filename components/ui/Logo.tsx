import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 48" className={className} aria-hidden="true">
      <path d="M0 6C0 2.700 2.700 0 6 0h4c3.300 0 6 2.700 6 6v14.200c2-1.700 4.600-2.700 7.400-2.700C30.400 17.500 36 22.300 36 29.400 36 36.800 30.500 44 22.600 44H8c-4.400 0-8-3.600-8-8z" fill="#D2F81C" />
      <path d="M15 27.500l10 5-10 5z" fill="#0038E0" />
    </svg>
  );
}

export default function Logo({ dark = false, markOnly = false }: { dark?: boolean; markOnly?: boolean }) {
  return (
    <Link href="/" aria-label="ByteSpace home" className="inline-flex items-center gap-2">
      <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
      {!markOnly && (
        <span className={`font-heading text-2xl font-bold tracking-tight ${dark ? "text-ink" : "text-white"}`}>
          ByteSpace
        </span>
      )}
    </Link>
  );
}
