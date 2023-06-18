export default async function getAllUser() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!result) throw new Error("failed to fetch data");

  return result.json();
}
