"use client";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

import data from "@/app/data/teamsdata";

export default function TeamsTable() {

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
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Project',
            accessorKey: 'project',
        },
        {
            header: 'Role',
            accessorKey: 'role',
        },
        {
            header: 'Deadline',
            accessorKey: 'deadline',
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
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
                            <td>
                                <div>
                                    <button onClick={() => changeOpen(row.id)}><HiOutlineDotsVertical size={25} className='hover:cursor-pointer' /></button>
                                    {openRows[row.id] && (
                                        <div>
                                            <div>Hola1</div>
                                            <div>Hola1</div>
                                            <div>Hola1</div>
                                        </div>
                                    )}
                                </div>
                            </td>
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
