import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

import { GithubIcon } from "lucide-react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function LoginPage() {
  return (
    <Section className="space-y-10">
      <PageHeader>
        <PageHeaderHeading>Login</PageHeaderHeading>
        <PageHeaderDescription>
          Sign in to your account using the options below
        </PageHeaderDescription>
      </PageHeader>
      <Button className="w-full" asChild>
        <Link href="/login/github">
          <GithubIcon className="mr-2 h-4 w-4" />
          <span className="hidden md:block">Sign in with&nbsp;</span> Github
        </Link>
      </Button>
    </Section>
  );
}
