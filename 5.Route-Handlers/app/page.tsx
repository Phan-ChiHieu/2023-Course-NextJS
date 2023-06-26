"use client";

export default function Home() {
  const makeCallApi = async () => {
    await fetch("api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    });
  };

  return <button onClick={makeCallApi}>make call</button>;
}
