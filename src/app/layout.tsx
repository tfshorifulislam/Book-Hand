import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { NavigationBar } from "@/components/Navbar_Components/NavigationBar";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toast";
import SmoothScroll from "@/components/shared/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BookHand",
    template: "%s | BookHand",
  },
  description:
    "BookHand is a marketplace for university students to buy, sell, and discover affordable textbooks.",
  keywords: [
    "BookHand",
    "university books",
    "textbook marketplace",
    "buy books",
    "sell books",
    "student marketplace",
  ],
  authors: [{ name: "Shoriful Islam" }],
  creator: "Shoriful Islam",
  applicationName: "BookHand",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Ambient Background Glow */}
          <div className="ambient-glow-wrapper" aria-hidden="true">
            {/* Top-left Blue glow */}
            <div className="glow-shape glow-shape-primary animate-glow-pulse -top-24 -left-24 w-140 h-140 sm:w-200 sm:h-[50rem]" />

            {/* Middle-right Purple glow */}
            <div className="glow-shape glow-shape-secondary animate-glow-drift top-1/3 -right-24 w-[32rem] h-[32rem] sm:w-[48rem] sm:h-[48rem]" />

            {/* Bottom Ambient gradient glow */}
            <div className="glow-shape glow-shape-ambient animate-glow-pulse bottom-10 -left-12 w-[35rem] h-[35rem] sm:w-[55rem] sm:h-[55rem]" />
          </div>

          <div className="relative z-10 flex min-h-screen flex-col">
            <NavigationBar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>

          <Toaster />
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  );
}