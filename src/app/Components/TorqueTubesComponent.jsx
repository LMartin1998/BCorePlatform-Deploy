import { GridContext } from "../contexts/GridContext";
import styles from "@/app/styles/TorqueTube.module.css";
import { useContext, useEffect } from "react";
import { FixedSizeList } from "react-window";
import { Panels } from "./PanelsComponent";
import { changeState } from "../utils/stateChanges";

export function TorqueTubes(props) {
    const {
        panelsInput,
        handleTorqueTubes,
        mouseDownTT,
        toolMode,
        filterMode,
        perspectiveMode,
    } = useContext(GridContext);

    const { state, show, updateTT } = handleTorqueTubes(
        props.columnIndex,
        props.rowIndex,
        toolMode
    );

    return (
        <>
            <div
                className={styles.torque_tube_container}
                style={{ ...props.style, pointerEvents: "none" }}
            >
                <div
                    id={`tt_${props.columnIndex}_${props.rowIndex}`}
                    className={styles.torque_tube}
                    style={{
                        ...props.style,
                        position: "relative",
                        top: "0",
                        left: "0",
                        height: !perspectiveMode
                            ? "40%"
                            : `${45 * panelsInput + 10}px`,
                        width: !perspectiveMode
                            ? `${45 * panelsInput + 10}px`
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
                    {filterMode !== 0 && (
                        <FixedSizeList
                            className="PanelGrid"
                            height={45 * panelsInput}
                            itemCount={panelsInput}
                            itemSize={45}
                            width={100}
                            style={{ pointerEvents: "none" }}
                        >
                            {({ index, style }) => (
                                <Panels
                                    style={style}
                                    columnIndex={props.columnIndex}
                                    rowIndex={props.rowIndex}
                                    index={index}
                                ></Panels>
                            )}
                        </FixedSizeList>
                    )}
                </div>
            </div>
        </>
    );
}
