import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("Logging in")

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters.");
      setStatus("")
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      onClose();
    } catch (error) {
      let errorMessage = "Failed to login. Please check your credentials.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No user found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many attempts. Please try again later.";
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Password"
              required
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={status === "Logging in"}
          >
            {status == "logging in" ? "logging in" : "login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
