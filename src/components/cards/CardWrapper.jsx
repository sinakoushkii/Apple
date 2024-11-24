import React, { useState } from "react";
import Card from "./Card";
import { cardData } from "@/constants";
import CardModal from "@components/CardModal";

const CardWrapper = () => {
  const body = document.getElementById("root");
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const showCardModalHandler = (card) => {
    setShowCardModal(true);
    setSelectedCard(card);
  };
  const closeCardModalHandler = () => {
    setShowCardModal(false);
  };

  return (
    <div
      className={`${
        showCardModal ? "blur" : ""
      }mt-10 pt-6 container mx-auto px-7`}
    >
      <div className="container mx-auto px-7">
        <p className="text-3xl font-semibold md:text-5xl">Get to know iPhone</p>
      </div>
      <div className="card-wrapper mt-8 flex items-center justify-start gap-5">
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            img={item.img}
            mainImg={item.mainImg}
            description={item.description}
            showCardModalHandler={() => showCardModalHandler(item)}
          />
        ))}
      </div>
      {showCardModal && (
        <CardModal card={selectedCard} onClose={closeCardModalHandler} />
      )}
      {showCardModal
        ? body.classList.add("blur")
        : body.classList.remove("blur")}
    </div>
  );
};

export default CardWrapper;
