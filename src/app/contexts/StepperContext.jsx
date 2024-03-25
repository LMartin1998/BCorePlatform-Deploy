"use client;"
import { createContext, useState, useEffect } from "react";

import dataTeamReport from "@/app/data/dataTeamReport";
import reportTeams from "../data/reportTeams";

const StepperContext = createContext(null);

function StepperProvider({ children }) {
    const [teamsInfo] = useState(dataTeamReport);
    const [reportInfo] = useState(reportTeams);

    const [searchTeam, setSearchTeam] = useState('');
    const searchedTeams = teamsInfo.filter(
       (item) => {
           const teamId   = item.team.toLowerCase();
           const searchId = searchTeam.toLowerCase();
           return teamId.includes(searchId);
       }
    );

    const [selectTeams, setSelectTeams] = useState([]);
    const handleCheckTeams = (id) => {
        if(selectTeams.includes(id)){
            setSelectTeams(prevSelectTeams => prevSelectTeams.filter(item => item !== id));
        } else {
            setSelectTeams([...selectTeams, id])
        }
    } 
    
    const [teamsSelected, setTeamsSelected] = useState([]);   
    useEffect(() => {
        const selectedTeamsForReport = reportInfo.filter(team => selectTeams.includes(team.teamId));
        setTeamsSelected(selectedTeamsForReport);
        console.log(teamsSelected)
    }, [selectTeams]);

    return (
        <StepperContext.Provider 
            value={{
                searchTeam,
                setSearchTeam,
                searchedTeams,
                handleCheckTeams,
                selectTeams,
                teamsSelected
            }}
        >
            {children}
        </StepperContext.Provider>
    )
}

export { StepperContext, StepperProvider }