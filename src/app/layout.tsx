import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "포트폴리오 | Your Name",
description: "Frontend Developer Portfolio",
openGraph: {
title: "포트폴리오 | Your Name",
description: "Frontend Developer Portfolio",
images: ["/og.png"],
},
metadataBase: new URL("https://your-domain.vercel.app"),
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ko" suppressHydrationWarning>
<body className={`${inter.className} min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
<div className="mx-auto max-w-5xl px-5">
<Header />
<main className="py-10">{children}</main>
<Footer />
</div>
<ThemeToggle />
</body>
</html>
);
}