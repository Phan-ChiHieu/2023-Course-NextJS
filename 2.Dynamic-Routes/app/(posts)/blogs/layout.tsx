export const metadata = {
  title: "Blogs Page",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Day la Menu Blogs</h1>
      <div>{children}</div>
    </section>
  );
}
