/* eslint-disable @next/next/no-img-element */
"use client";

import { NetworkStatus, gql, useLazyQuery, useQuery } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";

const query = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

interface Response {
  users: { id: number; name: string; email: string }[];
}

export default function ListUsers() {
  const [count, setCount] = React.useState(0);
  // const { data, error, refetch, networkStatus, loading } = useQuery<Response>(query, {
  //   pollInterval: 100000,
  //   notifyOnNetworkStatusChange: true,
  // });
  const [getData, { data, error, refetch, networkStatus, loading }] = useLazyQuery<Response>(query, {
    pollInterval: 100000,
    notifyOnNetworkStatusChange: true, // Refetching
    fetchPolicy: "network-only", // khong kiem tra bo nho dem
    variables: { id: 1 },
  });
  // const { data, error } = useSuspenseQuery<Response>(query);

  if (networkStatus === NetworkStatus.refetch) return "Refetching!"; // click refetch() lan thu 2 no se hien Refetching!
  if (loading) return "Loading";
  if (error) return `Error! ${error}`;

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <button onClick={() => refetch({ breed: "new_dog_breed" })}>Refetch new breed!</button>
      <button onClick={() => getData({ variables: { id: 1 } })}>Click me!</button>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button onClick={() => setCount((prev) => prev - 1)} style={{ marginInline: 16 }}>
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.users.map((user: any) => (
            <div key={user.id} style={{ border: "1px solid #ccc", textAlign: "center" }}>
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180, margin: "0 auto" }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}

// https://github.com/machadop1407/graphql-full-course/blob/main/client/src/DisplayData.js
