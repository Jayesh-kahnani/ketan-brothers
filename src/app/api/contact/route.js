// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { transporter } from "@/utils/mailSender.utils";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    console.log("Received contact form data:", {
      name,
      email,
      subject,
      message,
    });

    // Add document to Firestore
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
    });
    console.log("Document added to Firestore with ID:", docRef.id);

    // Create the response to send back immediately
    const response = NextResponse.json({
      message: "Message received and being processed!",
    });

    // Send the email in the background
    transporter
      .sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: "New contact form submission",
        text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        html: `
        <div style="margin: 10px; padding: 20px; border-radius: 5px; border: 1px solid #ddd; font-family: Arial, sans-serif;">
          <h2 style="color: #333;">You have a new contact form submission:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div>
            ${message}
          </div>
        </div>
      `,
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        // Optional: Log error or notify admin
      });

    return response;
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
