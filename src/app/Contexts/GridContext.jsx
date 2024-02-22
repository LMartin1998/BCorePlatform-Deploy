"use client";

import { createContext, useState, useEffect } from "react";
import { TorqueTubesLocalStorage } from "../localstorage/TorqueTubesLocalStorage";
import { PanelsLocalStorage } from "../localstorage/PanelsLocalStorage";
import { toolSelect } from "../utils/toolSelect";
import { filterSelect } from "../utils/filterSelect";

import data from "@/app/data/data";

const GridContext = createContext();

function GridProvider({ children }) {

    const [zoom, setZoom] = useState(1);
    const increaseZoom = (e) => {
        e.stopPropagation();
        setZoom((prevZoom) => {
            const newZoom = prevZoom + 0.1;
            return newZoom >= 3 ? 3 : parseFloat(newZoom.toFixed(1));
        });
    };
    const decreaseZoom = (e) => {
        e.stopPropagation();
        setZoom((prevZoom) => {
            const newZoom = prevZoom - 0.1;
            return newZoom <= 0.1 ? 0.1 : parseFloat(newZoom.toFixed(1));
        });
    };

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

    const [jid, setJid] = useState("");
    const updateJid = (id) => {
        setJid(id);
    }

    const [viewBox, setViewBox] = useState([]);
    
    // hooks for steppers start
    const [viewboxAndPoints] = useState(data);

    const [searchValue, setSearchValue] = useState('');
    const searchedBlocks = viewboxAndPoints.filter(
        (item) => {
            const blockId  = item.id.toLowerCase();
            const searchId = searchValue.toLowerCase();
            return blockId.includes(searchId);
        }
    );
    
    const [selectedBlocks, setSelectedBlocks] = useState([]);
    const handleCheck = (id) =>{
        if(selectedBlocks.includes(id)) {
            setSelectedBlocks(prevSelectedBlocks => prevSelectedBlocks.filter(item => item !== id)); 
        } else {
            setSelectedBlocks([...selectedBlocks, id]);
        }
    };

    // Dropdown options chip
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option, blockId) => {
        const isSelected = selectedOptions.some(
            (selectedOption) => selectedOption.value === option.value
        );
        if(isSelected){
            setSelectedOptions(
                selectedOptions.filter(
                    (selectedOption) => selectedOption.value !== option.value
                )
            );
        } else {
            setSelectedOptions([...selectedOptions], {blockId: blockId, ...option});
        }
    };  
    // hooks for steppers end

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

    const torqueTubeState = (sectionId, torqueTubeId) => {
        if (jid) {
            const item = data.find((item) =>
                item.id === jid
            );
            const sections = item.sections;
            const section = sections.find((section) => section.sectionId === sectionId);
            const torqueTubes = section.torqueTubes;
            const torqueTube = torqueTubes.find((tt) => tt.torqueTubeId === torqueTubeId);
            return torqueTube.state;
        }
        return 0;
    };

    const panelState = (sectionId, torqueTubeId, panelId) => {
        if (jid) {
            const id = `p-${panelId}`;
            const item = data.find((item) =>
                item.id === jid
            );
            const sections = item.sections;
            const section = sections.find((section) => section.sectionId === sectionId);
            const torqueTubes = section.torqueTubes;
            const torqueTube = torqueTubes.find((tt) => tt.torqueTubeId === torqueTubeId);
            const panels = torqueTube.panels;
            const panel = panels.find((pa) => pa.panelId === id);
            return panel.state;
        }
        return 0;
    }

    const torqueTubeShow = (sectionId, torqueTubeId) => {
        if (jid) {
            const item = data.find((item) =>
                item.id === jid
            );
            const sections = item.sections;
            const section = sections.find((section) => section.sectionId === sectionId);
            const torqueTubes = section.torqueTubes;
            const torqueTube = torqueTubes.find((tt) => tt.torqueTubeId === torqueTubeId);
            return torqueTube.show;
        }
        return true;
    };

    const panelShow = (sectionId, torqueTubeId, panelId) => {
        if (jid) {
            const id = `p-${panelId}`;
            const item = data.find((item) =>
                item.id === jid
            );
            const sections = item.sections;
            const section = sections.find((section) => section.sectionId === sectionId);
            const torqueTubes = section.torqueTubes;
            const torqueTube = torqueTubes.find((tt) => tt.torqueTubeId === torqueTubeId);
            const panels = torqueTube.panels;
            const panel = panels.find((pa) => pa.panelId === id);
            return panel.show;
        }
        return 0;
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
            let nMax = 0;
            const item = data.find((item) => item.id === jid);
            if (item) {
                const torqueTubeBySections = item.sections || [];
                const matchingSections = torqueTubeBySections.filter((section) => section.sectionId === sectionId);
                matchingSections.forEach((section) => {
                    section.torqueTubes.forEach((tt) => {
                        const panelsCount = tt.panels.length;
                        nMax = Math.max(nMax, panelsCount);
                    });
                });
                return 45 * nMax + 50;
            }
        }
        return 0;
    };

    const panelsByTorqueTube = (id) => {
        const sectionId = id.split(", ")[0];
        const torqueTubeId = id.split(", ")[1];
        if (jid) {
            const item = data.find((item) => item.id === jid);
            if (item) {
                const torqueTubeBySections = item.sections || [];
                const matchingSections = torqueTubeBySections.filter((section) => section.sectionId === sectionId);
                for (const section of matchingSections) {
                    for (const tt of section.torqueTubes) {
                        if (tt.torqueTubeId === torqueTubeId) {
                            return tt.panels.length;
                        }
                    }
                }
            }
        }
        return 0;
    };

    const initialStateTT = (sectionId, torqueTubeId) => {
        const readSectionId = readtt && readtt[sectionId] ? readtt[sectionId][torqueTubeId].split(", ")[0] : "s-1";
        const readTorqueTubeId = readtt && readtt[sectionId] ? readtt[sectionId][torqueTubeId].split(", ")[1] : "t-1";
        return {
            state: torqueTubeState(readSectionId, readTorqueTubeId),
            show: torqueTubeShow(readSectionId, readTorqueTubeId),
        };
    };

    const initialStatePanel = (sectionId, torqueTubeId, panelId) => {
        const readSectionId = readtt && readtt[sectionId] ? readtt[sectionId][torqueTubeId].split(", ")[0] : "s-1";
        const readTorqueTubeId = readtt && readtt[sectionId] ? readtt[sectionId][torqueTubeId].split(", ")[1] : "t-1";
        return {
            show: panelShow(readSectionId, readTorqueTubeId, panelId),
            state: panelState(readSectionId, readTorqueTubeId, panelId),
        };
    }

    const handleTorqueTubes = (columnIndex, rowIndex) => {
        return TorqueTubesLocalStorage(columnIndex, rowIndex, toolMode, initialStateTT(rowIndex, columnIndex));
    };

    const handlePanels = (columnIndex, rowIndex, index) => {
        return PanelsLocalStorage(columnIndex, rowIndex, index, toolMode, initialStatePanel(rowIndex, columnIndex, index));
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
                maxPanels,
                panelsByTorqueTube,
                zoom, increaseZoom, decreaseZoom,
                torqueTubeState,
                torqueTubeShow,
                initialStateTT,
                initialStatePanel,
                // Variables for stepper
                searchValue,
                setSearchValue,
                viewboxAndPoints,
                searchedBlocks,
                selectedBlocks,
                handleCheck,
                 
                isOpen,
                setIsOpen,
                selectedOptions,
                setSelectedOptions,
                handleToggleDropdown,
                handleSelectOption
                // Variables for stepper
            }}
        >
            {children}
        </GridContext.Provider>
    );
}

export { GridContext, GridProvider };
