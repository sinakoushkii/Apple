import React, { useState } from "react";
import Card from "./Card";
import { cardData } from "@/constants";
import CardModal from "@components/CardModal";

const CardWrapper = () => {
  const [showCardModal,setShowCardModal]=useState(false)
  const [selectedCard,setSelectedCard]=useState(null)


  const showCardModalHandler=(card)=>{
    setShowCardModal(true)
    setSelectedCard(card)
  }
  const closeCardModalHandler=()=>{
    setShowCardModal(false)
  }

  return (
    <div className="mt-10 pt-6 container mx-auto px-7">
      <div className="container mx-auto px-7">
        <p className="text-3xl font-semibold md:text-5xl">Get to know iPhone</p>
      </div>
      <div className="card-wrapper mt-8 flex items-center justify-start gap-5">
        {cardData.map((item) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            img={item.img}
            mainImg={item.mainImg}
            description={item.description}
            showCardModalHandler={()=>showCardModalHandler(item)}
            closeCardModalHandler={()=>closeCardModalHandler()}
          />
        ))}

      </div>
      <CardModal />
    </div>
  );
};

export default CardWrapper;
