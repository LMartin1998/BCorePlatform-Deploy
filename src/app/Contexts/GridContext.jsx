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

    const [viewBox, setViewBox] = useState("");
    const [jid, setJid] = useState("");
    const updateJid = (id) => {
        setJid(id);
    }

    const [points, setPoints] = useState("");
    const [background, setBackground] = useState("");

    const [json, setJson] = useState({});
    const updateJson = () => {
        if (jid) {
            const item = data.find((item) => item.id === jid);
            setJson(item || {});
            return;
        }
        setJson({});
    };


    const [rowsInput, setRowsInput] = useState(1);
    const rowsInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setRowsInput(newValue);
    };
    const updateRowInput = () => {
        if (json && json.rows) {
            setRowsInput(json.rows);
        }
    };

    const [racksInput, setRacksInput] = useState(1);
    const racksInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setRacksInput(newValue);
    };
    const updateRacksInput = () => {
        if (json && json.racks) {
            setRacksInput(json.racks);
        }
    };

    const [panelsInput, setPanelsInput] = useState(1);
    const panelsInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setPanelsInput(newValue);
    };
    const updatePanelsInput = () => {
        if (json && json.panels) {
            setPanelsInput(json.panels);
        }
    };

    const [sections, setSections] = useState(0);
    const sectionsById = () => {
        if (jid) {
            const item = data.find((item) => item.id === jid);
            const sections = item.sections.length;
            setSections(sections);
            return;
        }
        setSections(0);
    }

    const [readtt, setReadtt] = useState([]);
    const torqueTubeBySections = () => {
        if (jid) {
            const item = data.find((item) => item.id === jid);
            const dataArray = [];
            const torqueTubeBySections = item.sections;
            torqueTubeBySections.forEach((element) => {
                const sectionsId = element.sectionId;
                const torqueTube = element.torqueTubes;

                const sectionArray = torqueTube.map((tt) => `${sectionsId}, ${tt.torqueTubeId}`);
                dataArray.push(sectionArray);
            });
            setReadtt(dataArray || []);
            return;
        }
        setReadtt([]);
    }

    const [maxtt, setMaxtt] = useState(0);
    const countMaxtt = () => {
        let nMax = 0;
        if (jid) {
            const item = data.find((item) => item.id === jid);
            const torqueTubeBySections = item.sections;
            torqueTubeBySections.forEach((element) => {
                const torqueTubeCount = element.torqueTubes.length; // Accede a la propiedad torqueTubes y luego a su length
                nMax = Math.max(nMax, torqueTubeCount);
            });
            setMaxtt(nMax);
            return;
        }
        setMaxtt(1);
    };

    const maxPanels = (sectionId) => {

        if (jid) {

        }

        return 0;
    };

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
                updateRowInput,
                racksInput,
                racksInputChange,
                updateRacksInput,
                panelsInput,
                panelsInputChange,
                updatePanelsInput,
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
                updateJid,
                points,
                background,
                perspectiveMode,
                changePerspectiveMode,
                torqueTubeBySections,
                readtt,
                maxtt,
                countMaxtt,
                sections,
                sectionsById,
            }}
        >
            {children}
        </GridContext.Provider>
    );
}

export { GridContext, GridProvider };
