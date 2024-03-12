import { useContext, useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "./SettingsModal";
import { ThemeContext } from "../Contexts/ThemeContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    bgColor: theme === "light" ? "bg-gray-400" : "bg-blue-500",
    translate: theme === "light" ? "translate-x-0" : "translate-x-4",
  });

  const updateStyles = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setStyles((prevStyles) => ({
      ...prevStyles,
      bgColor:
        prevStyles.bgColor === "bg-blue-500" ? "bg-gray-400" : "bg-blue-500",
      translate:
        prevStyles.translate === "translate-x-4"
          ? "translate-x-0"
          : "translate-x-4",
    }));
  };

  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <div className="flex items-center">
        <h2 className="text-black dark:text-white dark:font-semibold">
          B-Core platform
        </h2>
      </div>
      <div className="flex items-center">
        <h2 className="text-black dark:text-white dark:font-semibold">
          Welcome back, user
        </h2>
        <IoSettingsOutline
          className="ml-2 hover:cursor-pointer text-black dark:text-white dark:font-bold"
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
                className={`cursor-pointer relative ${styles.bgColor} rounded-full w-8 h-4 transition`}
                onClick={(e) => {
                  e.stopPropagation();
                  updateStyles();
                }}
              >
                <div
                  className={`absolute ${styles.translate} left-0 bg-white w-4 h-4 rounded-full shadow-md transition transform duration-300 ease-in-out`}
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
