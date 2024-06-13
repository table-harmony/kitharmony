import { LogoutForm } from "./form";
import { Section } from "@/components/section";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function LogoutPage() {
  return (
    <Section className="space-y-10">
      <PageHeader>
        <PageHeaderHeading>Logout</PageHeaderHeading>
        <PageHeaderDescription>
          You are about to sign out of your account.
        </PageHeaderDescription>
      </PageHeader>
      <LogoutForm />
    </Section>
  );
}
