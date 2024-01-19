"use client";

import { createContext, useState, useEffect } from "react";
import { TorqueTubesLocalStorage } from "../localStorage/TorqueTubesLocalStorage";
import { PanelsLocalStorage } from "../localStorage/PanelsLocalStorage";
import { toolSelect } from "../utils/toolSelect";
import { filterSelect } from "../utils/filterSelect";

import data from "@/app/data/data";

const GridContext = createContext();

function GridProvider({ children }) {
    const [toolMode, setToolMode] = useState(0);
    const changeToolMode = (mode) => {
        const newTool = toolSelect(mode);
        setToolMode(newTool);
    };

    const [filterMode, setFilterMode] = useState(3);
    const changeFilterMode = (e) => {
        e.stopPropagation();
        const newFilter = filterSelect(e.target.id);
        setFilterMode(newFilter);
    };

    const [perspectiveMode, setPerspectiveMode] = useState(false);
    const changePerspectiveMode = () => {
        setPerspectiveMode((prevState) => !prevState);
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

    const [viewBox, setViewBox] = useState("");
    const [jid, setJid] = useState("");
    const [points, setPoints] = useState("");
    const [background, setBackground] = useState("");

    const [json, setJson] = useState("");
    const updateJson = (id) => {
        const item = data.find((item) => item.id === id);
        setJson(item);
    };

    const [sections, setSections] = useState('');
    const sectionsById = (id) => {
        const item = data.find((item) => item.id === id);
        const sections = item.sections.length;
    }

    const [readtt, setReadtt] = useState("");
    const torqueTubeBySections = (id) => {
        const item = data.find((item) => item.id === id);
        const dataArray = [];
        const torqueTubeBySections = item.sections;
        torqueTubeBySections.forEach((element) => {
            const sectionsId = element.sectionId;
            const torqueTube = element.torqueTubes;

            const sectionArray = torqueTube.map((tt) => `${sectionsId}, ${tt.torqueTubeId}`);
            dataArray.push(sectionArray);
        });

        return dataArray;
    }



    const panelsByTorqueTube = (id) => {
        const item = data.find((item) => item.id === id);
        const torqueTubeBySections = item.sections;
        torqueTubeBySections.forEach((element) => {
            element.torqueTubes.forEach((torqueTube) => {
                const torqueTubeId = torqueTube.torqueTubeId;
                const panelCount = torqueTube.panels.length;

                var ttPanels = {};
                ttPanels[torqueTubeId] = panelCount;

            });
        });
    }



    useEffect(() => {
        if (json) {
            setRowsInput(!json.rows ? 1 : json.rows);
            setRacksInput(!json.racks ? 1 : json.racks);
            setPanelsInput(!json.panels ? 1 : json.panels);
            setJid(!json.id ? 1 : json.id);
            setViewBox(!json.viewBox ? 1 : json.viewBox);
            setPoints(!json.points ? 1 : json.points);
            setBackground(!json.background ? 1 : json.background);
        }
    }, [json]);

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
                viewBox,
                jid,
                points,
                background,
                perspectiveMode,
                changePerspectiveMode,
                torqueTubeBySections
            }}
        >
            {children}
        </GridContext.Provider>
    );
}

export { GridContext, GridProvider };
