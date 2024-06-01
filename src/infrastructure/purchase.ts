import db from "@/db";

export async function getPurchaseByUserAndRepo(data: {
  userId: string;
  repoId: string;
}) {
  const purchase = await db.purchase.findUnique({
    where: { userId_repoId: { userId: data.userId, repoId: data.repoId } },
  });
  return purchase;
}

export async function getPurchasesByUser(data: { userId: string }) {
  const purchases = await db.purchase.findMany({
    where: { userId: data.userId },
    include: { repo: true },
  });
  return purchases;
}

export async function createPurchase(data: { userId: string; repoId: string }) {
  const purchase = await db.purchase.create({
    data: { userId: data.userId, repoId: data.repoId },
  });

  return purchase;
}
