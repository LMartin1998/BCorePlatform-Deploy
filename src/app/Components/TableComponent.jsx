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

export default function TableComponent() {

    const handleDoc = (e) => {
        e.stopPropagation();
        console.log(e.target);
    }

    const columns = [
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
                    <tr key={row.id} className={'bg-white border-b border-solid border-black hover:bg-gray-200'}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className='py-4' onClick={handleDoc}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                        <td>
                            <HiFolderDownload size={25} className='hover:cursor-pointer' />
                        </td>
                        <td>
                            <RiEdit2Fill size={25} className='hover:cursor-pointer' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
