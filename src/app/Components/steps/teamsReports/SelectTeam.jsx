import { useContext } from "react";
import SearchTeam from "../../Searchs/SearchTeam";
import TeamItem from "./teams/TeamItem";
import TeamList from "./teams/TeamList";

import { StepperContext } from "@/app/contexts/StepperContext";
import DiaryPicker from "../../datePickers/DiaryPicker";

const SelectTeam = () => {
    const { searchedTeams } = useContext(StepperContext);

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
                ></TeamItem>
            ))}
        </TeamList>
    </div> 
    );
}
 
export default SelectTeam;