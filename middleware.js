import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const isPublicPath = ["/login"].includes(path);

  // Get the token from cookies
  const token = request.cookies.get("next-auth.session-token")?.value;

  // If user is authenticated and trying to access a public path, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // If user is not authenticated and trying to access a private path, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the paths this middleware applies to
export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"], // Exclude paths like _next, static files, and API
};
