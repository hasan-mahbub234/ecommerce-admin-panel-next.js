"use client";
import { BASE_LOCAL_URL } from "@/functions/apiService";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import React, { use, useState } from "react";
import Link from "next/link";
//import { Link } from "react-scroll";

function SignIn() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    invitation_code: "",
  });
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const signup = async () => {
    const formData = new FormData();
    formData.append("fullname", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("invitation_code", user.invitation_code);
    try {
      const response = await axios.post(
        `${BASE_LOCAL_URL}/auth/admin/signup`,
        formData
      );
      console.log(response.status);
      if (response.status === 201) {
        toast.success("Signup successful!");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row w-full items-center justify-center min-h-screen bg-cyan-500">
      {/* Login form box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}
        className="bg-white shadow-xl px-5 py-6 rounded-[10px] w-[400px] max-sm:w-[280px] flex flex-col"
      >
        <h3 className="text-cyan-600 text-[18px] font-[Quicksand] font-semibold text-center mb-4">
          Sign up your account
        </h3>

        <p className="text-[14px] text-gray-500 font-[Poppins] font-medium text-left mb-1">
          Your Name
        </p>
        <input
          placeholder="Enter Name"
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          className="w-full border border-gray-400 bg-transparent outline-none px-3 py-2 rounded-[4px]"
        />

        <p className="text-[14px] text-gray-500 font-[Poppins] font-medium text-left mb-1 mt-4">
          Your Email
        </p>
        <input
          placeholder="Enter email"
          type="email"
          value={user.email}
          required
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
            type={showPassword ? "text" : "password"} // 👈 dynamic type
            value={user.password}
            required
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
          {/* Invitation Code */}
          <p className="text-[14px] text-gray-500 font-[Poppins] font-medium text-left mb-1 mt-4">
            Invitation Code
          </p>
          <input
            placeholder="Enter invitation_code"
            type="invitation_code"
            value={user.invitation_code}
            required
            onChange={(e) =>
              setUser((prev) => ({ ...prev, invitation_code: e.target.value }))
            }
            className="w-full border border-gray-400 bg-transparent outline-none px-3 py-2 rounded-[4px]"
          />
        </div>

        {/* Already have account */}
        <div className="flex flex-row items-center justify-center w-full text-gray-500 font-[Quicksand] text-shadow-md my-2 text-[13px] font-[500]">
          <p>Already have an account? </p>
          <p className="ml-[2px]">
            Please{" "}
            <Link href="/login" className="ml-[2px] text-cyan-500">
              Login
            </Link>
            .
          </p>
        </div>

        {/* button */}
        <button
          type="submit"
          className="bg-cyan-700 text-white text-[16px] font-semibold uppercase text-center font-[Poppins] px-5 py-2 shadow-lg rounded-[4px] my-2 cursor-pointer"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignIn;
