import type { ThumbKind } from "@/lib/data";
const r = (n: number) => Math.round(n * 100) / 100;
export default function Thumb({ kind }: { kind: ThumbKind }) {
  const common = { viewBox: "0 0 320 190", preserveAspectRatio: "xMidYMid slice", className: "h-full w-full", "aria-hidden": true } as const;
  switch (kind) {
    case "figma":
      return (
        <svg {...common}>
          <rect width="320" height="190" fill="#EEF1F8" />
          {[["#FDE68A", 20, 20], ["#FBCFE8", 100, 40], ["#BFDBFE", 180, 14], ["#BBF7D0", 240, 70], ["#FDBA74", 40, 100], ["#C4B5FD", 140, 110]].map(([c, x, y], i) => (
            <rect key={i} x={x as number} y={y as number} width="64" height="56" rx="6" fill={c as string} transform={`rotate(${(i % 3) * 4 - 4} ${x} ${y})`} />
          ))}
          <rect x="60" y="60" width="150" height="90" rx="8" fill="#fff" opacity=".9" />
          <rect x="72" y="74" width="60" height="8" rx="4" fill="#0038E0" />
          <rect x="72" y="92" width="110" height="6" rx="3" fill="#CBD5E1" />
          <rect x="72" y="106" width="90" height="6" rx="3" fill="#CBD5E1" />
        </svg>
      );
    case "icons":
      return (
        <svg {...common}>
          <rect width="320" height="190" fill="#E5E7EB" />
          {Array.from({ length: 28 }).map((_, i) => (
            <circle key={i} cx={30 + (i % 7) * 43} cy={30 + Math.floor(i / 7) * 42} r="11" fill="none" stroke="#6B7280" strokeWidth="3" strokeDasharray={i % 2 ? "0" : "14 6"} opacity=".7" />
          ))}
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <rect width="320" height="190" fill="#0B1020" />
          {Array.from({ length: 28 }).map((_, i) => {
            // first loop
const h = r(120 * Math.exp(-i / 7) + 8);
return <rect key={i} x={24 + i * 6} y={r(160 - h)} width="4" height={h} fill="#22D3EE" />;

          })}
          {Array.from({ length: 24 }).map((_, i) => {
            // second loop
const h = r(110 * Math.exp(-((i - 6) ** 2) / 40) + 6);
return <rect key={i} x={190 + i * 5} y={r(160 - h)} width="3" height={h} fill="#06B6D4" />;
          })}
          <path d="M20 100C60 60 100 140 160 110S250 70 300 100" fill="none" stroke="#F472B6" strokeWidth="2" />
        </svg>
      );
    case "focus":
      return (
        <svg {...common}>
          <rect width="320" height="190" fill="#D4D4D8" />
          <rect x="70" y="30" width="180" height="110" rx="6" fill="#111" />
          <text x="160" y="92" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="26" fill="#fff">DO MORE</text>
          <rect x="140" y="140" width="40" height="18" fill="#9CA3AF" />
          <rect x="100" y="158" width="120" height="8" rx="4" fill="#A1A1AA" />
        </svg>
      );
    case "line":
      return (
        <svg {...common}>
          <rect width="320" height="190" fill="#F3F4F6" />
          {[40, 80, 120, 160].map((y) => <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#E5E7EB" />)}
          <polyline points="10,150 50,120 80,135 120,80 160,100 200,50 240,70 280,30 315,45" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinejoin="round" />
          <polyline points="10,170 60,150 110,160 170,130 230,140 315,110" fill="none" stroke="#86EFAC" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect width="320" height="190" fill="#EFEAE4" />
          {[["#F9A8D4", 18, 18], ["#FDE047", 90, 12], ["#F9A8D4", 160, 20], ["#FDE047", 230, 14], ["#93C5FD", 50, 80], ["#F9A8D4", 130, 76], ["#FDE047", 205, 84]].map(([c, x, y], i) => (
            <rect key={i} x={x as number} y={y as number} width="56" height="50" rx="3" fill={c as string} />
          ))}
          <rect x="0" y="140" width="320" height="50" fill="#D6D3D1" />
        </svg>
      );
  }
}
