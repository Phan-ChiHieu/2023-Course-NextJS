import Image from "next/image";

// This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.
import ExampleClientComponent from "./example-error-client-component/page";
import ExampleServerComponent from "./example-server-component/page";

// Pages in Next.js are Server Components by default
export default function Home() {
  return (
    <>
      <ExampleClientComponent>
        <ExampleServerComponent />
      </ExampleClientComponent>
    </>
  );
}

//  Với cách tiếp cận này, kết xuất của <ExampleClientComponent>và <ExampleServerComponent>được tách rời và có thể được kết xuất độc lập - căn chỉnh với Thành phần máy chủ, được kết xuất trên máy chủ trước Thành phần máy khách.
