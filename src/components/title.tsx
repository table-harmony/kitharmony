import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle, className }: TitleProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="max-w-lg text-xl font-bold uppercase text-primary md:text-4xl">
        {title}
      </span>
      <span className="mb-2 font-semibold">{subtitle}</span>
    </div>
  );
}
