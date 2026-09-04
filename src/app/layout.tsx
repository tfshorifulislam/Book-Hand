import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import ReduxProvider from "@/redux/provider"

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/Asidebar/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { NavigationBar } from "@/components/Navbar_Components/NavigationBar"

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
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <SidebarProvider>
             
              <AppSidebar />

              <SidebarInset className="min-w-0">
               
                <NavigationBar />

                <main className="flex flex-1 w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                  {children}
                </main>

              </SidebarInset>
            </SidebarProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}