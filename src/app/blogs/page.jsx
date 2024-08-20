"use client"
// src/app/blogs/page.jsx
import { useState, useEffect } from "react";
import "./tailwind.css"

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  // Fetch all documents from the "blogs" collection 
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-beige py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-darkbrown mb-10">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-brown rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-darkbrown mb-4">
                  {blog.title || "Untitled Blog"}
                </h2>
                <p className="text-gray-700 mb-6">
                  {blog.blogContent.length > 120
                    ? `${blog.blogContent.slice(0, 120)}...`
                    : blog.blogContent}
                </p>
                <a
                  href={`/blogs/${blog.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
