// src/app/api/newsletter/route.js

import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  const email = await req.json();

  try {
    const docRef = await addDoc(collection(db, "subscribers"), {
      email,
    });

    return NextResponse.json({
      id: docRef.id,
      message: "Subscribed successfully!",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
