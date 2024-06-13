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
