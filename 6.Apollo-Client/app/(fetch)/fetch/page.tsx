import React from "react";

export default async function FetchPage() {
  const data = await fetch("https://main--time-pav6zq.apollographos.net/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: '{ now(id: "1") }',
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 }, // sau moi 10s se timnap du lieu moi
  }).then((res) => res.json());

  console.log("data", data);

  return <main>{data.data.now}</main>;
}
