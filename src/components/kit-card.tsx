import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface KitCardProps {
  id: string;
  name: string;
  description: string;
  picture: string;
}

export function KitCard({ id, name, description, picture }: KitCardProps) {
  return (
    <Card className="min-w-fit border p-8">
      <Image alt="repo" src={picture} width="50" height="50" />
      <CardHeader>
        <CardTitle>{name.toUpperCase()}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="justify-between">
        FREE{" "}
        <Link className="hover:underline" href={`/${name}`}>
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  );
}
