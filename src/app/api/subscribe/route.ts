import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ success: false, error: "Email required" }, { status: 400 });

    // Check if we are in build time to avoid initialization errors
    if (process.env.NEXT_PHASE === 'phase-production-build') {
       return NextResponse.json({ success: true, message: "Build mode standby" });
    }

    const subscriber = await db.subscriber.upsert({
      where: { email },
      update: { subscribed: true },
      create: { email, subscribed: true }
    });

    console.log("Subscribed:", email);
    return NextResponse.json({ success: true, message: "Welcome onboard!" });
  } catch (error) {
     console.error("Subscription Error:", error);
     return NextResponse.json({ success: false, error: "System Busy" }, { status: 500 });
  }
}
