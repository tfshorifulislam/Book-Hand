"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Camera, Loader2, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfile } from "@/actions/profile.update";
import { uploadImage } from "@/lib/upload.imageBB";

type Props = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
};

const UpdateProfilePage = ({
    name: initialName,
    email: initialEmail,
    image: initialImage,
}: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState(initialName ?? "");
    const [email, setEmail] = useState(initialEmail ?? "");
    const [image, setImage] = useState(initialImage ?? "");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const nameChanged = name !== (initialName ?? "");
    const emailChanged = email !== (initialEmail ?? "");
    const imageChanged = selectedFile !== null;

    const hasChanges = nameChanged || emailChanged || imageChanged;

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file || !file.type.startsWith("image/")) return;
        if (file.size > 5 * 1024 * 1024) return;

        setSelectedFile(file);
        setImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        if (!hasChanges) return;

        try {
            setIsLoading(true);

            const data: {
                name?: string;
                email?: string;
                image?: string;
            } = {};

            if (nameChanged) {
                data.name = name.trim();
            }

            if (emailChanged) {
                data.email = email.trim();
            }

            if (imageChanged && selectedFile) {
                const imageUrl = await uploadImage(selectedFile);

                data.image = imageUrl;
            }

            console.log("Update data:", data);

            await updateProfile(data);

            console.log("Profile updated");
        } catch (error) {
            console.error("Profile update failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="mx-auto w-full max-w-2xl px-6 py-10">
            <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#EB7D00]">
                    Account settings
                </p>

                <h1 className="mt-2 text-2xl font-bold">
                    Update your profile
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Update your profile information.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6 rounded-xl border p-6"
            >
                {/* Image */}
                <div className="space-y-3">
                    <Label>Profile image</Label>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="relative size-20 overflow-hidden rounded-full border bg-muted"
                        >
                            {image ? (
                                <Image
                                    src={image}
                                    alt="Profile"
                                    fill
                                    unoptimized={image.startsWith("blob:")}
                                    className="object-cover"
                                />
                            ) : (
                                <Camera className="mx-auto size-6 text-muted-foreground" />
                            )}
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
                                onClick={() => fileInputRef.current?.click()}
                                className="rounded-lg"
                            >
                                Change photo
                            </Button>

                            <p className="mt-1 text-xs text-muted-foreground">
                                JPG, PNG or WEBP · Max 5MB
                            </p>
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className="h-11"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="h-11"
                    />
                </div>

                <div className="flex justify-end border-t pt-5">
                    <Button
                        type="submit"
                        disabled={!hasChanges || isLoading}
                        className="rounded-lg bg-[#FF9100] text-white hover:bg-[#EB7D00] dark:text-black"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save className="size-4" />
                                Save changes
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </main>
    );
};

export default UpdateProfilePage;