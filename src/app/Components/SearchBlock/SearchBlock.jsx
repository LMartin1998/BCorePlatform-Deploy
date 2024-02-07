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
    className='rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 shadow focus:shadow-outline'
    ></input> 
    );
}
 
export default SearchBlock;