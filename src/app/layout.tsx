import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/Asidebar/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { NavigationBar } from "@/components/Navbar_Components/NavigationBar"
import SmoothScroll from "@/components/shared/SmoothScroll"
import { Footer } from "@/components/Footer/Footer"

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BookHand",
  description: "Buy & Sell Books",
}

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html className={`${inter.className} h-full antialiased`}
    lang="en"
    suppressHydrationWarning
    >
      <body className="min-h-full">

        <SmoothScroll />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="min-w-0">
              <NavigationBar />
              <main className="flex flex-1 w-full">
                {children}
              </main>
              <Footer />
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}