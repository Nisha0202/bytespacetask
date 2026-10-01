import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Providers from "@/components/ui/Providers";

export const metadata: Metadata = {
  title: "ByteSpace – Online courses from creators",
  description: "Get access to hundreds of courses. Unlock your creativity, gain valuable knowledge and grow your business.",
};
export const viewport: Viewport = { themeColor: "#0038E0", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
