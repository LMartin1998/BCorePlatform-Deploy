"use client";

import { createContext, useState, useEffect } from "react";
import { TorqueTubesLocalStorage } from "../localstorage/TorqueTubesLocalStorage";
import { PanelsLocalStorage } from "../localstorage/PanelsLocalStorage";
import { toolSelect } from "../utils/toolSelect";
import { filterSelect } from "../utils/filterSelect";

import data from "@/app/data/data";

const GridContext = createContext();

function GridProvider({ children }) {
    const [toolMode, setToolMode] = useState(0);
    const changeToolMode = (e) => {
        e.stopPropagation();
        const newTool = toolSelect(e.target.id);
        setToolMode(newTool);
    };

    const [filterMode, setFilterMode] = useState(3);
    const changeFilterMode = (e) => {
        e.stopPropagation();
        const newFilter = filterSelect(e.target.id);
        setFilterMode(newFilter);
    };

    const [rowsInput, setRowsInput] = useState(1);
    const rowsInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setRowsInput(newValue);
    };

    const [racksInput, setRacksInput] = useState(1);
    const racksInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setRacksInput(newValue);
    };

    const [panelsInput, setPanelsInput] = useState(1);
    const panelsInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setPanelsInput(newValue);
    };

    const [json, setJson] = useState("");
    const updateJson = (id) => {
        const item = data.find((item) => item.id === id);
        setJson(item);
    };

    useEffect(() => {
        if (json) {
            // Aquí actualizas los estados con los valores del json
            setRowsInput(!json.rows ? 1 : json.rows);
            setRacksInput(!json.racks ? 1 : json.racks);
            setPanelsInput(!json.panels ? 1 : json.panels);
        }
    }, [json]);
    // const updateInputs = (id) => {
    //     const item = data.find((info) => info.id === id);
    //     setPanelsInput(!item.panels ? panelsInput : item.panels);
    //     setRacksInput(!item.racks ? racksInput : item.racks);
    //     setRowsInput(!item.rows ? rowsInput : item.rows);
    // };

    const handleTorqueTubes = (columnIndex, rowIndex) => {
        return TorqueTubesLocalStorage(columnIndex, rowIndex, toolMode);
    };

    const handlePanels = (columnIndex, rowIndex, index) => {
        return PanelsLocalStorage(columnIndex, rowIndex, index, toolMode);
    };

    const [mouseDownTT, setMouseDownTT] = useState(false);
    const [mouseDownPanel, setMouseDownPanel] = useState(false);
    const [mouseDownContainer, setMouseDownContainer] = useState(false);
    const handleMouseDownContainer = (e) => {
        e.stopPropagation();
        if (e.target.className.includes("torque_tube")) {
            setMouseDownTT(true);
        } else if (e.target.className.includes("panel")) {
            setMouseDownPanel(true);
        } else {
            setMouseDownContainer(true);
        }
    };

    // useEffect(() => {
    //     console.log(filterMode);
    // }, [filterMode]);

    const handleMouseUpContainer = () => {
        setMouseDownContainer(false);
        setMouseDownTT(false);
        setMouseDownPanel(false);
    };

    return (
        <GridContext.Provider
            value={{
                rowsInput,
                rowsInputChange,
                racksInput,
                racksInputChange,
                panelsInput,
                panelsInputChange,
                handleTorqueTubes,
                handlePanels,
                handleMouseDownContainer,
                handleMouseUpContainer,
                mouseDownTT,
                mouseDownPanel,
                changeToolMode,
                filterMode,
                changeFilterMode,
                json,
                updateJson,
            }}
        >
            {children}
        </GridContext.Provider>
    );
}

export { GridContext, GridProvider };
