"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_LOCAL_URL } from "@/functions/apiService";

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalModal, setGlobalModal] = useState({
    show: false,
    message: "",
  });
  const router = useRouter();

  // Check if token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
    } catch (e) {
      return true;
    }
  };

  // Set up axios interceptor
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          logout();
          toast.error("Session expired. Please login again.");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [router]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      if (isTokenExpired(storedToken)) {
        logout();
      } else {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);

        // Set the token in axios headers
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${storedToken}`;
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(
        `${BASE_LOCAL_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const userData = response.data.user;
        const token = response.data.access_token;

        setUser(userData);
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));

        // Set the token in axios headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        toast.success("Login successful!");
        router.push("/");
      }
    } catch (err) {
      console.error("Login failed", err);
      throw new Error("Something went wrong, please try again.");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Remove the token from axios headers
    delete axios.defaults.headers.common["Authorization"];

    // Redirect to login page
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
        globalModal,
        setGlobalModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
