// src/app/api/Inquiries/route.js
import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

export async function GET() {
  try {
    const contactsCol = collection(db, "contacts");
    const contactsSnapshot = await getDocs(contactsCol);
    const contactsList = contactsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(contactsList);
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
    await deleteDoc(doc(db, "contacts", id));
    return NextResponse.json({ message: "Deleted successfully!" });
  } catch (e) {
    console.error("Error deleting documents: ", e);
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
