import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserInfo } from "@/components/user-info";

export default async function SettingsPage() {
  return (
    <div className="container relative md:max-w-lg space-y-6 py-2 md:py-20">
      <header className="text-center">
        <h1 className="text-xl font-medium md:text-3xl">Settings</h1>
        <p className="text-sm text-muted-foreground">
          View and manage your account
        </p>
      </header>
      <Card className="mx-auto max-w-sm">
        <CardHeader>Account Information</CardHeader>
        <CardContent className="space-y-4">
          <UserInfo />
        </CardContent>
      </Card>
    </div>
  );
}
