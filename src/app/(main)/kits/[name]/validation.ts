import { z } from "zod";

export const purchaseSchema = z.object({
  repoName: z.string(),
});
