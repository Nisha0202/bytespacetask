import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
export const metadata: Metadata = { title: "Sign In – ByteSpace" };
export default function LoginPage() { return <LoginForm />; }
