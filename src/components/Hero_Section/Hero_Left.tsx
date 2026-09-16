import { ArrowRight, BookOpen, ShieldCheck, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroLeft = () => {
    return (
        <div className="w-full max-w-2xl text-center md:text-left">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-medium shadow-sm sm:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-700 dark:bg-emerald-500" />
                <span className="text-muted-foreground">
                    Built for university students
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Find Your{" "}
                <span className="text-emerald-700 dark:text-emerald-500">
                    Next Book.
                </span>

                <span className="mt-2 block text-muted-foreground">
                    Give Your Old Books a New Home.
                </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg md:mx-0">
                The trusted peer-to-peer textbook marketplace built exclusively
                for university students. Save money on textbooks, connect with
                students around you, and give your old books a second life.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-nowrap items-center justify-center gap-3 md:justify-start">
                <Link href="/books" className="shrink-0">
                    <Button
                        size="lg"
                        className="group h-11 rounded-md bg-emerald-700 px-4 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400 sm:px-6 sm:text-base"
                    >
                        <BookOpen className="mr-2 h-4 w-4 shrink-0" />

                        Browse Books

                        <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>

                <Link href="/sell-book" className="shrink-0">
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-11 rounded-md px-4 text-sm sm:px-6 sm:text-base"
                    >
                        Sell a Book
                    </Button>
                </Link>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 border-t pt-6 md:justify-start">
                <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-foreground" />
                    Safe & trusted
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <Users className="h-4 w-4 shrink-0 text-foreground" />
                    Student community
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <BookOpen className="h-4 w-4 shrink-0 text-foreground" />
                    University textbooks
                </div>
            </div>
        </div>
    );
};

export default HeroLeft;