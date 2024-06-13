"use server";

import {
  createPurchase,
  getPurchaseByUserAndKit,
} from "@/infrastructure/purchase";
import { getKit } from "@/infrastructure/kit";

import { redirect } from "next/navigation";

import { addCollaborator } from "@/lib/github";
import { ActionError, authenticatedAction } from "@/lib/safe-action";

import { purchaseSchema } from "./validation";

export const purchaseAction = authenticatedAction(
  purchaseSchema,
  async ({ kitId }, { user }) => {
    const kit = await getKit({ id: kitId });

    if (!kit) throw new ActionError("Kit not found!");

    const existingPurchase = await getPurchaseByUserAndKit({
      userId: user.id,
      kitId: kit.id,
    });

    if (existingPurchase) return redirect("/purchases");

    await createPurchase({ userId: user.id, kitId: kit.id });

    await addCollaborator(user.username, kit.name);

    return redirect("/purchases/success");
  },
);
