export default function SearchFiles({ searchPage }) {
  return (
    <div className="flex justify-end w-1/4 m-1 p-2">
      <input
        className="flex justify-center items-center ring-2 ring-black rounded-lg p-1"
        type="text"
        placeholder="Search..."
        onChange={searchPage}
      ></input>
    </div>
  );
}
