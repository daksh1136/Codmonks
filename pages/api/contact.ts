import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character] || character));

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ message: string }>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body as Record<string, unknown>;

  if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string' || typeof message !== 'string' || !name || !email || !message || !/^\S+@\S+\.\S+$/.test(email) || [name, email, phone, message].some(value => value.length > 5000)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create reusable transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        replyTo: email,
        to: process.env.GMAIL_USER,
        subject: 'New Contact Form Submission',
        text: `Message: ${message}\nPhone: ${phone}\nFrom: ${name} (${email})`,
        html: `<p>Message: ${escapeHtml(message)}</p><p>Phone: ${escapeHtml(phone)}</p><p>From: ${escapeHtml(name)} (${escapeHtml(email)})</p>`,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
