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
            className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Sell Your Book
                </h1>

                <p className="mt-2 max-w-2xl text-muted-foreground">
                    Add your book information, set a price, and list it for
                    other students to buy.
                </p>
            </div>

            <Card className="shadow-sm">
                <CardHeader className="border-b">
                    <CardTitle>Book Information</CardTitle>

                    <CardDescription>
                        Provide accurate information about the book.
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="space-y-8"
                    >
                        {/* Basic Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Basic Information
                                </h2>

                                <p className="text-sm text-muted-foreground">
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
                                                <SelectTrigger className="w-full">
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
                                                <SelectTrigger className="w-full">
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

                        {/* Description */}
                        <div className="space-y-6 border-t pt-8">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Description
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    Tell buyers a little about the book.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">
                                    Book Description
                                </Label>

                                <Textarea
                                    id="description"
                                    placeholder="Write a short description about the book..."
                                    className="min-h-32 resize-none"
                                    {...register("description", {
                                        required:
                                            "Book description is required",
                                    })}
                                />
                            </div>
                        </div>

                        {/* Cover Image */}
                        <div className="space-y-6 border-t pt-8">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Book Cover
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    Upload a clear image of the book cover.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="coverImage">
                                    Cover Image
                                </Label>

                                <Input
                                    id="coverImage"
                                    type="file"
                                    accept="image/*"
                                    {...register("coverImage", {
                                        required:
                                            "Book cover image is required",
                                    })}
                                />

                                <p className="text-xs text-muted-foreground">
                                    JPG, PNG or WEBP. Use a clear image for
                                    better visibility.
                                </p>
                            </div>
                        </div>

                        {/* Selling Information */}
                        <div className="space-y-6 border-t pt-8">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Selling Information
                                </h2>

                                <p className="text-sm text-muted-foreground">
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
                                                <SelectTrigger className="w-full">
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
                                className="cursor-pointer bg-emerald-700 px-8 text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
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