import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

import { GithubIcon } from "lucide-react";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function LoginPage() {
  return (
    <Section className="space-y-5">
      <PageHeader>
        <PageHeaderHeading className="uppercase">login</PageHeaderHeading>
        <PageHeaderDescription>
          Sign in to your account using the options below
        </PageHeaderDescription>
      </PageHeader>
      <PageActions>
        <Button className="w-72" asChild>
          <Link href="/login/github">
            <GithubIcon className="mr-2 h-4 w-4" />
            <span className="hidden md:block">Sign in with&nbsp;</span> Github
          </Link>
        </Button>
      </PageActions>
    </Section>
  );
}
