import { PurchaseButton } from "@/components/purchase-button";
import { SignedIn } from "@/components/signed";

export default function Home() {
  return (
    <div className="container relative space-y-6 py-2 md:max-w-lg md:py-20">
      <header className="text-center">
        <h1 className="text-xl font-medium md:text-3xl">Starter kits</h1>
        <p className="text-sm text-muted-foreground">View our kits</p>
      </header>
      <SignedIn>
        <PurchaseButton repo="aspkit">purchase AspKit</PurchaseButton>
      </SignedIn>
    </div>
  );
}
