import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
export const metadata: Metadata = { title: "Create an Account – ByteSpace" };
export default function RegisterPage() { return <RegisterForm />; }
