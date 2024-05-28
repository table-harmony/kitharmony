"use client";

import React, { useTransition } from "react";

import { purchaseAction } from "./actions";

import { useToast } from "@/components/ui/use-toast";
import { LoaderButton } from "@/components/ui/loader-button";

import { ButtonProps } from "@/components/ui/button";

type PurchaseButtonProps = ButtonProps & {
  repo: string;
  children: React.ReactNode;
};

export const PurchaseButton = React.forwardRef<
  HTMLButtonElement,
  PurchaseButtonProps
>(({ repo, children, ...props }, ref) => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = () => {
    startTransition(() => {
      purchaseAction(repo)
        .then((data) => {
          if (data?.error)
            toast({ variant: "destructive", description: data.error });
        })
        .catch(() =>
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        );
    });
  };

  return (
    <form action={onSubmit}>
      <LoaderButton isLoading={isPending} ref={ref} type="submit" {...props}>
        {children}
      </LoaderButton>
    </form>
  );
});

PurchaseButton.displayName = "PurchaseButton";
