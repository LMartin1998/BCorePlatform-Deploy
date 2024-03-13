import ReactDOM from "react-dom";
import styles from "@/app/styles/SlideTop.module.css";

export default function Modal({ onClose, children }) {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <dialog
      className={`absolute min-w-screen max-w-screen min-h-screen max-h-screen ${styles.slide_top} bg-gray-200`}
      open
    >
      <div
        className="flex w-11/12 h-5/6 justify-center items-center rounded-lg shadow-lg bg-white z-50"
        onClick={handleClose}
      >
        {children}
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
