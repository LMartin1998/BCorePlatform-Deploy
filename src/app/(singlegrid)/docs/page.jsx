"use client";

import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import TableComponent from "@/app/components/TableComponent";
import data from "@/app/data/docdata.jsx";

export default function Docs() {

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

    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4 overflow-auto h-full w-full">
                <TableComponent data={data} columns={columns}></TableComponent>
            </div>
        </main>
    );
}
