import { IoFolderOpenOutline } from "react-icons/io5";
import DropdrownFiles from "./DropdownFiles";

export default function ChildrenFiles({ filesList, updateChildrenFiles }) {
  const renderChildrenFiles = () => {
    return filesList.map((file) => (
      <div
        className="flex items-center select-none border rounded-lg border-gray-400 bg-white hover:bg-gray-100"
        key={file.id}
        id={file.id}
        onDoubleClick={updateChildrenFiles}
      >
        <div className="flex ml-2 w-1/6">
          <input type="checkbox"></input>
        </div>
        {file.isFolder ? (
          <div className="flex justify-center w-1/6">
            <IoFolderOpenOutline className="size-10"></IoFolderOpenOutline>
          </div>
        ) : (
          <div className="flex justify-center w-1/6">
            <img className="size-10" src={file.imageLink} alt={file.fileName} />
          </div>
        )}
        <div className="flex justify-center w-5/6">
          <p>{file.fileName}</p>
        </div>
        <DropdrownFiles id={file.id}></DropdrownFiles>
      </div>
    ));
  };

  return (
    <div className="w-full h-full m-1 p-1 grid items-center border border-black rounded-lg bg-white">
      <div className="flex w-1/6 justify-evenly hover:cursor-pointer">
        <input type="checkbox"></input>
        <p>Files</p>
      </div>
      {filesList && renderChildrenFiles()}
    </div>
  );
}
