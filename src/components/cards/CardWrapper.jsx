import React, { useRef, useState } from "react";
import Card from "./Card";
import { cardData } from "@/constants";
import CardModal from "@components/CardModal";
import leftBtn from "../../assets/icons/left.png"
import rightBtn from "../../assets/icons/right.png"

const CardWrapper = () => {
  // console.log(document.getElementById("root")
  //states to handle the card modal
  const body = document.getElementById("root");
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //states to handle the slider
  const itemWidth = 220;
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  // card modal functions
  const showCardModalHandler = (card) => {
    setShowCardModal(true);
    setSelectedCard(card);
  };
  const closeCardModalHandler = () => {
    setShowCardModal(false);
  };

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
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
      <div className="flex flex-col">
        <div
          ref={containerRef}
          className="card-wrapper mt-8 flex items-center justify-start gap-5 scroll-smooth"
        >
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
        <div className="flex items-center justify-center gap-3 self-end mt-3">
          <img width={30} height={30} src={leftBtn} onClick={()=>handleScroll(-itemWidth)} />
          <img width={30} height={30}src={rightBtn} onClick={()=>handleScroll(itemWidth)}/>
        </div>
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
