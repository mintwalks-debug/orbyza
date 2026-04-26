import { NextRequest, NextResponse } from "next/server";

export function ipBlockingMiddleware(req: NextRequest) {
  // Mock logic: check real implementation later
  return NextResponse.next();
}

export function rateLimitingMiddleware(req: NextRequest) {
  // Mock logic: implement with rate-limiter-flexible later
  return NextResponse.next();
}
