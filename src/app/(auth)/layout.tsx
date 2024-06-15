export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid h-screen place-items-center">{children}</div>;
}
