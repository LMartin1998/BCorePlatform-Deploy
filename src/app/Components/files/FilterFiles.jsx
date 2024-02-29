export default function FilterFiles({ type, updateType }) {
  return (
    <div className="flex w-3/4 justify-center items-center">
      <label className="m-2">Type</label>
      <div className="flex justify-center items-center border border-black rounded-lg divide-x divide-black bg-white">
        <button
          className={`flex justify-center items-center p-2 rounded-l-lg hover:cursor-pointer ${
            type == 0 ? "bg-blue-200" : "bg-white"
          }`}
          onClick={updateType}
          id="0"
        >
          All
        </button>
        <button
          className={`flex justify-center items-center p-2 hover:cursor-pointer ${
            type == 1 ? "bg-blue-200" : "bg-white"
          }`}
          onClick={updateType}
          id="1"
        >
          Files
        </button>
        <button
          className={`flex justify-center items-center p-2 rounded-r-lg hover:cursor-pointer ${
            type == 2 ? "bg-blue-200" : "bg-white"
          }`}
          onClick={updateType}
          id="2"
        >
          Folders
        </button>
      </div>
    </div>
  );
}
