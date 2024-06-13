import { z } from "zod";

export const purchaseSchema = z.object({
  kitId: z.string(),
});
