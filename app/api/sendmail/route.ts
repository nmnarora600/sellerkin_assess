import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: Request, res: NextResponse) {
  try {
    let x = await req.json();
    const {   email, name } = await x; // Use req.body instead of req.json()

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 587,
      secure: false,
      auth: {
        user: "k1vikky@gmail.com",
        pass: process.env.NODE_PASS,
      },
    });

    const mailOptions = {
      from: "k1vikky@gmail.com",
      to: email,
      subject: "You have been Successfully Subscribed",
      html: `<div>
      <p>Congratulations ${name.split(" ")[0]},<br><br> you have been successfully subscribed with credentials,<br><br> Email id: ${email}<br>Name: ${name}.
       </p> <br>
      <br>
      Regards,
      <br>
      Naman Arora
        </div>`,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: `Email sent successfully to: ${name}`
    });
  
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Email sending failed" });
  }
}

export async function GET(req: Request, res: NextResponse) {
  return NextResponse.json({ error: "Method not allowed" });
}