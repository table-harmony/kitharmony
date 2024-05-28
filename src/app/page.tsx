import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Button asChild>
        <Link href="/api/purchase?repo=ASP.NET-starterkit">
          Purchase ASP.NET starter kit
        </Link>
      </Button>
    </>
  );
}
