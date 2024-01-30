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
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from 'react-icons/md';
import { HiOutlineTrash } from "react-icons/hi2";
import { IoFilterOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
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
            <div className='w-full flex justify-between'>
                <button className='bg-orange-500 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-orange-600'>
                    + Add document
                </button>
                <div className='flex space-x-2'>
                    <button className='flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3'><HiOutlineTrash size={22} className='mr-1' />Delete</button>
                    <button className='flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3'><IoFilterOutline size={22} className='mr-1' />Filter</button>
                    <button className='flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3'><BiSortAlt2 size={22} className='mr-1' />Sort</button>
                </div>
            </div>
            <table className='w-full mt-3'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr className='text-left bg-gray-200 select-none' key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th className='text-left p-1 text-gray-700 border-b border-solid border-gray-400'
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
                        <tr key={row.id} className={'bg-white border-b border-solid border-gray-400 hover:bg-gray-100'}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className='py-2 px-1' onClick={handleDoc}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-end space-x-2 mt-2'>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.setPageIndex(0)}><MdFirstPage /></button>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.previousPage()}><MdChevronLeft /></button>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.nextPage()}><MdChevronRight /></button>
                <button className='bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-slate-600' onClick={() => table.setPageIndex(table.getPageCount() - 1)}><MdLastPage /></button>
            </div>
        </>
    );
};
