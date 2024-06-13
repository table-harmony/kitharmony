import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookIcon, GithubIcon } from "lucide-react";

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
    <Card className="min-w-fit border md:p-8">
      <CardHeader>
        <CardTitle>
          <Link
            href={kitName}
            className="text-primary underline underline-offset-4"
          >
            {kitName.toUpperCase()}
          </Link>
        </CardTitle>
        <CardDescription>{createdAt.toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>Purchase ID: {id}</CardContent>
      <CardFooter className="justify-between">
        <Button size="icon" variant="secondary" asChild>
          <Link href={link} target="_blank" rel="noreferrer">
            <span className="sr-only">github</span>
            <GithubIcon className="h-4 w-4" />
          </Link>
        </Button>
        <Link
          className="flex items-center hover:underline"
          href={`/docs/${kitName}`}
        >
          <BookIcon className="mr-2 h-4 w-4" /> Documentation
        </Link>
      </CardFooter>
    </Card>
  );
}
