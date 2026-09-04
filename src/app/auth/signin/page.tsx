import { LoginForm } from "@/components/Auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center md:p-10">
      <div className="flex w-full max-w-sm flex-col ">
        
        <LoginForm />

      </div>
    </div>
  )
}
