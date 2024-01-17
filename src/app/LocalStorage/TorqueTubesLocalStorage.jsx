import { useState, useEffect } from "react";

export function TorqueTubesLocalStorage(columnIndex, rowIndex, toolMode) {
    const initialState = {
        state: 0,
        show: true,
    };

    const key = `tt_${columnIndex}_${rowIndex}`;

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

    const updateTT = (e) => {
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
        updateTT,
    };
}