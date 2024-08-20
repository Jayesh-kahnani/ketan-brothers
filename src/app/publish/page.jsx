"use client";
import { useState, useEffect } from "react";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import LoginModal from "../../components/LoginModal";
import TipTap from "@/components/TipTap";
import "./styles.css";

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

  return (
    <div>
      <TipTap />
    </div>
  );
}
