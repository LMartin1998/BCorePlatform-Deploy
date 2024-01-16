import { useState, useEffect } from "react";

export function PanelsLocalStorage(columnIndex, rowIndex, index) {
    const initialState = {
        state: 0,
    };

    const key = `panel_${columnIndex}_${rowIndex}_${index}`;

    const [state, setNewState] = useState(() => {
        if (typeof window !== "undefined") {
            const storedState = JSON.parse(localStorage.getItem(key));
            return storedState ? storedState.state : initialState.state;
        }
        return initialState.state;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ state: state }));
    }, [key, state]);

    const updateState = (e) => {
        e.stopPropagation();
        const newState = state + 1;
        setNewState(newState);
    };

    return {
        state,
        updateState,
    };
}
