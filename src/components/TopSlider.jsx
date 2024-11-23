import { topSliderLinks } from "@/constants";
import React, { useRef, useState } from "react";
import left from "../assets/icons/left.png";
import right from "../assets/icons/right.png";

const TopSlider = () => {
  const itemWidth = 150;
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="topSliderContainer relative">
      <button
        className={`scrollButtonHandler leftBtn block xl:hidden ${
          scrollPosition === 0 ? "hidden" : "block"
        }`}
        onClick={() => handleScroll(-itemWidth)}
      >
        <img width={15} height={15} src={left} />
      </button>
      <div
        ref={containerRef}
        className="slider w-full py-5 border-r-2 border-l-2 border-slate-300"
      >
        {topSliderLinks.map((item) => (
          <div
            key={item.label}
            className="sliderItem flex flex-col items-center border-2px-4"
          >
            <img
              width={45}
              height={40}
              style={{ height: "50px" }}
              src={item.route}
            />
            <span className="text-xs text-center" style={{ width: "90px" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <button
        className="scrollButtonHandler RightBtn block xl:hidden"
        onClick={() => handleScroll(itemWidth)}
      >
        <img width={15} height={15} src={right} />
      </button>
    </div>
  );
};

export default TopSlider;
