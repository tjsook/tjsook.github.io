import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // EmailJS configuration - Get from environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are not configured");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      email: email, // For Reply To field
      message: message,
      to_name: "Tyler",
    };

    // Send email using EmailJS
    // Note: EmailJS.send needs to be called from the client side
    // For server-side, we'll use the EmailJS Node.js SDK or fetch API
    const emailJSResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      }
    );

    if (!emailJSResponse.ok) {
      const errorText = await emailJSResponse.text();
      console.error("EmailJS API Error:", errorText);
      console.error("Status:", emailJSResponse.status);
      throw new Error(`Failed to send email via EmailJS: ${errorText}`);
    }

    return NextResponse.json(
      {
        message: "Email sent successfully!",
        data: { name, email },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
