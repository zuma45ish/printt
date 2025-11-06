// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import type { ContactPayload } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Простая валидация (можно вынести в lib/validators)
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
    }

    // Use Resend to send email server-side (no SMTP required)
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY || '');

    const from = process.env.RESEND_FROM_EMAIL || `no-reply@${process.env.NEXT_PUBLIC_VERCEL_URL || 'example.com'}`;
    const to = process.env.TO_EMAIL || 'george.zummar.z@gmail.com';

    const subject = `Новое сообщение с сайта от ${body.name}`;
    const text = `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || '—'}\n\n${body.message}`;
    const html = `<p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Phone:</strong> ${body.phone || '—'}</p>
                <p><strong>Message:</strong></p>
                <p>${body.message.replace(/\n/g, '<br/>')}</p>`;

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
  console.error('Contact POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
