import styles from "../Styles/Panels.module.css";
import { changeState } from "../utils/stateChanges";
import { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

export function Panels(props) {
    const { handlePanels, mouseDownPanel, toolMode, filterMode } =
        useContext(GridContext);

    const { state, show, updatePanel } = handlePanels(
        props.columnIndex,
        props.rowIndex,
        props.index,
        toolMode
    );

    return (
        <>
            <div
                className={styles.panel_container}
                style={{ ...props.style, pointerEvents: "none" }}
            >
                <div
                    id={`panel_${props.columnIndex}_${props.rowIndex}_${props.index}`}
                    className={styles.panel}
                    style={{
                        ...props.style,
                        height: `${35}px`,
                        top: "0",
                        position: "relative",
                        pointerEvents: "auto",
                        backgroundColor: changeState(state),
                        opacity: !show ? "0.05" : "1",
                        visibility: filterMode === 0 ? "hidde" : "visible",
                    }}
                    onMouseOver={mouseDownPanel ? updatePanel : undefined}
                ></div>
            </div>
        </>
    );
}
