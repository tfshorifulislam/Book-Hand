"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          Book<span className="text-primary">Hand</span>
        </Link>

        {/* 404 */}
        <div className="mt-8 select-none text-[clamp(8rem,25vw,16rem)] font-black leading-none tracking-[-0.08em] text-foreground/[0.04]">
          404
        </div>

        {/* Content */}
        <div className="-mt-10 flex flex-col items-center sm:-mt-16">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Page Not Found
            </p>

            <span className="size-2 rounded-full bg-primary" />
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Looks like this page is missing.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-lg bg-primary px-6 text-sm text-white hover:bg-primary dark:text-black"
            >
              <Link href="/">Back to Home</Link>
            </Button>

            <Button
              
              variant="outline"
              size="lg"
              className="h-11 rounded-lg border-border px-6 text-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              <Link href="/books">Browse Books</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-muted-foreground/60">
          Book<span className="text-primary">Hand</span>{" "}
          <span className="mx-1">•</span> Error 404
        </p>
      </div>
    </main>
  );
}