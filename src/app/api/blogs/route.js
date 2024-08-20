// src/app/api/blogs/route.js
import { NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function POST(req) {
  const { title, blogContent } = await req.json();

  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      blogContent,
    });

    return NextResponse.json({
      id: docRef.id,
      message: "Published successfully!",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(blogs);
  } catch (e) {
    console.error("Error fetching documents: ", e);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
