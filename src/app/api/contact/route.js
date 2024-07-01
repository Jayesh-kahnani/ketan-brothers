import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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
