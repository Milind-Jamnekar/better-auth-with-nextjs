import { ProfileForm } from "@/components/example-form";
import { LoginForm } from "@/components/login-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm flex gap-4">
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Login
        </Link>

        <Link
          href="/signup"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
