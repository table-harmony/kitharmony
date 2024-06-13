import db from "@/db";
import { ActionError } from "@/lib/safe-action";
import { isValidObjectId } from "@/lib/utils";
import { Purchase } from "@prisma/client";

export type PurchaseDto = {
  id: string;
  userId: string;
  kitId: string;
  createdAt: Date;
};

export type CreatePurchaseDto = {
  userId: string;
  kitId: string;
};

export function toDtoMapper(purchase: Purchase): PurchaseDto {
  return {
    id: purchase.id,
    userId: purchase.userId,
    kitId: purchase.kitId,
    createdAt: purchase.createdAt,
  };
}

export async function getPurchaseByUserAndKit(data: {
  userId: string;
  kitId: string;
}) {
  if (!isValidObjectId(data.userId) || !isValidObjectId(data.kitId))
    throw new ActionError("Invalid ID!");

  const purchase = await db.purchase.findUnique({
    where: { userId_kitId: { userId: data.userId, kitId: data.kitId } },
  });

  if (!purchase) return undefined;

  return toDtoMapper(purchase);
}

export async function createPurchase(data: CreatePurchaseDto) {
  const purchase = await db.purchase.create({
    data: { userId: data.userId, kitId: data.kitId },
  });

  return toDtoMapper(purchase);
}
