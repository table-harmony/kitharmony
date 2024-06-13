import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="container relative space-y-6 py-2 md:max-w-lg md:py-20">
      <header className="text-center">
        <h1 className="text-3xl font-medium">Purchase Successful</h1>
        <p className="text-sm text-muted-foreground">
          We have sent you an{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/notifications"
            className="font-bold underline underline-offset-4"
          >
            Invitation
          </Link>{" "}
          to our starter kit
        </p>
      </header>
    </div>
  );
}
