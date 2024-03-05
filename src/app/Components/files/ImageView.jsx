import { useContext } from "react";
import { FilesContext } from "@/app/contexts/FilesContext";
import styles from "@/app/styles/SlideTop.module.css";

export default function ImageView() {
  const { image, setShowImage } = useContext(FilesContext);

  return (
    <div
      className={`flex w-screen h-screen overflow-hidden ${styles.slide_top}`}
    >
      <div
        className="flex justify-center items-center rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
          setShowImage(false);
        }}
      >
        <button className="bg-transparent">Close</button>
      </div>
      <div className="w-full h-full rounded-lg shadow-lg bg-white">
        <div className="flex w-full h-full justify-center items-center border-b border-gray-300">
          <img
            className="flex w-11/12 h-full mt-4 mb-4"
            loading="lazy"
            src={image}
          ></img>
        </div>
      </div>
    </div>
  );
}
