"use server";

import {
  createPurchaseUseCase,
  getPurchaseUseCase,
} from "@/infrastructure/purchases";
import { getKitUseCase } from "@/infrastructure/kits";

import { redirect } from "next/navigation";

import { addCollaborator } from "@/lib/github";
import { ActionError, authenticatedAction } from "@/lib/safe-action";

import { purchaseSchema } from "./validation";

export const purchaseAction = authenticatedAction(
  purchaseSchema,
  async ({ kitId }, { user }) => {
    const kit = await getKitUseCase({ id: kitId });

    if (!kit) throw new ActionError("Kit not found!");

    const existingPurchase = await getPurchaseUseCase({
      userId: user.id,
      kitId: kit.id,
    });

    if (existingPurchase) return redirect("/purchases");

    await createPurchaseUseCase({ userId: user.id, kitId: kit.id });

    await addCollaborator(user.username, kit.name);

    return redirect("/purchases/success");
  },
);
