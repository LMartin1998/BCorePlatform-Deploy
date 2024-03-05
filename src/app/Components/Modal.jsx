import ReactDOM from "react-dom";
import styles from "@/app/styles/SlideTop.module.css";

export default function Modal({ onClose, children }) {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <dialog
      className={`absolute min-w-screen max-w-screen min-h-screen max-h-screen z-50 ${styles.slide_top}`}
      open
    >
      <div
        className="flex w-11/12 h-11/12 rounded-lg shadow-lg bg-white"
        onClick={handleClose}
      >
        {children}
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
