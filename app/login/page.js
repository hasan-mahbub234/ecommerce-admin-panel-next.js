"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      toast.success("Login successful!");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-row w-full items-center justify-center min-h-screen bg-cyan-500">
      {/* Login form box */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl px-5 py-6 rounded-[10px] w-[400px] max-sm:w-[280px] flex flex-col"
      >
        <h3 className="text-cyan-600 text-[18px] font-[Quicksand] font-semibold text-center mb-4">
          Log in to your account
        </h3>

        <p className="text-[14px] text-gray-500 font-[Poppins] font-medium text-left mb-1">
          Your Email
        </p>
        <input
          placeholder="Enter email"
          type="email"
          required
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          className="w-full border border-gray-400 bg-transparent outline-none px-3 py-2 rounded-[4px]"
        />

        <p className="text-[14px] text-gray-500 font-[Poppins] font-medium text-left mb-1 mt-4">
          Your Password
        </p>

        {/* Password input + eye button */}
        <div className="relative w-full">
          <input
            placeholder="Enter password"
            required
            type={showPassword ? "text" : "password"} // 👈 dynamic type
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            className="w-full border border-gray-400 bg-transparent outline-none px-3 py-2 rounded-[4px] pr-10" // 👈 extra padding for the icon
          />

          {/* Eye toggle button */}
          <div
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <i className="fa-regular fa-eye-slash"></i>
            ) : (
              <i className="fa-regular fa-eye"></i>
            )}
          </div>
        </div>

        {/* Already have account */}
        <div className="flex flex-row items-center justify-center w-full text-gray-500 font-[Quicksand] text-shadow-md my-2 text-[13px] font-[500]">
          <p>No account created yet? </p>
          <p className="ml-[2px]">
            Please{" "}
            <Link href="/signin" className="ml-[2px] text-cyan-500">
              Sign In
            </Link>
            .
          </p>
        </div>

        {/* button */}
        <button
          type="submit"
          className="bg-cyan-700 text-white text-[16px] font-semibold uppercase text-center font-[Poppins] px-5 py-2 shadow-lg rounded-[4px] my-2 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
