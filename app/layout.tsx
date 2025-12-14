import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  variable: '--font-prompt',
  subsets: ["latin"],
  weight: ['100', '200', '300', '400','500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Rodrigo Moreira | Software Developer's Portfolio",
  description: "Freelance Developer & UI/UX designer with 4+ years of experience. I build SaaS platforms, AI Powered apps, and responsive web solutions focunsed on usability, performance and security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${prompt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
