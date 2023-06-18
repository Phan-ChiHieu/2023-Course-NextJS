export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>PrivateLayout</h1>
      <section>{children}</section>
    </div>
  );
}
