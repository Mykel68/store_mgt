import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked 'async' if using await inside
export function middleware(request: NextRequest) {
  //   const path = request.nextUrl.pathname;
  //   const isPublicPath = path == "/login" || path === "/";
  //   const token = request.cookies.get("token")?.value || "";
  //   if (isPublicPath && token) {
  //     return NextResponse.redirect(new URL("/admin", request.nextUrl));
  //   }
  //   if (!isPublicPath && !token) {
  //     return NextResponse.redirect(new URL("/login", request.nextUrl));
  //   }
}

//Protected routes

// export const config = {
//   matcher: ["/admin/*", "/login"],
// };
