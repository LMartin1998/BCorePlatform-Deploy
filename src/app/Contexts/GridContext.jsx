"use client";

import { createContext, useState } from "react";

const GridContext = createContext();

function GridProvider({ children }) {

    const [rowsInput, setRowsInput] = useState(1);
    const [racksInput, setRacksInput] = useState(1);
    const [panelsInput, setPanelsInput] = useState(1);

    return (
        <GridContext.Provider value={{
            rowsInput, setRowsInput,
            racksInput, setRacksInput,
            panelsInput, setPanelsInput,
        }}>
            {children}
        </GridContext.Provider>
    );
}

export { GridContext, GridProvider };