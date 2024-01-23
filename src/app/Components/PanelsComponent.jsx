import styles from "../Styles/Panels.module.css";
import { changeState } from "../utils/stateChanges";
import { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

export function Panels(props) {
    const {
        handlePanels,
        mouseDownPanel,
        toolMode,
        filterMode,
        perspectiveMode,
    } = useContext(GridContext);

    const { state, show, updatePanel } = handlePanels(
        props.columnIndex,
        props.rowIndex,
        props.index,
        toolMode
    );

    return (
        <>
            <div
                id={`panel_${props.columnIndex}_${props.rowIndex}_${props.index}`}
                className={styles.panel}
                style={{
                    ...props.style,
                    height: perspectiveMode ? "100%" : "35px",
                    width: perspectiveMode ? "35px" : "100%",
                    // top: "0",
                    // left: "0",
                    // position: "relative",
                    pointerEvents: "auto",
                    backgroundColor: changeState(state),
                    opacity: !show ? "0.05" : "1",
                    visibility: filterMode === 0 ? "hidde" : "visible",
                }}
                onMouseOver={mouseDownPanel ? updatePanel : undefined}
            ></div>
        </>
    );
}
