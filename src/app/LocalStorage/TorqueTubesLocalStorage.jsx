import { useState, useEffect } from "react";

export function TorqueTubesLocalStorage(columnIndex, rowIndex) {
    const initialState = {
        state: 0,
    };

    const key = `tt_${columnIndex}_${rowIndex}`;

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
