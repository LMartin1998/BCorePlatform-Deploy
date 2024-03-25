import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";

export default function SearchFiles({ searchPage }) {
  const { search, updateSearch } = useContext(FilesContext);

  return (
    <div className="flex w-full lg:w-1/4 p-1 m-1">
      <input
        className="p-2 w-full border border-gray-500 rounded-lg focus:outline-none focus:ring-black focus:ring-1 dark:focus:outline-none dark:focus:outline-blue-600 dark:placeholder-[#A0AEC0]"
        onChange={(e) => {
          updateSearch(e);
          searchPage(e);
        }}
        placeholder="Search..."
      ></input>
    </div>
  );
}
