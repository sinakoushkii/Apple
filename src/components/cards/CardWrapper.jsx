import React from "react";
import Card from "./Card";
import { cardData } from "@/constants";

const CardWrapper = () => {
  return (
    <div className="mt-10 pt-6 container mx-auto px-7">
      <div className="container mx-auto px-7">
        <p className="text-3xl font-semibold md:text-5xl">Get to know iPhone</p>
      </div>
      <div className="mt-8 flex items-center justify-start gap-5">
        {cardData.map((item) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            img={item.img}
            mainImg={item.mainImg}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
