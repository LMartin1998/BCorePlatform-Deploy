"use client";

import styles from "@/app/styles/Login.module.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

{
  /* <button className="mt-20 bg-white" onClick={updateLogged}>Submit</button> */
}

export default function Login() {
  const { updateLogged } = useContext(UserContext);

  return (
    <div className={styles.wrapper_main}>
      <div className="bg-white  p-8 rounded shadow-md max-w-xl h-full w-full flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mb-6 -mt-40">
          <img
            src="/Assets/bcore.png"
            alt="Logo Empresa"
            className="w-28 h-28 object-contain"
          />
          <h1 className="text-2xl font-semibold">
            Welcome Back
          </h1>
          <h5 className="text-sm text-gray-400">Enter your email and password to access your account</h5>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600  text-sm  font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-600 text-sm">
              Remember me
            </label>
          </div>

          <button
            className="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={updateLogged}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
