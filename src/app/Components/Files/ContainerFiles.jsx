import { IoFolderOpenOutline } from "react-icons/io5";

export default function ContainerFiles({ filesList, updateChildrenFiles }) {
  const renderChildrenFiles = () => {
    return filesList.map((file) => (
      <div className="flex">
        <input type="checkbox"></input>
        <div
          className="flex items-center select-none"
          key={file.id}
          id={file.id}
          onDoubleClick={updateChildrenFiles}
        >
          {file.isFolder ? (
            <>
              <IoFolderOpenOutline
                size={40}
                className="m-1"
              ></IoFolderOpenOutline>
            </>
          ) : (
            <img
              className="size-10 m-1 "
              src={file.imageLink}
              alt={file.fileName}
            />
          )}
          <p>{file.fileName}</p>
        </div>
      </div>
    ));
  };

  return filesList && renderChildrenFiles();
}
