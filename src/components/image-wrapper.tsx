import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export function ImageWrapper({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className={className}>
      <div className="-m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 dark:bg-neutral-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        {children}
      </div>
    </div>
  );
}

interface ThemeImageProps extends ImageProps {
  dark: string;
}

export function ThemeImage({ src, alt, className, dark }: ThemeImageProps) {
  return (
    <>
      <ImageWrapper className={cn("dark:hidden", className)}>
        <Image src={src} alt={alt} width="1222" height="636" />
      </ImageWrapper>
      <ImageWrapper className={cn("hidden dark:block", className)}>
        <Image src={dark} alt={alt} width="1222" height="636" />
      </ImageWrapper>
    </>
  );
}
