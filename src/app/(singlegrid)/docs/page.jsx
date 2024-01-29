"use client";

import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import DocsTable from "@/app/components/DocsTableComponent";

export default function Docs() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4 overflow-auto h-full w-full">
                <DocsTable></DocsTable>
            </div>
        </main>
    );
}
