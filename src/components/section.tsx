import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("container px-4 pb-16 pt-10 md:pt-16 lg:px-20", className)}
      {...props}
    >
      {children}
    </section>
  );
}
