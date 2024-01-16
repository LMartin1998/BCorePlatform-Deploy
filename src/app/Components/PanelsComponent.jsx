import styles from "../Styles/Panels.module.css";
import { PanelsLocalStorage } from "../LocalStorage/PanelsLocalStorage";
import { changeState } from "../Utils/stateChanges";
import { useContext } from "react";
import { GridContext } from "../Contexts/GridContext";

export function Panels(props) {
    const { handlePanels, mouseDownPanel } = useContext(GridContext);

    const { state, updateState } = handlePanels(
        props.columnIndex,
        props.rowIndex,
        props.index
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
                    }}
                    onMouseOver={mouseDownPanel ? updateState : undefined}
                ></div>
            </div>
        </>
    );
}
