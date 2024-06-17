import { validateRequest } from "@/lib/auth";
import { AwaitedReactNode } from "react";

export async function SignedOut({ children }: { children: AwaitedReactNode }) {
  const { user } = await validateRequest();

  return !user && children;
}
