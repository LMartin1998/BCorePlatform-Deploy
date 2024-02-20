export default function SearchFiles({ searchPage }) {
  return (
    <div className="flex w-1/2 p-1 m-1">
      <input
        className="p-2 w-full border border-gray-500 rounded-lg focus:outline-none focus:ring-black focus:ring-1"
        type="text"
        placeholder="Search..."
        onChange={searchPage}
      ></input>
    </div>
  );
}
