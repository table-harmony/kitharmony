import Link from "next/link";
import { PurchaseButton } from "./purchase-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface RepoCardProps {
  id: string;
  name: string;
  description: string;
  picture: string;
}

export function RepoCard({ id, name, description, picture }: RepoCardProps) {
  return (
    <Card className="min-w-fit border p-8">
      <Image alt="repo" src={picture} width="50" height="50" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="justify-between">
        FREE{" "}
        <Link className="hover:underline" href={`/kits/${name}`}>
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  );
}