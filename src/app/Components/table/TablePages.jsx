import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from "react-icons/md";

export default function TablePages({ table }) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex justify-start space-x-2 mt-2">
        <div className="flex items-center">Page</div>
        <strong>
          {
            <input
              type="number"
              min={1}
              value={table.getState().pagination.pageIndex + 1}
              max={table.getPageCount()}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          }{" "}
          of {table.getPageCount()}
        </strong>
      </div>
      <div className="flex justify-end space-x-2 mt-2">
        <button
          className={`bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-900 ${
            table.getCanPreviousPage() ? "" : "hover:cursor-not-allowed"
          }`}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <MdFirstPage />
        </button>
        <button
          className={`bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-900 ${
            table.getCanPreviousPage() ? "" : "hover:cursor-not-allowed"
          }`}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdChevronLeft />
        </button>
        <button
          className={`bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-900 ${
            table.getCanNextPage() ? "" : "hover:cursor-not-allowed"
          }`}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <MdChevronRight />
        </button>
        <button
          className={`bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-900 ${
            table.getCanNextPage() ? "" : "hover:cursor-not-allowed"
          }`}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <MdLastPage />
        </button>
        <select
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-900"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[1, 2, 3, 5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
