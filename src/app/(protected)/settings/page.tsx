import { Section } from "@/components/section";
import { UserInfo } from "@/components/user-info";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function SettingsPage() {
  return (
    <Section className="space-y-10">
      <PageHeader>
        <PageHeaderHeading>Settings</PageHeaderHeading>
      </PageHeader>
      <Card className="mx-auto max-w-sm">
        <CardHeader>Account Information</CardHeader>
        <CardContent className="space-y-4">
          <UserInfo />
        </CardContent>
      </Card>
    </Section>
  );
}
