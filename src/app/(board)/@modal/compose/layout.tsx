export default function ComposeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children && <div>{children}</div>}</>;
}
