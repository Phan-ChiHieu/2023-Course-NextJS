export const metadata = {
  title: "Posts Page",
};

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Day la Menu Posts</h1>
      <div>{children}</div>
    </section>
  );
}
