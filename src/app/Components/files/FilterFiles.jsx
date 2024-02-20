import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";

export default function FilterFiles() {
  const { updateMainType } = useContext(FilesContext);

  return (
    <div className="flex m-1 p-1 w-1/6 items-center">
      <label className="p-2">Type</label>
      <div className="flex justify-center items-center border border-black rounded-lg divide-x divide-black">
        <button
          className="flex justify-center items-center p-2 hover:cursor-pointer"
          onClick={updateMainType}
          id="0"
        >
          All
        </button>
        <button
          className="flex justify-center items-center p-2 hover:cursor-pointer"
          onClick={updateMainType}
          id="1"
        >
          Files
        </button>
        <button
          className="flex justify-center items-center p-2 hover:cursor-pointer"
          onClick={updateMainType}
          id="2"
        >
          Folders
        </button>
      </div>
    </div>
  );
}
