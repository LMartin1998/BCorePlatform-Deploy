import ReactDOM from "react-dom";

export default function SettingsModal({ onClose, children }) {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="absolute top-0 right-0 pl-1 flex flex-col w-full min-h-screen justify-start rounded-lg shadow-xl bg-white md:w-5/6 lg:w-1/4">
      {children}
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
