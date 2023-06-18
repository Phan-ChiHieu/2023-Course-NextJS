import React from "react";

interface Params {
  params: {
    name: string;
  };
  searchParams: any;
}

// vidu: http://localhost:3001/generate/Antonette
export default function GeneratePageDetail({ params: { name }, searchParams }: Params) {
  return (
    <div>
      <h1>GeneratePageDetail</h1>
      <h1>With name : {name}</h1>
    </div>
  );
}

// neu khong co generateStaticParams thi moi lan click vao params route se tìm nạp bố cục và layout => tốn thời gian tạo.
// generateStaticParams sẽ loại bỏ các sự trùng lập nếu đối số giống nhau chỉ khác paramss
// generateStaticParams sẽ dc tìm hiểu sâu ở data fectching và advanced
// nếu có generateStaticParams thi khi build nó sẽ là chấm tròn. Nguọc lại nó sẽ làm hình người (lamda)
export async function generateStaticParams() {
  const users: any = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

  return users.map((user: any) => ({
    name: user.username,
  }));
}
