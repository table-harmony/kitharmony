import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function NoResult({ children }: { children: React.ReactNode }) {
  return (
    <Card className="mx-auto max-w-4xl border py-10 shadow md:py-20">
      <CardContent className="flex flex-col items-center justify-center space-y-10">
        {children}
      </CardContent>
    </Card>
  );
}

function NoResultTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <span className={cn("text-center font-semibold", className)} {...props} />
  );
}

function NoResultContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <div {...props} />;
}

export { NoResult, NoResultTitle, NoResultContent };
