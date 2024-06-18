"use client";

import { purchaseAction } from "./actions";
import { useAction } from "next-safe-action/hooks";

import { useToast } from "@/components/ui/use-toast";
import { SubmitButton } from "@/components/submit-button";

export function PurchaseForm({ kitName }: { kitName: string }) {
  const { toast } = useToast();

  const { execute } = useAction(purchaseAction, {
    onError(error) {
      toast({ variant: "destructive", description: error.serverError });
    },
  });

  return (
    <form action={() => execute({ kitName })}>
      <SubmitButton className="w-72">Purchase</SubmitButton>
    </form>
  );
}
