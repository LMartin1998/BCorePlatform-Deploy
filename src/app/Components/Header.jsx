import { useContext, useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "./SettingsModal";
import { ThemeContext } from "../contexts/ThemeContext";
import UserOptions from "./user/UserOptions";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
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
          <UserOptions setOpen={setOpen}></UserOptions>
        </SettingsModal>
      )}
    </div>
  );
};

export default Header;
