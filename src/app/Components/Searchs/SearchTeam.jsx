import { StepperContext } from "@/app/contexts/StepperContext";
import React from "react";

const SearchTeam = () => {
    const {
        searchTeam,
        setSearchTeam
    } = React.useContext(StepperContext)
    return ( 
        <input
        value={searchTeam}
        onChange={(event) =>{
            setSearchTeam(event.target.value);
            console.log(searchTeam);
        }}
        placeholder="Search the teams"
        className='w-full bg-gray-100 rounded-md py-2 px-3 focus:outline-none dark:bg-[#38404e] dark:text-white dark:placeholder:text-slate-400'
        >
        </input>
    );
}
 
export default SearchTeam;