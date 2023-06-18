export const metadata = {
  title: "Generate Page",
};

export default function GenerateLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Day la Menu Generate</h1>
      <div>{children}</div>
    </section>
  );
}
