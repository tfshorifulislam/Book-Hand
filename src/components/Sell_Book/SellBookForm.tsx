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
    onSubmit: (data: SellBookFormData) => void;
};

const SellBookForm = ({ onSubmit }: SellBookFormProps) => {
    const {
        register,
        handleSubmit,
        control,
    } = useForm<SellBookFormData>();

    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    Sell Your Book
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Add your book details and create a listing to sell it.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Book Information</CardTitle>

                    <CardDescription>
                        Provide some basic information about the book.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        {/* Book Information */}
                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title">
                                    Book Title
                                </Label>

                                <Input
                                    id="title"
                                    placeholder="e.g. Clean Code"
                                    {...register("title")}
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
                                    {...register("author")}
                                />
                            </div>

                            {/* Category */}
                            <div className="space-y-2">
                                <Label htmlFor="category">
                                    Category
                                </Label>

                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger id="category">
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
                                <Label htmlFor="language">
                                    Language
                                </Label>

                                <Controller
                                    name="language"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger id="language">
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

                        {/* Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description">
                                Book Description
                            </Label>

                            <Textarea
                                id="description"
                                placeholder="Write a short description about the book..."
                                className="min-h-32 resize-none"
                                {...register("description")}
                            />
                        </div>

                        {/* Cover Image */}
                        <div className="space-y-2">
                            <Label htmlFor="coverImage">
                                Cover Image
                            </Label>

                            <Input
                                id="coverImage"
                                type="file"
                                accept="image/*"
                                {...register("coverImage")}
                            />

                            <p className="text-xs text-muted-foreground">
                                Upload a clear image of the book cover.
                            </p>
                        </div>

                        {/* Selling Information */}
                        <div className="border-t pt-8">
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold">
                                    Selling Information
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    Tell buyers about the condition and price.
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
                                        placeholder="e.g. 450 BDT"
                                        {...register("price", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </div>

                                {/* Condition */}
                                <div className="space-y-2">
                                    <Label htmlFor="condition">
                                        Book Condition
                                    </Label>

                                    <Controller
                                        name="condition"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger id="condition">
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
                        <div className="flex justify-end pt-6">
                            <Button
                                type="submit"
                                size="lg"
                                className="min-w-40 cursor-pointer bg-emerald-700 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                            >
                                List Book for Sale
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SellBookForm;