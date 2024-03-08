"use client;"
import { createContext, useState } from "react";

import dataTeamReport from "@/app/data/dataTeamReport";

const StepperContext = createContext(null);

function StepperProvider({ children }) {
    const [teamsInfo] = useState(dataTeamReport);
    const [searchTeam, setSearchTeam] = useState('');
    const searchedTeams = teamsInfo.filter(
       (item) => {
           const teamId   = item.team.toLowerCase();
           const searchId = searchTeam.toLowerCase();
           return teamId.includes(searchId);
       }
    );

    return (
        <StepperContext.Provider 
            value={{
                searchTeam,
                setSearchTeam,
                searchedTeams
            }}
        >
            {children}
        </StepperContext.Provider>
    )
}

export { StepperContext, StepperProvider }