import nodemailer from 'nodemailer';

export async function POST(req) {
  const formData = await req.formData();

  const company = formData.get('company');
  const email = formData.get('email');
  const businessType = formData.get('business_type') || 'N/A';
  const message = formData.get('message');

  if (!company || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Business Inquiry" <${process.env.EMAIL_USER}>`,
      to: 'saineeglobal@gmail.com',
      subject: `New Business Inquiry from ${company}`,
      html: `
        <h2>Business Inquiry</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: 'Inquiry sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending business inquiry email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
