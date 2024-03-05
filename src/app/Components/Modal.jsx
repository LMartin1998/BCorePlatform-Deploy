import ReactDOM from "react-dom";
import styles from "@/app/styles/SlideTop.module.css";

export default function Modal({ onClose, children }) {
  const modalContent = (
    <dialog className={`fixed z-50 ${styles.slide_top}`} open>
      <div className="w-full h-full rounded-lg shadow-lg bg-white">
        <div className="flex w-full justify-center items-center border-b border-gray-300">
          {children}
        </div>
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
