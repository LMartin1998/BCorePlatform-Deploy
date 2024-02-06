import { StepperContext } from "@/app/contexts/StepperContext";
import { useContext } from "react";
import SearchBlock from "../SearchBlock/SearchBlock";
import BlockList from "../BlockList";
import BlockItem from "../BlockItem";

export default function SelectBlock(){
    const { userData, setUserData } = useContext(StepperContext);
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value});
    };

    return(   
    <div className="flex flex-col">
        <SearchBlock></SearchBlock>
        <BlockList>
            <BlockItem></BlockItem>
        </BlockList>
    </div>
    ); 
 
}