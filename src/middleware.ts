import { NextRequest, NextResponse } from "next/server";
import { ipBlockingMiddleware, rateLimitingMiddleware } from "@/lib/security/firewall";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Security Headers & Firewall Checks
  const response = NextResponse.next();

  // Add Security Headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Run Firewall Checks (Mocks)
  ipBlockingMiddleware(request);
  rateLimitingMiddleware(request);

  return response;
}

export const config = {
  // Use the broader matcher from middleware.ts
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf)).*)'],
};
