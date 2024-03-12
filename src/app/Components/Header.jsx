import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "./SettingsModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <div className="flex items-center">
        <h2>B-Core platform</h2>
      </div>
      <div className="flex items-center">
        <h2>Welcome back, user</h2>
        <IoSettingsOutline
          className="ml-2 hover:cursor-pointer"
          size={20}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        ></IoSettingsOutline>
      </div>
      {open && (
        <SettingsModal onClose={() => {}}>
          <div className="flex flex-col w-full h-5/6">
            <div className="flex items-center justify-between mt-4 m-2">
              <p>Toggle theme</p>
              <div
                className={`cursor-pointer relative ${theme === "light" ? "bg-blue-500" : "bg-gray-400"} rounded-full w-8 h-4 transition`}
                onClick={(e) => {
                  e.stopPropagation();
                  setTheme((prevTheme) =>
                    prevTheme === "light" ? "dark" : "light",
                  );
                }}
              >
                <div
                  className={`absolute ${theme === "light" ? "translate-x-4" : "translate-x-0"} left-0 bg-white w-4 h-4 rounded-full shadow-md transition transform duration-300 ease-in-out`}
                />
              </div>
            </div>
            <button
              className="flex w-1/3 py-1 items-center justify-center self-center rounded-lg bg-blue-500 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </SettingsModal>
      )}
    </div>
  );
};

export default Header;
