import { FixedSizeGrid } from "react-window";
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
    } = useContext(GridContext);

    useEffect(() => {
        countMaxtt();
        sectionsById();
        torqueTubeBySections();
    }, [jid, json]);

    let containerStyle = { width: "100%", height: "100%" };

    useEffect(() => {
        const updateStyle = () => {
            containerStyle = { width: "100%", height: "100%" };
        };
        window.addEventListener("resize", updateStyle);
        window.removeEventListener("resize", updateStyle);
    }, [containerStyle]);

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
                <FixedSizeGrid
                    className="TorqueGrid"
                    columnCount={maxtt}
                    columnWidth={perspectiveMode ? 45 * panelsInput + 50 : 120}
                    height={900}
                    rowCount={sections}
                    rowHeight={perspectiveMode ? 120 : 45 * panelsInput + 50} //Agregar espacio entre filas
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
                </FixedSizeGrid>
            </div>
        </>
    );
}
