import { useContext, useEffect } from "react";
import SearchTeam from "../../Searchs/SearchTeam";
import TeamItem from "./teams/TeamItem";
import TeamList from "./teams/TeamList";

import { StepperContext } from "@/app/contexts/StepperContext";
import DiaryPicker from "../../datePickers/DiaryPicker";

const SelectTeam = () => {
    const { searchedTeams, handleCheckTeams, selectTeams } = useContext(StepperContext);
    useEffect(()=>{
        console.log(selectTeams);
    },[selectTeams])
    return ( 
    <div className="flex flex-col">
        <div className="flex justify-center">
            <DiaryPicker></DiaryPicker>
        </div>
        <SearchTeam></SearchTeam>
        <TeamList>
            {searchedTeams.map(item =>(
                <TeamItem
                    key= {item.id}
                    team={item.team}
                    onChange={() => handleCheckTeams(item.id)}
                ></TeamItem>
            ))}
        </TeamList>
    </div> 
    );
}
 
export default SelectTeam;