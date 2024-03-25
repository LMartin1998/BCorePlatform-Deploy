import { GridContext } from "../contexts/GridContext";
import styles from "@/app/styles/TorqueTube.module.css";
import { useContext, useEffect } from "react";
import { FixedSizeList } from "react-window";
import { Panels } from "./PanelsComponent";
import { changeState } from "../Utils/stateChanges";

export function TorqueTubes(props) {
    const {
        panelsInput,
        handleTorqueTubes,
        mouseDownTT,
        toolMode,
        filterMode,
        perspectiveMode,
        jid,
        readtt,
        panelsByTorqueTube,
        initialState,
    } = useContext(GridContext);

    const { state, show, updateTT } = handleTorqueTubes(
        props.columnIndex,
        props.rowIndex,
        toolMode,
    );

    const panelsContainer = ({ index, style }) => (
        <div className="flex flex-col justify-start items-center">
            {readtt && readtt[props.rowIndex][props.columnIndex] ? (
                <Panels
                    style={style}
                    columnIndex={props.columnIndex}
                    rowIndex={props.rowIndex}
                    index={index}
                />
            ) : (
                <></>
            )}
        </div>
    );

    return (
        <>

            <div
                id={`tt_${props.columnIndex}_${props.rowIndex}`}
                className={styles.torque_tube}
                style={{
                    ...props.style,
                    position: "relative",
                    top: "0",
                    left: "0",
                    height: perspectiveMode
                        ? "40%"
                        : readtt && readtt[props.rowIndex][props.columnIndex] ? `${45 * panelsByTorqueTube(readtt[props.rowIndex][props.columnIndex]) + 10}px` : "0",
                    width: perspectiveMode
                        ? readtt && readtt[props.rowIndex][props.columnIndex] ? `${45 * panelsByTorqueTube(readtt[props.rowIndex][props.columnIndex]) + 10}px` : "0"
                        : "40%",
                    backgroundColor: changeState(state),
                    pointerEvents: "auto",
                    opacity: !show ? "0.05" : "1",
                    visibility:
                        filterMode === 0 || filterMode === 3
                            ? "visible"
                            : "hidden",
                }}
                onMouseOver={mouseDownTT ? updateTT : undefined}
            >
                {
                    readtt && readtt[props.rowIndex][props.columnIndex] &&
                    filterMode !== 0 && (
                        <FixedSizeList
                            className="PanelGrid"
                            height={perspectiveMode ? 100 : 45 * panelsByTorqueTube(readtt[props.rowIndex][props.columnIndex])}
                            itemCount={
                                panelsByTorqueTube(readtt[props.rowIndex][props.columnIndex])
                            }
                            itemSize={45}
                            width={perspectiveMode ? 45 * panelsByTorqueTube(readtt[props.rowIndex][props.columnIndex]) : 100}
                            style={{
                                pointerEvents: "none",
                            }}
                            layout={perspectiveMode ? "horizontal" : "vertical"}
                        >
                            {panelsContainer}
                        </FixedSizeList>
                    )}
            </div >

        </>
    );
}
