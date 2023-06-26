import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
  //   const origin = request.headers.get("origin");

  //   const res = await fetch(DATA_SOURCE_URL);

  //   const todos: [] = await res.json();

  //   return new NextResponse(JSON.stringify(todos), {
  //     headers: {
  //       "Access-Control-Allow-Origin": origin || "*",
  //       "Content-Type": "text/plain",
  //     },
  //   });

  const res = await fetch(DATA_SOURCE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
