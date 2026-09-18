import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Asidebar/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { NavigationBar } from "@/components/Navbar_Components/NavigationBar";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toast";
import SmoothScroll from "@/components/shared/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BookHand",
  description: "Buy & Sell Books",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />

            <SidebarInset className="min-w-0">
              <div className="flex min-h-screen flex-col">
                <NavigationBar />

                <main className="flex-1">{children}</main>

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