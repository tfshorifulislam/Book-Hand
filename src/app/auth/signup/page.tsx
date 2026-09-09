import { SignupForm } from "@/components/Auth/signup-form"

export default function SignupPage() {
  return (
    <div className="flex max-h-screen flex-col items-center justify-center mx-auto my-10 md:my-30">
      <div className="flex w-full max-w-sm flex-col">
        <SignupForm />
      </div>
    </div>
  )
}
