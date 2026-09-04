'use client';
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
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignupFormData } from "../../../Types/SignupFormData_Types";
import { setUser } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";


export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {

  const { register, handleSubmit } = useForm<SignupFormData>();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (values: SignupFormData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", },
          body: JSON.stringify({
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
          id: data?.data?.user?.id,
          name: data?.data?.user?.name,
        })
      );

      console.log("Login successful:", data);
      router.push("/");

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  //google login 
  const handleGoogleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/google`);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <Field>
                <Button
                  onClick={handleGoogleLogin}
                  variant="outline"
                  type="button"
                >
                  <FaGoogle />
                  Login with Google
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register('email', { required: true })}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  {...register('password', { required: true })}
                  id="password"
                  type="password"
                  required
                />
              </Field>
              <Field>
                <Button
                  className="bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer"
                  type="submit">
                  Login
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/auth/signup">Sign up</Link>
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
