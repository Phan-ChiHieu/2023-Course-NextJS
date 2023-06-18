import React from "react";

export const metadata = {
  title: "Dashboard Page",
  description: "Dashboard Page",
};

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>LayoutDashboard</h1>
      <section>{children}</section>
    </div>
  );
}
