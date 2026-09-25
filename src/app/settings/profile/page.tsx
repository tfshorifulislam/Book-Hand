"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Camera, Loader2, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
};

const UpdateProfilePage = ({ name: initialName, email: initialEmail, image: initialImage, }:Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const originalName = initialName ?? "";
    const originalEmail = initialEmail ?? "";
    const [name, setName] = useState(originalName);
    const [email, setEmail] = useState(originalEmail);
    const [image, setImage] = useState(initialImage ?? "");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const nameChanged = name !== originalName;
    const emailChanged = email !== originalEmail;
    const imageChanged = selectedFile !== null;
    const hasChanges = nameChanged || emailChanged || imageChanged;

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            return;
        }

        setSelectedFile(file);
        setImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (!hasChanges) return;

        try {
            setIsLoading(true);

            const formData = new FormData();

            if (nameChanged) {
                formData.append("name", name);
            }

            if (emailChanged) {
                formData.append("email", email);
            }

            if (imageChanged && selectedFile) {
                formData.append("image", selectedFile);
            }

            console.log({
                name: nameChanged ? name : undefined,
                email: emailChanged ? email : undefined,
                image: imageChanged ? selectedFile : undefined,
            });

            // API call
        } catch (error) {
            console.error("Failed to update profile:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="w-full px-6 py-10 lg:px-8 lg:py-14">
            <div className="mx-auto w-full max-w-2xl">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
                        Account settings
                    </p>

                    <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                        Update your profile
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Update your name, email, or profile picture.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                    {/* Profile Image */}
                    <div className="space-y-3">
                        <Label>Profile image</Label>

                        <div className="flex items-center gap-5">
                            <button
                                type="button"
                                onClick={openFilePicker}
                                className="group relative size-24 shrink-0 cursor-pointer overflow-hidden rounded-full border border-border bg-muted transition-colors hover:border-[#FF9100]/50"
                            >
                                {image ? (
                                    <Image
                                        src={image}
                                        alt="Profile preview"
                                        fill
                                        unoptimized={image.startsWith("blob:")}
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex size-full items-center justify-center">
                                        <Camera className="size-7 text-muted-foreground transition-colors group-hover:text-[#FF9100]" />
                                    </div>
                                )}

                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <Camera className="size-5 text-white" />
                                </div>
                            </button>

                            <div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={openFilePicker}
                                    className="cursor-pointer rounded-lg"
                                >
                                    Change photo
                                </Button>

                                <p className="mt-2 text-xs text-muted-foreground">
                                    JPG, PNG or WEBP. Maximum 5MB.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            placeholder="Your name"
                            required
                            className="h-11 rounded-lg"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            placeholder="you@example.com"
                            required
                            className="h-11 rounded-lg"
                        />

                        <p className="text-xs text-muted-foreground">
                            Make sure you enter an email address you can access.
                        </p>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end border-t border-border pt-6">
                        <Button
                            type="submit"
                            disabled={!hasChanges || isLoading}
                            className="h-11 cursor-pointer rounded-lg bg-[#FF9100] px-6 text-white hover:bg-[#EB7D00] disabled:cursor-not-allowed dark:text-black"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 size-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 size-4" />
                                    Save changes
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default UpdateProfilePage;