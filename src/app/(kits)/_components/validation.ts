import { z } from "zod";

export const purchaseSchema = z.object({
  repoId: z.string(),
});
