"use client";
// src/app/admin/page.jsx
import { useState, useEffect } from "react";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import LoginModal from "../../components/LoginModal";
import Link from "next/link";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("inquiries");
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const authStateListener = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => authStateListener();
  }, []);

  // Fetch contacts function
  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/Inquiries");
      const inquiriesData = await response.json();
      setContacts(inquiriesData);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Fetch subscribers function
  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/api/newsletter");
      const subscriberData = await response.json();
      setSubscribers(subscriberData);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  useEffect(() => {
    if (selectedSection === "inquiries") {
      fetchContacts();
    } else if (selectedSection === "newsletters") {
      fetchSubscribers();
    }
  }, [selectedSection]);

  if (!isAuthenticated) {
    return <LoginModal onClose={() => setIsAuthenticated(true)} />;
  }

  const handleDelete = async (id) => {
    try {
      if (selectedSection === "inquiries") {
        await fetch("/api/Inquiries", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        fetchContacts(); // Refresh the contacts after deletion
        console.log(`Deleted inquiry with ID: ${id}`);
      } else if (selectedSection === "newsletters") {
        await fetch("/api/newsletter", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        fetchSubscribers(); // Refresh the subscribers after deletion
        console.log(`Deleted subscriber with ID: ${id}`);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleMarkAsRead = async (id) => {
    // Implement mark as read functionality
    console.log(`Mark inquiry as read with ID: ${id}`);
  };


  const handleRefresh = async () => {
    if (selectedSection === "inquiries") {
      fetchContacts();
    } else if (selectedSection === "newsletters") {
      fetchSubscribers();
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <ul>
            <li>
              <button
                onClick={() => setSelectedSection("inquiries")}
                className={`w-full text-left py-2 px-4 rounded ${
                  selectedSection === "inquiries"
                    ? "bg-blue-600"
                    : "hover:bg-blue-500"
                }`}
              >
                Inquiries
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("newsletters")}
                className={`w-full text-left py-2 px-4 rounded ${
                  selectedSection === "newsletters"
                    ? "bg-blue-600"
                    : "hover:bg-blue-500"
                }`}
              >
                Newsletters
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">
          {selectedSection === "inquiries" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Inquiries</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`p-4 border rounded shadow-md ${
                      contact.read ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <h2 className="text-lg font-semibold mb-2">
                      <strong>Subject:</strong> {contact.subject}
                    </h2>
                    <p className="mb-2">
                      <strong>Name:</strong> {contact.name}
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong> {contact.email}
                    </p>
                    <p className="mb-2">
                      <strong>Message:</strong>
                    </p>
                    <div className="border p-2 rounded bg-gray-50 mb-4">
                      {contact.message}
                    </div>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    {!contact.read && (
                      <button
                        onClick={() => handleMarkAsRead(contact.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-600">
                      <Link
                        href={`mailto:${contact.email}`}
                        className="text-white no-underline"
                      >
                        Reply
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedSection === "newsletters" && (
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Newsletter Subscribers
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subscribers.map((subscriber) => (
                  <div
                    key={subscriber.id}
                    className="p-4 border rounded shadow-md bg-white"
                  >
                    <p className="mb-2">
                      <strong>Email:</strong> {subscriber.email}
                    </p>
                    <button
                      onClick={() => handleDelete(subscriber.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Unsubscribe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
