import Link from "next/link";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="container px-4 py-16 lg:px-20">
      <PageHeader>
        <PageHeaderHeading className="uppercase">
          purchase successful
        </PageHeaderHeading>
        <PageHeaderDescription>
          We have sent you an invitation to our starter kit
        </PageHeaderDescription>
        <PageActions>
          <Button className="w-72" asChild>
            <Link href="/purchases">
              <ShoppingCartIcon className="mr-2 h-4 w-4" /> View purchases
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  );
}
