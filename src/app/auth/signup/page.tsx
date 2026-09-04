import { SignupForm } from "@/components/Auth/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col">
        <SignupForm />
      </div>
    </div>
  )
}
