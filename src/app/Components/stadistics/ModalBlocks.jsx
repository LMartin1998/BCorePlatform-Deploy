import { GridContext } from "@/app/contexts/GridContext";
import SelectBlock from "@/app/components/steps/SelectBlock";
import styles from "@/app/styles/SlideTop.module.css";
import { useContext } from "react";

export default function ModalBlocks({ setShowModal }) {
  const { setSelectedBlocks } = useContext(GridContext);

  return (
    <div className={styles.slide_top}>
      <div
        className="flex justify-center items-center rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
      >
        <button className="bg-transparent">Close</button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center bg-white">
        <div className="w-1/3 flex items-center justify-center">
          <button
            className="w-1/6 flex m-2 p-1 justify-center items-center rounded-lg hover:bg-blue-100"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedBlocks([]);
            }}
          >
            <p>Reset</p>
          </button>
        </div>
        <div className="w-11/12 h-full p-2 rounded-lg shadow-lg bg-white overflow-auto">
          <SelectBlock></SelectBlock>
        </div>
      </div>
    </div>
  );
}
