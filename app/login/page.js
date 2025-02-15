"use client"; // Required for client-side rendering

import React, { useState } from "react";
import { signIn } from "next-auth/react";

function Login() {
  const [email, setEmail] = useState("user@manageinventory.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      setLoading(false);
      window.location.href = "/"; // Redirect after successful login
    }
  };

  return (
    <div className="bg-[#4b03a3] h-screen w-screen flex flex-col justify-center items-center gap-5 ">
      <h1 className="font-bold text-3xl text-white mb-3">Log in to Your Account</h1>

      <div>
        <h1 className="text-white mb-2 text-lg font-semibold">Email</h1>
        <input
          type="email"
          placeholder="Insert email"
          className=" w-72 lg:w-96 px-5 lg:px-3 py-5 lg:py-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-white mb-2 text-lg font-semibold">Password</h1>
        <input
          type="password"
          placeholder="Insert password"
          className="w-72 lg:w-96 px-5 lg:px-3 py-5 lg:py-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && (
        <p className="text-red-500 bg-white px-3 py-2 rounded-lg">{error}</p>
      )}
      
      <button
        className="bg-white text-[#4b03a3] w-72 lg:w-96 py-3 font-bold rounded-xl mt-5 lg:mt-10"
        onClick={handleLogin}
      >
        {loading?"Loading":"Login"}
      </button>
    </div>
  );
}

export default Login;
