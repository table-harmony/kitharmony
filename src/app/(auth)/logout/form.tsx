"use client";

import { useTransition } from "react";

import { logoutAction } from "./actions";

import { useToast } from "@/components/ui/use-toast";
import { LoaderButton } from "@/components/loader-button";

import { LogOutIcon } from "lucide-react";
import { SubmitButton } from "@/components/submit-button";

export const LogoutForm = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = () => {
    startTransition(() => {
      logoutAction()
        .then((data) => {
          if (data?.error)
            toast({ variant: "destructive", description: data.error });
        })
        .catch(() =>
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          }),
        );
    });
  };

  return (
    <form action={onSubmit}>
      <SubmitButton className="w-72">Logout</SubmitButton>
    </form>
  );
};
