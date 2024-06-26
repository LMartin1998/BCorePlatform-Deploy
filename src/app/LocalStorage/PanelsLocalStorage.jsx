import { useState, useEffect } from "react";

export function PanelsLocalStorage(columnIndex, rowIndex, index, toolMode, initialState) {
    // const initialState = {
    //     state: 0,
    //     show: true,
    // };

    const key = `panel_${columnIndex}_${rowIndex}_${index}`;

    const [state, setNewState] = useState(() => {
        if (typeof window !== "undefined") {
            const storedState = JSON.parse(localStorage.getItem(key));
            return storedState ? storedState.state : initialState.state;
        }
        return initialState.state;
    });

    const [show, setShow] = useState(() => {
        if (typeof window !== "undefined") {
            const storedState = JSON.parse(localStorage.getItem(key));
            return storedState ? storedState.show : initialState.show;
        }
        return initialState.show;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ state: state, show: show }));
    }, [key, state, show]);

    const updateState = () => {
        const newState = state + 1;
        setNewState(newState);
    };

    const updateShow = () => {
        const newShow = !show;
        setShow(newShow);
    };

    const updatePanel = (e) => {
        e.stopPropagation();
        if (toolMode === 0 && show) {
            updateState();
        } else if (toolMode === 2) {
            updateShow();
        }
    };

    return {
        state,
        show,
        updatePanel,
    };
}
