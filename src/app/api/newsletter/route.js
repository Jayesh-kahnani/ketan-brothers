// src/app/api/newsletter/route.js

import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export async function POST(req) {
  const { email } = await req.json();

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

export async function GET() {
  try {
    const subscribersCol = collection(db, "subscribers");
    const subscribersSnapshot = await getDocs(subscribersCol);
    const subscribersList = subscribersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(subscribersList);
  } catch (e) {
    console.error("Error fetching documents: ", e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const { id } = await req.json(); // Extract the ID from the request body

  try {
    await deleteDoc(doc(db, "subscribers", id));
    return NextResponse.json({ message: "Deleted successfully!" });
  } catch (e) {
    console.error("Error deleting documents: ", e);
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
