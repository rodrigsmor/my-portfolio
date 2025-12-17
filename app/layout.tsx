import "./globals.css";
import type { Metadata } from "next";
import { LanguageCode } from "@/utils/@types/lang";

export const metadata: Metadata = {
  title: "Rodrigo Moreira | Software Developer's Portfolio",
  description: "Freelance Developer & UI/UX designer with 4+ years of experience. I build SaaS platforms, AI Powered apps, and responsive web solutions focunsed on usability, performance and security.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: LanguageCode }
}>) {
  return (
    // <LanguageProvider initialLocale="en-US" dictionary={dictionary}>
     <>{children}</>
    // </LanguageProvider>
  );
}
