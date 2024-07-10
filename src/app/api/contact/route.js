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

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "New contact form submission",
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <div style="margin: 10px; padding: 20px; border-radius: 5px; border: 1px solid #ddd; font-family: Arial, sans-serif; ;">
          <h2 style="color: #333; ">You have a new contact form submission:</h2>
          <p style=""><strong>Name:</strong> ${name}</p>
          <p style=""><strong>Email:</strong> ${email}</p>
          <p style=""><strong>Subject:</strong> ${subject}</p>
          <p style=""><strong>Message:</strong></p>
          <div style="">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      id: docRef.id,
      message: "Message sent successfully!",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
