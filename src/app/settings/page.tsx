import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { UserInfo } from "@/components/user-info";
import { DeleteForm } from "./delete-form";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  return (
    <div className="container relative md:max-w-lg space-y-6 py-2 md:py-20">
      <header className="text-center">
        <h1 className="text-xl font-medium md:text-3xl">Settings</h1>
        <p className="text-sm text-muted-foreground">
          View and manage your account
        </p>
      </header>
      <Tabs defaultValue="info" className="mx-auto max-w-sm">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="delete">Delete</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Card>
            <CardHeader>Account Information</CardHeader>
            <CardContent className="space-y-4">
              <UserInfo />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="delete">
          <Card>
            <CardHeader>Delete Account</CardHeader>
            <CardContent className="space-y-4">
              <DeleteForm />
            </CardContent>
            <CardFooter className="text-muted-foreground font-medium text-sm">
              This action cannot be undone.
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
