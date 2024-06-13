import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle, className }: TitleProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <h2 className="max-w-lg text-xl font-bold uppercase text-primary md:text-4xl">
        {title}
      </h2>
      <p className="mb-2 font-semibold">{subtitle}</p>
    </div>
  );
}
