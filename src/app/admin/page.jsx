"use client"
//src/app/admin/page.jsx
import { useState, useEffect } from "react";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import LoginModal from "../../components/LoginModal"

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStateListener = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => authStateListener();
  }, []);

  if (!isAuthenticated) {
    return <LoginModal onClose={() => setIsAuthenticated(true)} />;
  }

  return <div>admin page content here</div>;
}


