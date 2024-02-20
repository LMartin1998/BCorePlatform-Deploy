import { StepperContext } from "@/app/contexts/StepperContext";
import SearchBlock from "../SearchBlock/SearchBlock";
import BlockList from "../BlockList";
import BlockItem from "../BlockItem";

import { useContext, useEffect } from "react";
import { GridContext } from "@/app/contexts/GridContext";

export default function SelectBlock() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const {  searchedBlocks, handleCheck, selectedBlocks } = useContext(GridContext);

  return (
    <div className="flex flex-col">
      <SearchBlock></SearchBlock>
      <BlockList>
        {searchedBlocks.map(item =>(
            <BlockItem
                key={item.id}
                block={item.id}
                viewBox={item.viewBox}
                points={item.points}
                checked={selectedBlocks.includes(item.id)}
                onChange={() => handleCheck(item.id)}
                // toUse={item.toUse}
                // onCheck={() => {handleCheckboxChange(item.id);}}
            />
        ))}
      </BlockList>
    </div>
  );
}
