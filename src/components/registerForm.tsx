"use client";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import bcrypt from "bcryptjs";

interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password || !avatar) {
      setError("All fields are necessary.");
      return;
    } else {
      e.currentTarget.reset();
      setError("");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

     const userInfo = {
      username: name,
      email: email,
      avatarUrl: avatar,
      password: hashedPassword,
    };


    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { User } = await resUserExists.json();
      

      if (User[0]?.email === email) {
        setError("User already exists.");
        return;
      }
    
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error: any) {
      console.log("Error during registration: ", error);
    }

   
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />

          <input
            onChange={(e) => setAvatar(e.target.value)}
            id="picture"
            placeholder="Avatar Link"
            type="text"
            className="cursor-pointer"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
