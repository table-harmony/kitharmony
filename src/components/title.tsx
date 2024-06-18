interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function Title({ title, subtitle, className }: TitleProps) {
  return (
    <div className={className}>
      <h2 className="max-w-lg text-lg font-bold uppercase text-primary sm:text-xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-2 max-w-lg text-sm font-semibold sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
