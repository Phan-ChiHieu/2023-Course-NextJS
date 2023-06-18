import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(">>>>>>>>>>>>>>", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/private")) {
    // Khi vao URL nao maf chua dang nhap thi redirect ve login, logout
    return NextResponse.redirect(new URL("/logout", request.url));
  }

  // mac dinh tra ve page nao neu project khong co landing page
  return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/private"],
};
