import { Search, ArrowRight } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FindRightBookSection = () => {
    return (
        <section className="w-full bg-muted/30">
            <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">


                <div className="mx-auto max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Find your textbook
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Find the <span className="text-emerald-700 dark:text-emerald-500">right book</span>
                        <span className="block text-muted-foreground">
                            for your course
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                        Search thousands of university textbooks from students around
                        you. Find the book you need at a price that fits your budget.
                    </p>
                </div>


                <div className="mx-auto mt-8 max-w-2xl">


                    {/* Input */}
                    <div className="relative flex flex-1 items-center gap-3">

                        <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />

                        <Input
                            type="search"
                            placeholder="Search by book title, author, ISBN..."
                            className="h-12 border-0 bg-transparent pl-12 pr-4 text-sm shadow-none focus-visible:ring-0"
                        />


                        {/* Search Button */}
                        <Button
                            size="lg"
                            className="h-12 bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer px-6 "
                        >
                            Search
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindRightBookSection;

