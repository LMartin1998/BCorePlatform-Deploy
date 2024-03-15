"use client";

import styles from "@/app/styles/Login.module.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { ThemeContext } from "../contexts/ThemeContext";

{
  /* <button className="mt-20 bg-white" onClick={updateLogged}>Submit</button> */
}

export default function Login() {
  const { updateLogged } = useContext(UserContext);
  const { setActive } = useContext(SidebarContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setActive("0");
  }, []);

  return (
    <div className={styles.wrapper_main}>
      <div className="bg-white dark:bg-black p-8 rounded shadow-md max-w-xl h-full w-full flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mb-6 -mt-40">
          <img
            src="/Assets/bcore.png"
            alt="Logo Empresa"
            className="w-28 h-28 object-contain dark:rounded-lg dark:bg-white"
          />
          <h1 className="text-2xl font-semibold dark:text-white dark:font-bold">
            Welcome Back
          </h1>
          <h5 className="text-sm text-gray-400 dark:text-white dark:font-bold">
            Enter your email and password to access your account
          </h5>
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600  text-sm  font-medium mb-2 dark:text-white dark:font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 rounded-md py-2 px-3 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2 dark:text-white dark:font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 rounded-md py-2 px-3 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder:text-white dark:placeholder:text-slate-400"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 text-sm dark:text-white dark:font-medium"
            >
              Remember me
            </label>
          </div>

          <button
            className="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 dark:hover:ring dark:hover:ring-blue-500 dark:bg-blue-900"
            onClick={updateLogged}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
