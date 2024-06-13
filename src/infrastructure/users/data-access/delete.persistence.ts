import "server-only";

import db from "@/db";

export async function deleteUser(data: { id: string }) {
  await db.user.delete({ where: { id: data.id } });
}
