"use server";

import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";
import db from "@/db";

export async function deleteUserAction() {
  const { user } = await validateRequest();

  if (!user) return { error: "Unauthorized!" };

  await db.user.delete({ where: { id: user.id } });

  return redirect("/");
}
