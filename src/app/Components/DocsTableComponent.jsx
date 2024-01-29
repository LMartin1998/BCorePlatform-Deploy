"use client";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table';
import data from "@/app/data/docdata.jsx";
import { HiFolderDownload } from "react-icons/hi";
import { RiEdit2Fill } from "react-icons/ri";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { useState } from 'react';

export default function DocsTable() {

    const [items, setItems] = useState(2);
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
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Size',
            accessorKey: 'size',
        },
        {
            id: 'download-action',
            header: '',
            cell: ({ row }) => <div><HiFolderDownload size={25} className='hover:cursor-pointer' /></div>
        },
        {
            id: 'open-action',
            header: '',
            cell: ({ row }) => <div><RiEdit2Fill size={25} className='hover:cursor-pointer' /></div>
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
            <div className='w-full flex justify-end'>
                <button className='m-5'>
                    <MdDriveFolderUpload size={50} className='bg-white border border-solid border-black rounded hover:bg-blue-200' />
                </button>
            </div>
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
                        <tr key={row.id} className={'bg-white border-b border-solid border-black hover:bg-blue-100 hover:font-bold'}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className='py-4 px-2' onClick={handleDoc}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => table.setPageIndex(0)}>Primer Pagina</button>
            <button onClick={() => table.previousPage()}>Pagina Anterior</button>
            <button onClick={() => table.nextPage()}>Pagina Siguiente</button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                Ultima Pagina
            </button>
        </>
    );
};
