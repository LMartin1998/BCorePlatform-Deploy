import { FilesContext } from "@/app/contexts/FilesContext";
import Link from "next/link";
import { useContext, Fragment } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function BreadcrumFiles() {
  const { folderPath, setChildrenFiles, updateChildrenFilesFromBreadcrum } =
    useContext(FilesContext);

  return (
    folderPath && (
      <div className="flex items-center">
        {folderPath.map((item, index) => (
          <Fragment key={index ? index : 0}>
            {index > 0 && (
              <IoArrowForwardOutline size={10}></IoArrowForwardOutline>
            )}
            <Link
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
