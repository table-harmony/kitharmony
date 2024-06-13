import "server-only";

import db from "@/db";

import { CreatePurchaseDto } from "../types";
import { toDtoMapper } from "./get.persistence";

export async function createPurchase(data: CreatePurchaseDto) {
  const purchase = await db.purchase.create({
    data: { userId: data.userId, kitId: data.kitId },
  });

  return toDtoMapper(purchase);
}
