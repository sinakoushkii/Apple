import ReactDom from "react-dom";
import React from "react";

const CardModal = ({ card, children, onClose }) => {
  const closePortal = (e) => {
    if (
      e.target.className === "modal-overlay" ||
      e.target.className === "closeModalBtn"
    ) {
        onClose();
    }

  };

  return ReactDom.createPortal(
    <div className="modal-overlay" onClick={(e) => closePortal(e)}>
      <div className="modal">
        <button className="closeModalBtn" onClick={(e) => closePortal(e)}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default CardModal;
