import db from "@/db";
import { Purchase } from "@prisma/client";

export type PurchaseDto = {
  id: string;
  userId: string;
  repoId: string;
  createdAt: Date;
};

export type CreatePurchaseDto = {
  userId: string;
  repoId: string;
};

export function toDtoMapper(purchase: Purchase): PurchaseDto {
  return {
    id: purchase.id,
    userId: purchase.userId,
    repoId: purchase.repoId,
    createdAt: purchase.createdAt,
  };
}

export async function getPurchaseByUserAndRepo(data: {
  userId: string;
  repoId: string;
}) {
  const purchase = await db.purchase.findUnique({
    where: { userId_repoId: { userId: data.userId, repoId: data.repoId } },
  });

  if (!purchase) return undefined;

  return toDtoMapper(purchase);
}

export async function createPurchase(data: CreatePurchaseDto) {
  const purchase = await db.purchase.create({
    data: { userId: data.userId, repoId: data.repoId },
  });

  return toDtoMapper(purchase);
}
