import { FilesContext } from "@/app/contexts/FilesContext";
import Link from "next/link";
import { useContext, Fragment } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function BreadcrumFiles() {
  const { folderPath, updateChildrenFilesFromBreadcrum } =
    useContext(FilesContext);

  return (
    folderPath && (
      <div className="flex jusify-start items-center w-1/2 lg:w-5/6 m-2">
        {folderPath.map((item, index) => (
          <Fragment key={index ? index : 0}>
            {index > 0 && (
              <IoArrowForwardOutline className="size-5 m-1 dark:text-white"></IoArrowForwardOutline>
            )}
            <Link
              className="flex rounded-full hover:bg-gray-300 dark:hover:bg-[#BB86FC]"
              href={item.path}
              id={index ? index : 0}
              onClick={updateChildrenFilesFromBreadcrum}
            >
              <p className="dark:text-white">{item.name}</p>
            </Link>
          </Fragment>
        ))}
      </div>
    )
  );
}
