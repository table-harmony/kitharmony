import { validateRequest } from "@/lib/auth";
import { AwaitedReactNode } from "react";

export async function SignedIn({ children }: { children: AwaitedReactNode }) {
  const { user } = await validateRequest();

  return user && children;
}
