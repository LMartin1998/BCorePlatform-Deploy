import { FilesContext } from "@/app/contexts/FilesContext";
import Link from "next/link";
import { useContext, Fragment } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function BreadcrumFiles() {
  const { folderPath, setChildrenFiles, updateChildrenFilesFromBreadcrum } =
    useContext(FilesContext);

  return (
    folderPath && (
      <div className="flex m-1 p-2 justify-start items-center w-3/4">
        {folderPath.map((item, index) => (
          <Fragment key={index ? index : 0}>
            {index > 0 && (
              <IoArrowForwardOutline className="size-5 m-1"></IoArrowForwardOutline>
            )}
            <Link
              className="flex p-1 rounded-full hover:bg-gray-300"
              href={item.path}
              id={index ? index : 0}
              onClick={updateChildrenFilesFromBreadcrum}
            >
              <p>{item.name}</p>
            </Link>
          </Fragment>
        ))}
      </div>
    )
  );
}
