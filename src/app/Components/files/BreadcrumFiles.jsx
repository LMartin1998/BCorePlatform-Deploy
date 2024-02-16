import { FilesContext } from "@/app/contexts/FilesContext";
import Link from "next/link";
import { useContext, Fragment } from "react";

export default function BreadcrumFiles() {
  const { folderPath } = useContext(FilesContext);

  return (
    folderPath && (
      <div>
        {folderPath.map((item, index) => (
          <Fragment key={index ? index : 0}>
            {index > 0 && <span></span>}
            <Link href={item.path}>
              <p>{item.name}</p>
            </Link>
          </Fragment>
        ))}
      </div>
    )
  );
}
