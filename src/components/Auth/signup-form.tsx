"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { SignupFormData } from "../../../Types/SignupFormData_Types";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/user/userSlice";
import { useState } from "react";


export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {

      const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<SignupFormData>();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (values: SignupFormData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
        {
          method: "POST",
          credentials: "include",
          headers: {"Content-Type": "application/json", },
          body: JSON.stringify({
            name: values.fullName,
            email: values.email,
            password: values.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return;
      }

      dispatch(
        setUser({
          id: data.data.user.id,
          name: data.data.user.name,
        })
      )

      console.log("Signup successful:", data);
      router.push("/");

    } catch (error) {
      console.error("Signup error:", error);
    }
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  {...register('fullName')}
                  id="name"
                  type="text" placeholder="John Doe"
                  required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      {...register('password')}
                      id="password"
                      type="password"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      {...register('confirmPassword')}
                      id="confirm-password"
                      type="password"
                      required
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button
                disabled={loading}
                  className="bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer"
                  type="submit">
                  {loading
                    ? "Signing up..."
                    : "Sign Up"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/auth/signin">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
