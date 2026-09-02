"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center text-center">
        {/* 404 */}
        <div className="select-none text-[clamp(8rem,25vw,16rem)] font-black leading-none tracking-[-0.08em] text-foreground/5">
          404
        </div>

        {/* Content */}
        <div className="flex -translate-y-8 flex-col items-center sm:-translate-y-12">
          {/* Label */}
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Page Not Found
          </p>

          {/* Description */}
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            The page you're looking for doesn't exist.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-xl px-6"
            >
              <Link href="/">
                Back to Home
              </Link>
            </Button>

            <Button
              
              variant="outline"
              size="lg"
              className="rounded-xl px-6"
            >
              <Link href="/explore">
                Explore Stories
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-muted-foreground">
          Error code <span className="font-mono">404</span>
        </p>
      </div>
    </main>
  )
}