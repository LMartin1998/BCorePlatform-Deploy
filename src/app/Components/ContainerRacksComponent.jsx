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
    } = useContext(GridContext);

    // const containerRacksRef = createRef();

    // const [dimension, setDimensions] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    //     const newDimension = () => {
    //         if (containerRacksRef.current) {
    //             const width = containerRacksRef.current.clientWidth;
    //             const height = containerRacksRef.current.clientHeight;
    //             setDimensions({ width, height });
    //         }
    //     };
    //     newDimension();

    //     window.addEventListener("resize", newDimension);

    //     return () => {
    //         window.removeEventListener("resize", newDimension);
    //     };
    // }, []);

    return (
        <>
            <div
                className={styles.container_racks}
                // ref={containerRacksRef}
                onMouseDown={handleMouseDownContainer}
                onMouseUp={handleMouseUpContainer}
            >
                <FixedSizeGrid
                    className="TorqueGrid"
                    columnCount={racksInput}
                    columnWidth={!perspectiveMode ? 45 * panelsInput + 50 : 120}
                    height={900}
                    rowCount={rowsInput}
                    rowHeight={!perspectiveMode ? 120 : 45 * panelsInput + 50} //Agregar espacio entre filas
                    width={900}
                    style={{
                        userSelect: "none",
                        width: "100%",
                        height: "100%",
                    }}
                    overscanColumnCount={2}
                    overscanRowCount={2}
                >
                    {({ columnIndex, rowIndex, style }) => (
                        <TorqueTubes
                            style={style}
                            columnIndex={columnIndex}
                            rowIndex={rowIndex}
                        ></TorqueTubes>
                    )}
                </FixedSizeGrid>
            </div>
        </>
    );
}
