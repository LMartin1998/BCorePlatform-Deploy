"use client";

import { useContext, useState, useRef, useEffect } from "react";
import { GridContext } from "@/app/contexts/GridContext";
import styles from "@/app/styles/Singlegrid.module.css";
import { ContainerRacks } from "../../components/ContainerRacksComponent";
import Header from "../../components/Header";
import { useParams } from "next/navigation";
import TopCards from "@/app/Components/TopCards";
import Dropdown from "@/app/Components/Dropdown";
import ToggleSwitch from "@/app/Components/ToggleSwitch";


export default function SingleGrid() {
    const params = useParams();
    const id = params.id;

    const {
        rowsInput,
        rowsInputChange,
        racksInput,
        racksInputChange,
        panelsInput,
        panelsInputChange,
        filterMode,
        changeFilterMode,
        json,
        updateJson,
        viewBox,
        jid,
        points,
        background,
        perspectiveMode,
    } = useContext(GridContext);

    useEffect(() => {
        updateJson(id);
    }, [id]);
    const [switchValue, setSwitchValue] = useState(false);

    const handleToggle = (value) => {
      setSwitchValue(value);
    };

    return (
        <div className="w-full h-[120vh] bg-gray-100">
            <Header></Header>
            <TopCards></TopCards>
            <div className="container pt-1 pb-1">
                <div className="flex justify-center">
                    <div className="w-4/6 pt-1 ttPanelsContainer">
                        <div className={`${styles.filter_and_tools} pb-2 pt-2`}>
                            <div className={styles.show_buttons}>
                                <button
                                    className={`show-torque-tube ${
                                        filterMode === 0 ? styles.active : ""
                                    }`}
                                    id="show-torque-tube"
                                    onClick={changeFilterMode}
                                >
                                    TT
                                </button>

                <button
                  className={`show-MODS ${
                    filterMode === 1 ? styles.active : ""
                  }`}
                  id="show-MODS"
                  onClick={changeFilterMode}
                >
                  MODS
                </button>
                <button
                  className={`show-panels ${
                    filterMode === 2 ? styles.active : ""
                  }`}
                  id="show-panels"
                  onClick={changeFilterMode}
                >
                  Panels
                </button>
                <button
                  className={`show-both ${
                    filterMode === 3 ? styles.active : ""
                  }`}
                  id="show-both"
                  onClick={changeFilterMode}
                >
                  Racks
                </button>
              </div>
              <Dropdown></Dropdown>
            </div>
            <div className={styles.grid_notes}>
              <ContainerRacks></ContainerRacks>
            </div>
            <div
              id={styles.delete_container}
              className={styles.delete_container}
            >
              <p>Selection Confirm</p>
              <div
                id={styles.confirm_container}
                className={styles.confirm_container}
              >
                <button className={styles.confirm_buttons} id="yes-button">
                  Yes
                </button>
                <button className={styles.confirm_buttons} id="no-button">
                  No
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-1/6 inputs_container"
            style={{ paddingTop: "56px", paddingLeft: "8px" }}
          >
            <div className="flex">
              <div className="w-full">
                <div className={styles.notes}>
                  <div className="mb-4 flex items-center flex-wrap">
                    <ToggleSwitch onChange={handleToggle} checked={switchValue}></ToggleSwitch>
                    <label className="text-sm font-medium text-gray-700 pl-2">{`${switchValue ? 'Portrait' : 'Landscape'} `}</label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="example-input"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rows:
                    </label>
                    <input
                      id="example-input"
                      type="number"
                      placeholder="Rows"
                      min="1"
                      value={rowsInput}
                      onChange={rowsInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="example-input"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Racks:
                    </label>
                    <input
                      id="example-input"
                      type="number"
                      placeholder="Racks"
                      min="1"
                      value={racksInput}
                      onChange={racksInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="example-input"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Panels:
                    </label>
                    <input
                      id="example-input"
                      type="number"
                      placeholder="Panels"
                      min="1"
                      value={panelsInput}
                      onChange={panelsInputChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-200 w-full text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Enviar
                  </button>
                </div>
            </div>
        </div>
    );
}
