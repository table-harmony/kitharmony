"use server";

import {
  createPurchase,
  getPurchaseByUserAndRepo,
} from "@/infrastructure/purchase";
import { getRepo } from "@/infrastructure/repo";

import { redirect } from "next/navigation";

import { addCollaborator } from "@/lib/github";
import { ActionError, authenticatedAction } from "@/lib/safe-action";

import { purchaseSchema } from "./validation";

export const purchaseAction = authenticatedAction(
  purchaseSchema,
  async ({ repoId }, { user }) => {
    const repo = await getRepo({ id: repoId });

    if (!repo) throw new ActionError("Repo not found!");

    const existingPurchase = await getPurchaseByUserAndRepo({
      userId: user.id,
      repoId: repo.id,
    });

    if (existingPurchase) return redirect("/purchases");

    await createPurchase({ userId: user.id, repoId: repo.id });

    await addCollaborator(user.username, repo.name);

    return redirect("/purchases/success");
  },
);
