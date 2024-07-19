import { useState } from "react";
import { auth } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setFormData({ email: "", password: "" });
    setConfirmPassword("");
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLogin && formData.password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      } else {
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      }
      onClose(); // Close the modal on successful login or registration
    } catch (error) {
      let errorMessage = "Failed to ";
      if (isLogin) {
        errorMessage += "login. Please check your credentials.";
      } else {
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use.";
        } else if (error.code === "auth/too-many-requests") {
          errorMessage = "Too many attempts. Please try again later.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "Password should be at least 6 characters.";
        } else {
          errorMessage += "register. Please check your credentials.";
        }
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Admin Login" : "Admin Register"}
        </h2>
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
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
          onClick={toggleForm}
          className="mt-4 w-full text-blue-500 hover:underline"
        >
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
