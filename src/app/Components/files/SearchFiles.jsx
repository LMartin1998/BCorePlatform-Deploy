export default function SearchFiles({ searchPage }) {
  return (
    <div className="flex w-1/5 m-1">
      <input
        className="border border-gray-500 rounded focus:outline-none focus:ring-black focus:ring-1 p-1"
        type="text"
        placeholder="Search..."
        onChange={searchPage}
      ></input>
    </div>
  );
}
