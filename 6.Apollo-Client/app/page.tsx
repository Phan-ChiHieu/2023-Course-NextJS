import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`
  query Now {
    now(id: "1")
  }
`;
//           👇
export const revalidate = 5;

export default async function Home() {
  const { data } = await getClient().query({ query });

  // Neu khong cos function export revalidate nhu line 11 thi viet nhu code phia duoi
  //           👇
  // const { data } = await getClient().query({
  //   query,
  //   context: {
  //     fetchOptions: {
  //       next: { revalidate: 5 },
  //     },
  //   },
  // });
  return <main>{data.now}</main>;
}
