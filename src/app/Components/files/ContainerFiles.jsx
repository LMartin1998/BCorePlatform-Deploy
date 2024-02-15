import { IoFolderOpenOutline } from "react-icons/io5";

export default function ContainerFiles({ filesList, updateChildrenFiles }) {
  const renderChildrenFiles = () => {
    return filesList.map((file) => (
      <div
        className="flex m-1 items-center select-none border rounded-lg border-gray-400 bg-white hover:bg-gray-100"
        key={file.id}
        id={file.id}
        onDoubleClick={updateChildrenFiles}
      >
        <input type="checkbox"></input>
        {file.isFolder ? (
          <>
            <IoFolderOpenOutline className="size-10"></IoFolderOpenOutline>
          </>
        ) : (
          <img className="size-10" src={file.imageLink} alt={file.fileName} />
        )}
        <p>{file.fileName}</p>
      </div>
    ));
  };

  return (
    <div className="w-full h-full m-1 p-1 grid items-center border border-black rounded-lg bg-amber-50">
      {filesList && renderChildrenFiles()}
    </div>
  );
}
