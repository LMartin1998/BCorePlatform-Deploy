import { FilesContext } from "@/app/contexts/FilesContext";
import { useContext } from "react";
import {
  HiOutlineViewList,
  HiOutlineViewGrid,
  HiOutlineCheck,
} from "react-icons/hi";

export default function DesignFiles() {
  const { design, updateDesign } = useContext(FilesContext);

  return (
    <div
      className="flex w-1/6 justify-end border border-black rounded-lg divide-x divide-black bg-white mr-2"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="flex justify-center items-center w-full hover:cursor-pointer"
        id="0"
        onClick={updateDesign}
      >
        {design == 0 && <HiOutlineCheck className="size-6"></HiOutlineCheck>}
        <HiOutlineViewList className="size-6"></HiOutlineViewList>
      </div>
      <div
        className="flex justify-center items-center w-full hover:cursor-pointer"
        id="1"
        onClick={updateDesign}
      >
        {design == 1 && <HiOutlineCheck className="size-6"></HiOutlineCheck>}
        <HiOutlineViewGrid className="size-6"></HiOutlineViewGrid>
      </div>
    </div>
  );
}
