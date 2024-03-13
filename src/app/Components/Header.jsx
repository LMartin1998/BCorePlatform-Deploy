import { useContext, useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "./SettingsModal";
import { ThemeContext } from "../Contexts/ThemeContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    bgColor: theme === "light" ? "bg-gray-400" : "bg-blue-500",
    translate: theme === "light" ? "translate-x-0" : "translate-x-4",
  });

  const updateStyles = () => {
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
              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <button
                    id="menu-button"
                    className={`flex items-center text-gray-700 rounded-lg ml-1 ${
                      open
                        ? "bg-slate-400 text-white dark:bg-blue-800 dark:text-white"
                        : "hover:bg-slate-400 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-800 dark:text-white"
                    } py-1 px-3`}
                    type="text"
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDrop((prevOpen) => !prevOpen);
                    }}
                  ></button>
                  {openDrop && (
                    <div
                      className="absolute left-0 z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                          role="menuitem"
                          tabIndex="-1"
                          id="0"
                          onClick={(e) => {
                            e.stopPropagation();
                            updateTheme(e.target.id);
                            setOpenDrop(false);
                          }}
                        >
                          Automatic
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                          role="menuitem"
                          tabIndex="-1"
                          id="1"
                          onClick={(e) => {
                            e.stopPropagation();
                            updateTheme(e.target.id);
                            setOpenDrop(false);
                          }}
                        >
                          Dark mode
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                          role="menuitem"
                          tabIndex="-1"
                          id="2"
                          onClick={(e) => {
                            e.stopPropagation();
                            updateTheme(e.target.id);
                            setOpenDrop(false);
                          }}
                        >
                          Light mode
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
              className="flex w-1/3 py-1 items-center justify-center self-center rounded-lg bg-blue-500 text-white dark:text-black"
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
