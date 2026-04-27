import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, service, message } = data;

    // Avoid DB calls during build
    if (process.env.NEXT_PHASE === 'phase-production-build') {
       return NextResponse.json({ success: true, message: "Build mode standby" });
    }

    // 1. Store in DB using Supabase
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          message: message || "No message provided.",
          service_interested: service || "General Inquiry",
        }
      ]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      // We continue to email even if DB fails, or handle as needed
    }

    // 2. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Dispatch Email to Admin
    await transporter.sendMail({
      from: `"Orbyza Growth System" <${process.env.SMTP_USER}>`,
      to: "growth@orbyza.com", // Your receiver email
      subject: `New Growth Inquiry: ${service} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0C4A6E;">
          <h2 style="color: #0EA5E9; border-bottom: 2px solid #0EA5E9; padding-bottom: 10px;">New Intelligence Brief Received</h2>
          <p><strong>Identifier:</strong> ${name}</p>
          <p><strong>Transmission Node:</strong> ${email}</p>
          <p><strong>Operation Objective:</strong> ${service}</p>
          <div style="background: #F0F9FF; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <p><strong>Intelligence Brief:</strong></p>
            <p>${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 10px; color: #0EA5E9;">SYSTEM STATUS: HIGH VELOCITY GROWTH INITIATED</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Error sending message." }, { status: 500 });
  }
}
