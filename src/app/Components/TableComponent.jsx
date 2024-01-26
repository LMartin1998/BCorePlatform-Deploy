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
            <button onClick={() => table.setPageIndex(0)}>Primer Pagina</button>
            <button onClick={() => table.previousPage()}>Pagina Anterior</button>
            <button onClick={() => table.nextPage()}>Pagina Siguiente</button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                Ultima Pagina
            </button>
        </>
    );
};
