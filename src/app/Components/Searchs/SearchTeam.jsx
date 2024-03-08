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
        className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 shadow focus:shadow-outline'
        >
        </input>
    );
}
 
export default SearchTeam;