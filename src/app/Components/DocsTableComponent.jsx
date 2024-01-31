"use client";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import docs from "../data/docdata";
import { useState } from "react";
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from 'react-icons/md';
import { FaFileWord, FaFilePdf } from "react-icons/fa";
import { GiMechanicalArm, GiElectricalResistance } from "react-icons/gi";


export default function DocsTable() {

    const extensionLabel = {
        "docx": <FaFileWord size={25} />,
        "pdf": <FaFilePdf size={25} />,
    };

    const typeLabel = {
        "electrical": <GiElectricalResistance size={25} />,
        "mechanical": <GiMechanicalArm size={25} />,
    };

    const [rowSelection, setRowSelection] = useState({});

    const columns = [
        {
            id: 'selector-column',
            header: ({ table }) => <input type="checkbox" checked={table.getIsAllRowsSelected() || table.getIsSomeRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}></input>,
            cell: ({ row }) => <input type="checkbox" checked={row.getIsSelected()}
                disabled={!row.getCanSelect()} onChange={row.getToggleSelectedHandler()}></input>
        },
        {
            header: 'Name',
            accessorKey: 'name',
            cell: row => <p>{row.getValue()}</p>
        },
        {
            header: 'Type',
            accessorKey: 'type',
            cell: row => <p>{typeLabel[row.getValue()]}{row.getValue()}</p>
        },
        {
            header: 'Extension',
            accessorKey: 'extension',
            cell: row => <p>{extensionLabel[row.getValue()]}{row.getValue()}</p>
        },
    ];

    const [data, setData] = useState(docs);

    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <>
            <table className='w-full mt-3'>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr className='text-left bg-gray-200 select-none' key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th className='text-left p-1 text-gray-700 border-b border-solid border-gray-400' key={header.id}>
                                            {
                                                header.isPlaceholder ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <tr className='bg-white border-b border-solid border-gray-400 hover:bg-gray-100' key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td className='py-2 px-1' key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='flex justify-end space-x-2 mt-2'>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}><MdFirstPage /></button>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}><MdChevronLeft /></button>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}><MdChevronRight /></button>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}><MdLastPage /></button>
                <select
                    className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600'
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[1, 2, 3, 4, 5].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};
