import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request: Request) {
  return new Response("hi");
}

export async function POST(request: NextRequest) {
  cookies().set("cookie", "edricphan");
  const body = await request.json();
  const _cookie = request.cookies.get("cookie");
  //   console.log(_cookie); // => { name: 'cookie', value: 'myCookies' }
  const _header = request.headers.get("Authorization");
  console.log("Authorization", _header); // Authorization 123456789
  const cookieStore = cookies();
  const token = cookieStore.get("cookie");
  console.log("token >>>>", token); // => token >>>> { name: 'cookie', value: 'myCookies', path: '/' }

  return NextResponse.json({ body });
}
