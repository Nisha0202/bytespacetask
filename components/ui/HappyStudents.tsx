import { Star } from "lucide-react";
import Avatars from "./Avatars";

export default function HappyStudents({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-lime p-4 shadow-card ${className}`}>
      <p className="font-heading text-base">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs"><b>4.5</b> <span className="text-slate-600">(240)</span> <Star className="h-3.5 w-3.5 fill-brand text-brand" /></p>
      <div className="mt-2"><Avatars count={6} label="2K+" size={30} ring="#D2F81C" /></div>
    </div>
  );
}
