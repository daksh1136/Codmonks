import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create reusable transporter object using Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.GMAIL_USER,
        subject: 'New Contact Form Submission',
        text: `Message: ${message}\nPhone: ${phone}\nFrom: ${name} (${email})`,
        html: `<p>Message: ${message}</p><p>Phone: ${phone}</p><p>From: ${name} (${email})</p>`,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
