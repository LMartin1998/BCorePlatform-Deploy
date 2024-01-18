import { useContext, useEffect, useState } from "react";
import { GridContext } from "../contexts/GridContext";

const ToggleButton = () => {
    const { perspectiveMode, changePerspectiveMode } = useContext(GridContext);

    useEffect(() => {
        changePerspectiveMode;
    }, [changePerspectiveMode]);

    return (
        <label
            className={`${
                perspectiveMode ? "bg-primary" : "bg-gray-300"
            } relative inline-block w-10 h-6 rounded-full cursor-pointer transition-colors duration-300`}
        >
            <input
                type="checkbox"
                className="sr-only"
                checked={perspectiveMode}
                onChange={changePerspectiveMode}
            />
            <span
                className={`${
                    perspectiveMode ? "translate-x-full" : "translate-x-0"
                } inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ease-in-out`}
            />
        </label>
    );
};

export default ToggleButton;
