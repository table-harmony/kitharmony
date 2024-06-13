"use client";

import React from "react";

import { purchaseAction } from "./actions";
import { useAction } from "next-safe-action/hooks";

import { useToast } from "@/components/ui/use-toast";
import { LoaderButton } from "@/components/ui/loader-button";
import { CreditCardIcon } from "lucide-react";

export function PurchaseForm({ kitName }: { kitName: string }) {
  const { toast } = useToast();

  const { execute, status } = useAction(purchaseAction, {
    onError(error) {
      toast({ variant: "destructive", description: error.serverError });
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    execute({ kitName });
  };

  return (
    <form onSubmit={onSubmit}>
      <LoaderButton
        isLoading={status === "executing"}
        icon={CreditCardIcon}
        type="submit"
        className="w-72"
      >
        purchase
      </LoaderButton>
    </form>
  );
}
