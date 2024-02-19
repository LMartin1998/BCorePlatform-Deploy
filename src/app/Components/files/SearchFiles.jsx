export default function SearchFiles({ searchPage }) {
  return (
    <div className="flex justify-end w-1/4 m-1 p-2">
      <input
        className="border border-gray-500 rounded mr-1 focus:outline-none focus:ring-black focus:ring-1 pr-1 pl-1"
        type="text"
        placeholder="Search..."
        onChange={searchPage}
      ></input>
    </div>
  );
}
