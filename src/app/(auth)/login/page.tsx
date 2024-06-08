import Link from "next/link";

import { Button } from "@/components/ui/button";

import { GithubIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="container relative space-y-6 md:max-w-lg">
      <header className="text-center">
        <h1 className="text-3xl font-medium">Login</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your account using the options below
        </p>
      </header>
      <Button variant="secondary" className="w-full" asChild>
        <Link href="/login/github">
          <GithubIcon className="mr-2 h-4 w-4" />
          <span className="hidden md:block">Sign in with&nbsp;</span> Github
        </Link>
      </Button>
    </div>
  );
}
