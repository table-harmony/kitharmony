import "server-only";

import db from "@/db";

import { Purchase } from "@prisma/client";
import { PurchaseDto } from "../types";

export function toDtoMapper(purchase: Purchase): PurchaseDto {
  return {
    id: purchase.id,
    userId: purchase.userId,
    kitId: purchase.kitId,
    createdAt: purchase.createdAt,
  };
}

export async function getPurchase(data: { userId: string; kitId: string }) {
  const purchase = await db.purchase.findUnique({
    where: { userId_kitId: { userId: data.userId, kitId: data.kitId } },
  });

  if (!purchase) return undefined;

  return toDtoMapper(purchase);
}

export async function getUserPurchases(data: { userId: string }) {
  const purchases = await db.purchase.findMany({
    where: data,
    include: { kit: true },
  });

  return purchases;
}
