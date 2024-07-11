// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { transporter } from "@/utils/mailSender.utils";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
    });

    // Respond to the client immediately after Firestore write
    const response = NextResponse.json({
      id: docRef.id,
      message: "Message sent successfully!",
    });

    // Send the email in the background
    transporter
      .sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: "New contact form submission",
        text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="color: #333;">You have a new contact form submission:</h2>
          <p style="margin: 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin: 0;"><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
            ${message}
          </div>
        </div>
      `,
      })
      .catch((err) => console.error("Error sending email: ", err));

    return response;
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
