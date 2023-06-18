export default async function getAllPosts() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!result) throw new Error("failed to fetch data");

  return result.json();
}
