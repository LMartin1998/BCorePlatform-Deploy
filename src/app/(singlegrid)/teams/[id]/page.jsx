"use client";
import Header from "@/app/components/Header";
import TopCards from "@/app/components/TopCards";
import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function UserId() {
  const { user, goToTable } = useContext(TeamsContext);
  const params = useParams();
  console.log(params);
  console.log(user);
  return (
    <>
      <Header></Header>
      <TopCards></TopCards>
      <div className="flex">
        <button
          className="bg-orange-500 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-orange-600"
          onClick={goToTable}
        >
          Go back
        </button>
      </div>
    </>
  );
}
