import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface PurchaseItemProps {
  id: string;
  kitName: string;
  link: string;
  createdAt: Date;
}

export function PurchaseItem({
  id,
  kitName,
  link,
  createdAt,
}: PurchaseItemProps) {
  return (
    <article className="flex flex-col gap-3 border-b border-border py-3">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-xl font-medium underline underline-offset-4"
      >
        {kitName}
      </Link>
      <p className="text-sm text-muted-foreground">Purchase ID: {id}</p>
      <div className="flex items-center justify-between">
        <span className="sr-only">Published On</span>
        <p className="items-center gap-1 text-xs font-medium">
          {createdAt.toLocaleDateString()}
        </p>
        <Link
          href={`/docs/${kitName}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "py-0 text-xs font-medium",
          )}
        >
          To docs <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
