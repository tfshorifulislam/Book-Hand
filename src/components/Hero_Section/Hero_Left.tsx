import React from "react";
import { ArrowRight, BookOpen, ShieldCheck, Users } from "lucide-react";
import { Button } from "../ui/button";

const HeroLeft = () => {
    return (
        <div className="max-w-2xl">
           
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm font-medium shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-muted-foreground">
                    Built for university students
                </span>
            </div>

           
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Find Your <span className="text-emerald-700">Next Book.</span>
                <span className="mt-2 block text-muted-foreground">
                    Give Your Old Books a New Home.
                </span>
            </h1>

          
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                The trusted peer-to-peer textbook marketplace built exclusively for
                university students. Save money on textbooks, connect with students
                around you, and give your old books a second life.
            </p>

           
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                    size="lg"
                    className="group rounded-md px-6 bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer"
                >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Books
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                    className="rounded-md px-6"
                >
                    Sell a Book
                </Button>
            </div>

           
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-foreground" />
                    Safe & trusted
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-foreground" />
                    Student community
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-foreground" />
                    University textbooks
                </div>
            </div>
        </div>
    );
};

export default HeroLeft;
