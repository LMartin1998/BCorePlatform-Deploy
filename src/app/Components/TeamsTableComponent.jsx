"use client";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import data from "@/app/data/teamsdata";

export default function TeamsTable() {

    const [items, setItems] = useState(2);
    const [openRows, setOpenRows] = useState({});
    const changeOpen = (rowId) => {
        setOpenRows((prevOpenRows) => ({
            ...prevOpenRows,
            [rowId]: !prevOpenRows[rowId],
        }));

    };

    const handleDoc = (e) => {
        e.stopPropagation();
        console.log(e.target);
    }

    const columns = [
        {
            id: 'select',
            header: ({ table }) => (
                <input type='checkbox' checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()}></input>
            ),
            cell: ({ row }) => (
                <input type='checkbox' checked={row.getIsSelected()} disabled={!row.getCanSelect()} onChange={row.getToggleSelectedHandler()}></input>
            ),
        },
        {
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Projects',
            accessorKey: 'projects',
        },
        {
            header: 'Role',
            accessorKey: 'role',
        },
        {
            header: 'Deadline',
            accessorKey: 'deadline',
        },
        {
            id: 'edit-column',
            cell: ({ row }) => (
                <FaUserEdit size={25}></FaUserEdit>
            )
        },
        {
            id: 'watch-column',
            cell: ({ row }) => (
                <IoEyeSharp size={25}></IoEyeSharp>
            )
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            pagination: {
                pageIndex: 0,
                pageSize: items,
            }
        }
    });

    return (
        <>
            <table className='w-full'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr className='text-left border-b border-solid border-black select-none' key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th className='text-left p-2 border-b border-solid border-black'
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {['asc', 'desc'].includes(
                                                header.column.getIsSorted()
                                            ) && (
                                                    <span>
                                                        {header.column.getIsSorted() === 'asc' ? <AiOutlineSortAscending size={20} /> : <AiOutlineSortDescending size={20} />}
                                                    </span>
                                                )}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className={'bg-white border-b border-solid border-black hover:bg-blue-100 hover:font-bold'} onClick={(handleDoc)}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className='py-4 px-2'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex'>
                <button onClick={() => table.setPageIndex(0)}>First</button>
                <button onClick={() => table.previousPage()}>Last page</button>
                <button onClick={() => table.nextPage()}>Next page</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1 < 0 ? 0 : table.getPageCount() - 1)}>
                    Last
                </button>
            </div>
        </>
    );
};
