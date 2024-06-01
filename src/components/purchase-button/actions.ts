"use server";

import {
  createPurchase,
  getPurchaseByUserAndRepo,
} from "@/infrastructure/purchase";
import { getRepoByName } from "@/infrastructure/repo";

import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";
import { addCollaborator } from "@/lib/github";

export async function purchaseAction(repoName: string) {
  if (!repoName) return { error: "Missing repo!" };

  const { user } = await validateRequest();

  if (!user) return { error: "Unauthorized!" };

  const repo = await getRepoByName({ name: repoName });

  if (!repo) return { error: "Repo not found!" };

  const existingPurchase = await getPurchaseByUserAndRepo({
    userId: user.id,
    repoId: repo.id,
  });

  if (existingPurchase) return redirect("/purchases");

  await createPurchase({ userId: user.id, repoId: repo.id });

  await addCollaborator(user.username, repo.name);

  return redirect("/purchases/success");
}
