import { validateRequest } from "@/lib/auth";

export async function UserInfo() {
  const { user } = await validateRequest();

  return (
    <>
      <UserItem title="ID" value={user?.id} />
      <UserItem title="Username" value={user?.username ?? "None"} />
      <UserItem title="Email" value={user?.email ?? "None"} />
      <UserItem title="Github ID" value={user?.githubId} />
    </>
  );
}

function UserItem({
  title,
  value,
}: {
  title: string;
  value?: string | number;
}) {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <p className="text-sm font-medium">{title}</p>
      <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-muted rounded-md">
        {value}
      </p>
    </div>
  );
}
