import { z } from "zod";

export const purchaseSchema = z.object({
  kitName: z.string(),
});
