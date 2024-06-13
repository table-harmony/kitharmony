import { createPurchase, getPurchase } from "../data-access";

import { ActionError } from "@/lib/safe-action";
import { CreatePurchaseDto } from "../types";

export async function createPurchaseUseCase(data: CreatePurchaseDto) {
  const existingPurchase = await getPurchase(data);

  if (!existingPurchase) throw new ActionError("Purchase already exists!");

  const purchase = await createPurchase(data);
  return purchase;
}
