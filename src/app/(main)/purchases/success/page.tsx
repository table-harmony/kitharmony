import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="container relative md:max-w-lg space-y-6 py-2 md:py-20">
      <header className="text-center">
        <h1 className="font-medium text-3xl">Purchase Successful</h1>
        <p className="text-sm text-muted-foreground">
          Click below to view your purchase
        </p>
      </header>
      <Button variant="secondary" className="w-full" asChild>
        <Link href="/purchases">View purchases</Link>
      </Button>
    </div>
  );
}
