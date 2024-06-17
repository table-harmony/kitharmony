import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SubmitButton({ children, className, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className={cn("flex justify-center gap-2", className)}
      {...props}
    >
      {pending && <Loader2Icon className="h-4 w-4 animate-spin" />} {children}
    </Button>
  );
}
