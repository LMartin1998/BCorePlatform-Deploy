import { GridContext } from "@/app/contexts/GridContext";
import React from "react";

const SearchBlock = () => {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(GridContext);
    
    return ( 
    <input 
    value={searchValue}
    onChange={(event) =>{
        setSearchValue(event.target.value);
    }}
    placeholder="Search the block"
    className='w-full bg-gray-100 rounded-md py-2 px-3 focus:outline-none dark:bg-[#38404e] dark:text-white dark:placeholder:text-slate-400'
    ></input> 
    );
}
 
export default SearchBlock;