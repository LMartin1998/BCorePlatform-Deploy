"use client";

import { useContext, useState, useRef, useEffect } from "react";
import { GridContext } from "@/app/contexts/GridContext";
import { BootstrapLoader } from "@/app/document/page";
import styles from "@/app/styles/Singlegrid.module.css";
import { ContainerRacks } from "../../components/ContainerRacksComponent";
import Header from "../../components/Header";
import { useParams } from "next/navigation";
import data from "@/app/data/data";
import ToggleButton from "@/app/Components/ToggleButton";
import TopCards from "@/app/Components/TopCards";
import Dropdown from "@/app/Components/Dropdown";

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
        changeToolMode,
        filterMode,
        changeFilterMode,
        json,
        updateJson,
        viewBox,
        jid,
        points,
        background,
    } = useContext(GridContext);

    useEffect(() => {
        updateJson(id);
    }, [id]);

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
                  <div className="">
                    <ToggleButton></ToggleButton>
                    <label>Portrait Mode</label>
                  </div>
                  {/* <div className="form-floating mb-3">
                    <input
                      id="inputRows"
                      type="number"
                      className="form-control"
                      placeholder="Rows"
                      min="1"
                      defaultValue={!item.rows ? rowsInput : item.rows}
                      onChange={rowsInputChange}
                    />
                    <label htmlFor="inputRows">Rows</label>
                  </div> */}
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
                  {/* <div className="form-floating mb-3">
                    <input
                      id="inputRacks"
                      type="number"
                      className="form-control"
                      placeholder="Racks"
                      min="1"
                      defaultValue={!item.racks ? racksInput : item.racks}
                      onChange={racksInputChange}
                    />
                    <label htmlFor="inputRacks">Racks</label>
                  </div> */}
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
                  {/* <div className="form-floating mb-3">
                    <input
                      id="inputPanels"
                      type="number"
                      className="form-control"
                      placeholder="Panels"
                      min="1"
                      defaultValue={!item.panels ? panelsInput : item.panels}
                      onChange={panelsInputChange}
                    />
                    <label htmlFor="inputPanels">Panels</label>
                  </div> */}
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
            <div className="flex pt-1">
              <div className="w-full">
                <div className={styles.notes}>
                  <div className={styles.map_div}>
                    <svg
                      version="1.1"
                      id="BLACKBEAR"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox='0 0 100 100'
                      style={{
                        enableBackground: background,
                      }}
                      xmlSpace="preserve"
                    >
                      <polygon
                        id={jid}
                        className={styles.st0}
                        points={points}
                      />
                    </svg>
                    <p>{jid}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
