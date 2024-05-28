"use server";

import db from "@/db";

import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";
import { addCollaborator } from "@/lib/github";

export async function purchaseAction(repoName: string) {
  if (!repoName) return { error: "Missing repo!" };

  const { user } = await validateRequest();

  if (!user) return { error: "Unauthorized!" };

  const repo = await db.repo.findUnique({ where: { name: repoName } });

  if (!repo) return { error: "Repo not found!" };

  const existingPurchase = await db.purchase.findUnique({
    where: {
      userId_repoId: {
        userId: user.id,
        repoId: repo.id,
      },
    },
  });

  if (existingPurchase) return redirect("/purchases");

  await db.purchase.create({
    data: {
      userId: user.id,
      repoId: repo.id,
    },
  });

  await addCollaborator(user.username, repo.name);

  return redirect("/purchases/success");
}
