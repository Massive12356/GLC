// Vercel Serverless Function: POST /api/notify
// Receives an email from the Coming Soon form, sends:
//   1) an admin notification to NOTIFY_TO
//   2) a confirmation email back to the subscriber
//
// Required environment variables (set in Vercel dashboard or .env.local):
//   SMTP_HOST       e.g. smtp.gmail.com
//   SMTP_PORT       e.g. 465  (SSL) or 587 (STARTTLS)
//   SMTP_SECURE     "true" for port 465, "false" for 587
//   SMTP_USER       your Gmail address (the sender)
//   SMTP_PASS       Gmail App Password (16 chars, no spaces)
//   NOTIFY_TO       admin inbox that should receive new sign-ups
//   FROM_NAME       optional display name, default "Generational Life Changers"

import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Basic CORS — same-origin in production, but harmless if you preview elsewhere.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = (req.body || {}) as { email?: string };

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    NOTIFY_TO,
    FROM_NAME = 'Generational Life Changers',
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_TO) {
    return res.status(500).json({
      error:
        'SMTP is not configured on the server. Please contact the site administrator.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 465),
    secure: (SMTP_SECURE ?? 'true').toLowerCase() === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fromHeader = `"${FROM_NAME}" <${SMTP_USER}>`;

  try {
    // 1) Notify the admin
    await transporter.sendMail({
      from: fromHeader,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New launch sign-up: ${email}`,
      text: `A new visitor subscribed to launch updates.\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
      html: `
        <div style="font-family:Montserrat,Arial,sans-serif;color:#462501;">
          <h2 style="margin:0 0 12px 0;">New launch sign-up</h2>
          <p style="margin:0 0 8px 0;">A visitor just subscribed on the Coming Soon page.</p>
          <p style="margin:0 0 4px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 4px 0;"><strong>Time:</strong> ${new Date().toUTCString()}</p>
        </div>
      `,
    });

    // 2) Confirm to the subscriber
    await transporter.sendMail({
      from: fromHeader,
      to: email,
      subject: "You're on the list — Generational Life Changers",
      text: `Thanks for subscribing!

We will email you the moment Generational Life Changers goes live.

— The Generational Life Changers Team`,
      html: `
        <div style="font-family:Montserrat,Arial,sans-serif;background:#fafaf9;padding:24px;color:#462501;">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e7e5e4;">
            <h1 style="margin:0 0 12px 0;font-size:22px;">You&rsquo;re on the list 🎉</h1>
            <p style="margin:0 0 12px 0;line-height:1.6;">
              Thanks for subscribing to launch updates from
              <strong>Generational Life Changers</strong>.
            </p>
            <p style="margin:0 0 12px 0;line-height:1.6;">
              We will email you the moment we go live so you can be among the first to see what we&rsquo;ve been building.
            </p>
            <p style="margin:24px 0 0 0;color:#78716c;font-size:13px;">
              &mdash; The Generational Life Changers Team
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown SMTP error';
    console.error('[/api/notify] SMTP error:', message);
    return res.status(500).json({
      error: 'Could not send the email at this time. Please try again later.',
    });
  }
}
