import { deleteUser } from "../data-access";

export async function deleteUserUseCase(data: { id: string }) {
  await deleteUser(data);
}
