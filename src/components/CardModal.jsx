import ReactDom from "react-dom";
import React from "react";
import closeBtn from "../assets/icons/close.png";

const CardModal = ({ card, children, onClose }) => {
  const closePortal = (e) => {
    if (e.target.id === "modalOverlay" || e.target.id === "closeModalBtn") {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <div
      className="modal-overlay"
      id="modalOverlay"
      onClick={(e) => closePortal(e)}
    >
      <div className="modal relative overflow-auto">
        <div className="bg-slate-300 rounded-full px-2 py-2 cursor-pointer fixed top-3 right-3">
          <img src={closeBtn} id="closeModalBtn" width={20} height={20} />
        </div>
        <div>
          <h3 className="text-base font-semibold">{card.subTitle}</h3>
          <h2 className="text-3xl font-semibold mt-2">{card.title}</h2>
        </div>
        <div className="flex items-center justify-center gap-5 w-full py-3 mt-5">
          <p className="w-1/2 text-3xl text-slate-500">{card.description}</p>
          <div className="w-1/2">
            <img src={card.img} className="w-full object-cover rounded-xl" />
          </div>
        </div>
        {children}
      {/* <p className="w-1/2 text-3xl text-slate-500">{card.description}</p> */}
      </div>
      
    </div>,
    document.getElementById("portal")
  );
};

export default CardModal;
