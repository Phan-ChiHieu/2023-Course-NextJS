import React from "react";

export const metadata = {
  title: "Auth Page",
  description: "Auth Page",
};

export default function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>LayoutAuth</h1>
      <section>{children}</section>
    </div>
  );
}
