import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Asidebar/app-sidebar";
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
      <body className="min-h-screen bg-[#fafaf9] font-sans text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>

            <AppSidebar />

            <SidebarInset className="min-w-0 bg-transparent">
              <div className="flex min-h-screen flex-col">

                <NavigationBar />

                <main
                  className="flex-1">{children}
                </main>

                <Footer />

              </div>
            </SidebarInset>
          </SidebarProvider>

          <Toaster />
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  );
}