"use client";

import { useContext, useState, useRef } from "react";
import { GridContext } from "../contexts/GridContext";
import { BootstrapLoader } from "../document/page";
import styles from "../Styles/Singlegrid.module.css";
import { ContainerRacks } from "../components/ContainerRacksComponent";

export default function SingleGrid() {
    const {
        rowsInput,
        rowsInputChange,
        racksInput,
        racksInputChange,
        panelsInput,
        panelsInputChange,
    } = useContext(GridContext);

    return (
        <>
            <BootstrapLoader></BootstrapLoader>
            <div className="container pt-1 pb-1">
                <div className="row pt-3 stadistics">
                    <div className="col-4">
                        <div
                            className={styles.squares_container}
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(255, 200, 100, 0.8), rgba(255, 255, 255, 0.2))",
                            }}
                        >
                            <div className={styles.container_labels}>
                                <div
                                    className={`${styles.left_labels} ${styles.MC}`}
                                >
                                    MC
                                </div>
                                <div className={styles.right_labels}>
                                    Mechanical
                                </div>
                            </div>
                            <div className={styles.information_container}>
                                <div
                                    className={`${styles.simbology_container} ${styles.chart_mechanical}`}
                                >
                                    <p className="title">Chart</p>
                                    <img
                                        width="64"
                                        height="64"
                                        src="https://img.icons8.com/wired/64/chart.png"
                                        alt="chart"
                                    />
                                </div>
                                <div className={styles.progress_container}>
                                    <p className="title">Progress</p>
                                    <p className="percentage"></p>
                                </div>
                                <div className={styles.schedule_container}>
                                    <p className="title">Schedule</p>
                                    <input
                                        type="text"
                                        className="form-control datepicker"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div
                            className={styles.squares_container}
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(73, 190, 178, 0.65), rgba(255, 255, 255, 0.1))",
                            }}
                        >
                            <div className={styles.container_labels}>
                                <div
                                    className={`${styles.left_labels} ${styles.EL}`}
                                >
                                    EL
                                </div>
                                <div className={styles.right_labels}>
                                    Electrical
                                </div>
                            </div>
                            <div className={styles.information_container}>
                                <div className={styles.simbology_container}>
                                    <p className="title">Chart</p>
                                    <img
                                        width="64"
                                        height="64"
                                        src="https://img.icons8.com/wired/64/chart.png"
                                        alt="chart"
                                    />
                                </div>
                                <div className={styles.progress_container}>
                                    <p className="title">Progress</p>
                                    <p className="percentage">0%</p>
                                </div>
                                <div className={styles.schedule_container}>
                                    <p className="title">Schedule</p>
                                    <input
                                        type="text"
                                        className="form-control datepicker"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div
                            className={styles.squares_container}
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(249, 0, 18, 0.65), rgba(255, 255, 255, 0.1))",
                            }}
                        >
                            <div className={styles.container_labels}>
                                <div
                                    className={`${styles.left_labels} ${styles.TE}`}
                                >
                                    TE
                                </div>
                                <div className={styles.right_labels}>Teams</div>
                            </div>
                            <div className={styles.information_container}>
                                <div className={styles.simbology_container}>
                                    <p className="title">Chart</p>
                                    <img
                                        width="64"
                                        height="64"
                                        src="https://img.icons8.com/wired/64/chart.png"
                                        alt="chart"
                                    />
                                </div>
                                <div className={styles.progress_container}>
                                    <p className="title">Progress</p>
                                    <p className="percentage">0%</p>
                                </div>
                                <div className={styles.schedule_container}>
                                    <p className="title">Schedule</p>
                                    <input
                                        type="text"
                                        className="form-control datepicker"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 pt-1 ttPanelsContainer">
                        <div className={`${styles.filter_and_tools} pb-2 pt-2`}>
                            <div className={styles.show_buttons}>
                                <button
                                    className={`show-torque-tube`}
                                    id="show-torque-tube"
                                >
                                    TT
                                </button>

                                <button className={`show-MODS`} id="show-MODS">
                                    MODS
                                </button>
                                <button
                                    className={`show-panels`}
                                    id="show-panels"
                                >
                                    Panels
                                </button>
                                <button className={`show-both`} id="show-both">
                                    Racks
                                </button>
                            </div>
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tools
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            className={"dropdown-item"}
                                            id="progress"
                                        >
                                            Progress
                                        </a>
                                    </li>
                                    <li>
                                        <a className={"dropdown-item"} id="spr">
                                            Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={"dropdown-item"}
                                            id="hide"
                                        >
                                            Hide
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={"dropdown-item"}
                                            id="oneHalfTT"
                                        >
                                            One half torque tube
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={"dropdown-item"}
                                            id="quarterHalfTT"
                                        >
                                            Quarter torque tube
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={"dropdown-item"}
                                            id="threeQuartersHalfTT"
                                        >
                                            Three quarters torque tube
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                                <button
                                    className={styles.confirm_buttons}
                                    id="yes-button"
                                >
                                    Yes
                                </button>
                                <button
                                    className={styles.confirm_buttons}
                                    id="no-button"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`col-2 ${styles.inputs_container}`}
                        style={{ paddingTop: "48px" }}
                    >
                        <div className="row">
                            <div className="col">
                                <div className={styles.notes}>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            id="form-check-label"
                                            htmlFor="flexSwitchCheckDefault"
                                        >
                                            Portrait Mode
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            id="inputRows"
                                            type="number"
                                            className="form-control"
                                            placeholder="Rows"
                                            min="1"
                                            defaultValue={rowsInput}
                                            onChange={rowsInputChange}
                                        />
                                        <label htmlFor="inputRows">Rows</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            id="inputRacks"
                                            type="number"
                                            className="form-control"
                                            placeholder="Racks"
                                            min="1"
                                            defaultValue={racksInput}
                                            onChange={racksInputChange}
                                        />
                                        <label htmlFor="inputRacks">
                                            Racks
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            id="inputPanels"
                                            type="number"
                                            className="form-control"
                                            placeholder="Panels"
                                            min="1"
                                            defaultValue={panelsInput}
                                            onChange={panelsInputChange}
                                        />
                                        <label htmlFor="inputPanels">
                                            Panels
                                        </label>
                                    </div>
                                    <button
                                        id="submitButton"
                                        type="button"
                                        className="btn btn-secondary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-1">
                            <div className="col-12">
                                <div className={styles.notes}>
                                    <div className={styles.map_div}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
