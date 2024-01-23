import { FixedSizeGrid, VariableSizeGrid } from "react-window";
import { useContext, createRef, useState, useEffect } from "react";
import { GridContext } from "../contexts/GridContext";
import styles from "@/app/styles/Singlegrid.module.css";
import { TorqueTubes } from "./TorqueTubesComponent";

export function ContainerRacks() {
    const {
        rowsInput,
        racksInput,
        panelsInput,
        handleMouseDownContainer,
        handleMouseUpContainer,
        perspectiveMode,
        jid,
        json,
        readtt,
        maxtt,
        countMaxtt,
        sections,
        sectionsById,
        torqueTubeBySections,
        maxPanels,
    } = useContext(GridContext);

    useEffect(() => {
        countMaxtt();
        sectionsById();
        torqueTubeBySections();
        console.log(maxPanels("s-1"));
        // console.log(maxPanels(readtt[0][0]));
        // if (readtt && readtt[0]) {
        //     const secId = readtt[0][0].split(", ")[0];
        //     console.log(`section: ${secId}`);
        //     console.log(maxPanels(secId));
        // }
    }, [jid, json]);

    let containerStyle = { width: "100%", height: "100%" };

    useEffect(() => {
        const updateStyle = () => {
            containerStyle = { width: "100%", height: "100%" };
        };
        window.addEventListener("resize", updateStyle);
        window.removeEventListener("resize", updateStyle);
    }, [containerStyle]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const getColumnWidth = () => {
        return getRandomInt(120, 120);
    };

    const getRowHeight = (columnIndex, rowIndex) => {
        return getRandomInt(10, 120);
    };

    const torqueTubeContaier = ({ columnIndex, rowIndex, style }) => (
        <div className="flex items-center justify-center" style={{ ...style }}>
            {readtt && readtt[rowIndex][columnIndex] ? (<TorqueTubes
                style={style}
                columnIndex={columnIndex}
                rowIndex={rowIndex}
            ></TorqueTubes>)
                : (
                    <></>
                )}
        </div>
    );

    return (
        <>
            <div
                className={styles.container_racks}
                onMouseDown={handleMouseDownContainer}
                onMouseUp={handleMouseUpContainer}
            >
                <VariableSizeGrid
                    className="TorqueGrid"
                    columnCount={maxtt}
                    columnWidth={getColumnWidth}
                    height={900}
                    rowCount={sections}
                    rowHeight={getRowHeight} //Agregar espacio entre filas
                    width={900}
                    style={{
                        userSelect: "none",
                        width: containerStyle.width,
                        height: containerStyle.width,
                    }}
                    overscanColumnCount={2}
                    overscanRowCount={2}
                >
                    {torqueTubeContaier}
                </VariableSizeGrid>
            </div>
        </>
    );
}
