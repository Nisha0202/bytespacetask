const palette = [
  ["#F4A5B8", "#5B3A2E"], ["#F2C14E", "#3B2A20"], ["#9AD0F5", "#2C2C2C"], ["#F59E7A", "#1F1F1F"],
  ["#B7E4C7", "#4A3428"], ["#C9B6F2", "#2A2A2A"], ["#FFD6A5", "#6B4226"], ["#A0C4FF", "#222"],
];

export function Avatar({ i, size = 36, ring = "#fff" }: { i: number; size?: number; ring?: string }) {
  const [bg, hair] = palette[i % palette.length];
  return (
    <span className="inline-block shrink-0 overflow-hidden rounded-full" style={{ width: size, height: size, boxShadow: `0 0 0 2px ${ring}`, background: bg }}>
      <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden>
        <path d="M6 40c0-9 6-14 14-14s14 5 14 14z" fill="#2B2F3A" />
        <circle cx="20" cy="17" r="8" fill="#E9B98F" />
        <path d="M12 16c0-6 4-9 8-9s8 3 8 9c-2-3-5-4-8-4s-6 1-8 4z" fill={hair} />
      </svg>
    </span>
  );
}

export default function Avatars({ count = 4, label = "26+", size = 36, ring = "#fff", chip = "#111" }: { count?: number; label?: string; size?: number; ring?: string; chip?: string }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={i ? "-ml-2.5" : ""}><Avatar i={i} size={size} ring={ring} /></span>
      ))}
      <span className="-ml-2.5 inline-flex items-center justify-center rounded-full text-xs font-semibold text-white" style={{ width: size, height: size, background: chip, boxShadow: `0 0 0 2px ${ring}` }}>
        {label}
      </span>
    </div>
  );
}
