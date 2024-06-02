import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PurchaseItemProps {
  id: string;
  repoName: string;
  link: string;
  createdAt: Date;
}

export function PurchaseItem({
  id,
  repoName,
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
        {repoName}
      </Link>
      <p className="text-sm text-muted-foreground">Purchase ID: {id}</p>
      <div className="flex items-center justify-between">
        <span className="sr-only">Published On</span>
        <p className="items-center gap-1 text-xs font-medium">
          {createdAt.toLocaleDateString()}
        </p>
        <Link
          href={`/docs/${repoName}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "py-0 text-xs font-medium",
          )}
        >
          To docs →
        </Link>
      </div>
    </article>
  );
}
