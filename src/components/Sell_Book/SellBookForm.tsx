"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Controller, useForm } from "react-hook-form";
import { SellBookFormData } from "../../../Types/SellBookFormData";

type SellBookFormProps = {
    onSubmit: (data: SellBookFormData) => Promise<void>;
};

const SellBookForm = ({ onSubmit }: SellBookFormProps) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { isSubmitting },
    } = useForm<SellBookFormData>({
        defaultValues: {
            title: "",
            author: "",
            category: "",
            language: "",
            description: "",
            price: 0,
            condition: "",
        },
    });

    const handleFormSubmit = async (data: SellBookFormData) => {
        await onSubmit(data);
        reset();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-14"
        >
            {/* Header */}
            <div className="mb-10">
                <div className="mb-5 flex items-center gap-3">
                    <span className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-500" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
                        Sell a Book
                    </span>
                </div>

                <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                    <span className="text-emerald-700 dark:text-emerald-500">
                        Give your book
                    </span>
                    <br />
                    <span className="text-foreground">
                        a new home.
                    </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                    Add your book information, set a price, and list it for
                    other students to buy.
                </p>
            </div>

            <Card className="rounded-xl">
                <CardHeader className="border-b bg-muted/20 px-6 py-6 md:px-8">
                    <CardTitle className="text-xl">
                        Book Information
                    </CardTitle>

                    <CardDescription className="mt-1">
                        Provide accurate information about the book.
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6 py-8 md:px-8 md:py-10">
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="space-y-10"
                    >
                        {/* Basic Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Basic Information
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Enter the basic details of your book.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Title */}
                                <div className="space-y-2">
                                    <Label htmlFor="title">
                                        Book Title
                                    </Label>

                                    <Input
                                        id="title"
                                        placeholder="e.g. Clean Code"
                                        className="focus-visible:border-emerald-700 focus-visible:ring-emerald-700/20 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-500/20"
                                        {...register("title", {
                                            required:
                                                "Book title is required",
                                        })}
                                    />
                                </div>

                                {/* Author */}
                                <div className="space-y-2">
                                    <Label htmlFor="author">
                                        Author
                                    </Label>

                                    <Input
                                        id="author"
                                        placeholder="e.g. Robert C. Martin"
                                        className="focus-visible:border-emerald-700 focus-visible:ring-emerald-700/20 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-500/20"
                                        {...register("author", {
                                            required:
                                                "Author name is required",
                                        })}
                                    />
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <Label>Category</Label>

                                    <Controller
                                        name="category"
                                        control={control}
                                        rules={{
                                            required:
                                                "Please select a category",
                                        }}
                                        render={({ field }) => (
                                            <Select
                                                value={field.value ?? ""}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-full focus:border-emerald-700 focus:ring-emerald-700/20 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20">
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="programming">
                                                        Programming
                                                    </SelectItem>
                                                    <SelectItem value="engineering">
                                                        Engineering
                                                    </SelectItem>
                                                    <SelectItem value="business">
                                                        Business
                                                    </SelectItem>
                                                    <SelectItem value="science">
                                                        Science
                                                    </SelectItem>
                                                    <SelectItem value="mathematics">
                                                        Mathematics
                                                    </SelectItem>
                                                    <SelectItem value="other">
                                                        Other
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>

                                {/* Language */}
                                <div className="space-y-2">
                                    <Label>Language</Label>

                                    <Controller
                                        name="language"
                                        control={control}
                                        rules={{
                                            required:
                                                "Please select a language",
                                        }}
                                        render={({ field }) => (
                                            <Select
                                                value={field.value ?? ""}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-full focus:border-emerald-700 focus:ring-emerald-700/20 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20">
                                                    <SelectValue placeholder="Select language" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="english">
                                                        English
                                                    </SelectItem>
                                                    <SelectItem value="bangla">
                                                        Bangla
                                                    </SelectItem>
                                                    <SelectItem value="other">
                                                        Other
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Description */}
                            <div className="space-y-6 border-t pt-10">
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Description
                                    </h2>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Tell buyers a little about the book.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="description"
                                        className="text-sm font-medium"
                                    >
                                        Book Description
                                    </Label>

                                    <Textarea
                                        id="description"
                                        placeholder="Describe the book's condition, edition, highlights, or anything buyers should know..."
                                        className="min-h-40 resize-none rounded-lg border-border bg-background px-4 py-3 text-sm leading-6 shadow-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-emerald-700 focus-visible:ring-emerald-700/15 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-500/15"
                                        {...register("description", {
                                            required: "Book description is required",
                                        })}
                                    />

                                    <div className="flex items-center justify-between px-1">
                                        <p className="text-xs text-muted-foreground">
                                            A clear description helps buyers understand your book better.
                                        </p>

                                        <span className="text-[11px] text-muted-foreground/60">
                                            Optional details welcome
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Cover Image */}
                            <div className="space-y-6 border-t pt-10">
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Book Cover
                                    </h2>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Upload a clear image of the book cover.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <Label
                                        htmlFor="coverImage"
                                        className="text-sm font-medium"
                                    >
                                        Cover Image
                                    </Label>

                                    <label
                                        htmlFor="coverImage"
                                        className="group flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20   text-center transition-all duration-300 hover:border-emerald-700/50 hover:bg-emerald-700/3 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-500/3"
                                    >
                                        <div className="mb-4 flex size-12 items-center justify-center rounded-xl border bg-background transition-colors duration-300 group-hover:border-emerald-700/40 dark:group-hover:border-emerald-500/40">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16V4m0 0L8 8m4-4 4 4"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"
                                                />
                                            </svg>
                                        </div>

                                        <span className="text-sm font-medium">
                                            Upload your book cover
                                        </span>

                                        <span className="mt-1 text-xs text-muted-foreground">
                                            Click to browse from your device
                                        </span>

                                        <span className="mt-3 text-[11px] text-muted-foreground/70">
                                            JPG, PNG or WEBP · Clear images work best
                                        </span>

                                        <Input
                                            id="coverImage"
                                            type="file"
                                            accept="image/*"
                                            className="sr-only"
                                            {...register("coverImage", {
                                                required: "Book cover image is required",
                                            })}
                                        />
                                    </label>

                                    <p className="px-1 text-xs text-muted-foreground">
                                        Use a clear front-cover image so buyers can easily identify the
                                        book.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Selling Information */}
                        <div className="space-y-6 border-t pt-10">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Selling Information
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Set the price and condition of your book.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Price */}
                                <div className="space-y-2">
                                    <Label htmlFor="price">
                                        Price
                                    </Label>

                                    <Input
                                        id="price"
                                        type="number"
                                        min="0"
                                        step="1"
                                        placeholder="450"
                                        className="focus-visible:border-emerald-700 focus-visible:ring-emerald-700/20 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-500/20"
                                        {...register("price", {
                                            required:
                                                "Price is required",
                                            valueAsNumber: true,
                                            min: {
                                                value: 0,
                                                message:
                                                    "Price cannot be negative",
                                            },
                                        })}
                                    />

                                    <p className="text-xs text-muted-foreground">
                                        Enter price in BDT.
                                    </p>
                                </div>

                                {/* Condition */}
                                <div className="space-y-2">
                                    <Label>Book Condition</Label>

                                    <Controller
                                        name="condition"
                                        control={control}
                                        rules={{
                                            required:
                                                "Please select book condition",
                                        }}
                                        render={({ field }) => (
                                            <Select
                                                value={field.value ?? ""}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-full focus:border-emerald-700 focus:ring-emerald-700/20 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20">
                                                    <SelectValue placeholder="Select condition" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="new">
                                                        New
                                                    </SelectItem>
                                                    <SelectItem value="like-new">
                                                        Like New
                                                    </SelectItem>
                                                    <SelectItem value="good">
                                                        Good
                                                    </SelectItem>
                                                    <SelectItem value="fair">
                                                        Fair
                                                    </SelectItem>
                                                    <SelectItem value="poor">
                                                        Poor
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex flex-col-reverse gap-3 border-t pt-8 sm:flex-row sm:justify-end">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="cursor-pointer rounded-md bg-emerald-700 px-8 text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="mr-2 size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                        Listing...
                                    </>
                                ) : (
                                    "List Book for Sale"
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default SellBookForm;