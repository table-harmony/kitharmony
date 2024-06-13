import { getPurchase, getUserPurchases } from "../data-access";

import { ActionError } from "@/lib/safe-action";
import { isValidObjectId } from "@/lib/utils";

export async function getPurchaseUseCase(data: {
  userId: string;
  kitId: string;
}) {
  if (!isValidObjectId(data.userId) || !isValidObjectId(data.kitId))
    throw new ActionError("Invalid ID!");

  const purchase = await getPurchase(data);

  return purchase;
}

export async function getUserPurchasesUseCase(data: { userId: string }) {
  if (!isValidObjectId(data.userId)) throw new ActionError("Invalid user id!");

  const purchases = await getUserPurchases(data);

  return purchases;
}
