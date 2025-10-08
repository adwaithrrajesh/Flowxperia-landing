import nodemailer from "nodemailer";

export const runtime = "nodejs"; 

export async function POST(req: Request) {
  try {
    const { email, subject, message, name, phone, budget } = await req.json();

    if (!email || !subject || !message || !name) {
      return Response.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OTP_EMAIL,
        pass: process.env.OTP_PASSWORD,
      },
    });

    // ✅ Professional HTML email template
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Submission</title>
        <style>
          :root {
            --brand: #06b6d4;
            --text: #111827;
            --bg: #f9fafb;
            --border: #e5e7eb;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #0b0f14;
              --text: #f9fafb;
              --border: #1f2937;
            }
          }
          body {
            margin: 0;
            background: var(--bg);
            font-family: "Inter", sans-serif;
            color: var(--text);
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            overflow: hidden;
          }
          .header {
            background: var(--brand);
            padding: 24px;
            color: white;
            text-align: center;
            font-size: 22px;
            font-weight: 600;
          }
          .body {
            padding: 30px;
          }
          .info-table {
            width: 100%;
            border-collapse: collapse;
          }
          .info-table td {
            padding: 10px 0;
            border-bottom: 1px solid var(--border);
            vertical-align: top;
          }
          .info-table td:first-child {
            font-weight: 600;
            width: 25%;
          }
          .message {
            margin-top: 20px;
            font-size: 15px;
            line-height: 1.6;
            white-space: pre-wrap;
          }
          .footer {
            background: var(--bg);
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
          }
          a { color: var(--brand); text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">New Contact Form Submission</div>
          <div class="body">
            <p>You’ve received a new message from your website contact form.</p>
            <table class="info-table">
              <tr><td>Name:</td><td>${name}</td></tr>
              <tr><td>Email:</td><td>${email}</td></tr>
              <tr><td>Phone:</td><td>${phone || "Not provided"}</td></tr>
              <tr><td>Budget:</td><td>${budget}</td></tr>
            </table>
            <div class="message">
              <h4 style="color: var(--brand); margin-bottom: 8px;">Message:</h4>
              <p>${message}</p>
            </div>
          </div>
          <div class="footer">
            This message was sent via your website’s contact form.<br />
            Reply directly to <a href="mailto:${email}">${email}</a> to respond.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.OTP_EMAIL,
      to: process.env.RECIEVER_EMAIL,
      subject,
      html: emailHtml,
      replyTo: email,
    });

    return Response.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
