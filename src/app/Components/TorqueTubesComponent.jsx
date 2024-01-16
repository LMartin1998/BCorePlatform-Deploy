import { GridContext } from "../Contexts/GridContext";
import styles from "../Styles/TorqueTube.module.css";
import { useContext, useEffect } from "react";
import { FixedSizeList } from "react-window";
import { Panels } from "./PanelsComponent";
import { TorqueTubesLocalStorage } from "../LocalStorage/TorqueTubesLocalStorage";
import { changeState } from "../Utils/stateChanges";

export function TorqueTubes(props) {
    const { panelsInput, handleTorqueTubes, mouseDownTT } =
        useContext(GridContext);

    const { state, updateState } = handleTorqueTubes(
        props.columnIndex,
        props.rowIndex
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
                        height: `${45 * panelsInput + 10}px`,
                        width: "40%",
                        backgroundColor: changeState(state),
                        pointerEvents: "auto",
                    }}
                    onMouseOver={mouseDownTT ? updateState : undefined}
                >
                    <FixedSizeList
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
                </div>
            </div>
        </>
    );
}
