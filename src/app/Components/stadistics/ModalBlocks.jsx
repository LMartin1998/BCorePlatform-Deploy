import SelectBlock from "@/app/components/steps/SelectBlock";
import styles from "@/app/styles/SlideTop.module.css";

export default function ModalBlocks({ setShowModal }) {
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
      <div className="w-full h-full flex justify-center items-center bg-white">
        <div className="w-11/12 h-full p-2 rounded-lg shadow-lg bg-white overflow-auto">
          <SelectBlock></SelectBlock>
        </div>
      </div>
    </div>
  );
}
