import { LogoutForm } from "./form";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function LogoutPage() {
  return (
    <div>
      <PageHeader>
        <PageHeaderHeading className="uppercase">logout</PageHeaderHeading>
        <PageHeaderDescription>
          You are about to sign out of your account.
        </PageHeaderDescription>
      </PageHeader>
      <PageActions>
        <LogoutForm />
      </PageActions>
    </div>
  );
}
