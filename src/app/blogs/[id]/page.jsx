// src/app/blogs/[id]/page.jsx
"use client"
import { getDocument } from "@/app/api/blog/route";
import "../tailwind.css";


export default async function Page({ params }) {
  const data = await getDocument("blogs", params.id);

  return (
    <div className="bg-beige min-h-screen flex justify-center items-start p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-darkbrown mb-4">
          {data.title || "Untitled Blog"}
        </h1>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: data.blogContent }}
        />
      </div>
    </div>
  );
}
