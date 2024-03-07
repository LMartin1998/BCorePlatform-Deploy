import SearchTeam from "../../Searchs/SearchTeam";
import TeamItem from "./teams/TeamItem";
import TeamList from "./teams/TeamList";

const SelectTeam = () => {
    return ( 
    <div className="flex flex-col">
        <SearchTeam></SearchTeam>
        <TeamList>
            <TeamItem></TeamItem>
        </TeamList>
    </div> 
    );
}
 
export default SelectTeam;