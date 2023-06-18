"use client";

import { useState } from "react";

// This pattern will **not** work!
// You cannot import a Server Component into a Client Component.
import ExampleServerComponent from "../example-server-component/page";

export default function ExampleClientComponent({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      {/*  You cannot import a Server Component into a Client Component. */}
      <ExampleServerComponent />
    </>
  );
}

// ERROR This pattern will **not** work!
