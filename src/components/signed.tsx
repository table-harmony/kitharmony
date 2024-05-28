import { validateRequest } from "@/lib/auth";

export async function SignedOut({ children }: { children?: React.ReactNode }) {
  const { user } = await validateRequest();

  return <>{!user && children}</>;
}

export async function SignedIn({ children }: { children?: React.ReactNode }) {
  const { user } = await validateRequest();

  return <>{user && children}</>;
}
