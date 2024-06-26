import { StepperContext } from "@/app/contexts/StepperContext";
import SearchBlock from "../../searchs/SearchBlock";
import BlockList from "./blocks/BlockList";
import BlockItem from "./blocks/BlockItem";

import { useContext } from "react";
import { GridContext } from "@/app/contexts/GridContext";

export default function SelectBlock() {
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
            />
        ))}
      </BlockList>
    </div>
  );
}
