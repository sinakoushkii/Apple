import { topSliderLinks } from "@/constants";
import React, { useRef, useState } from "react";

const TopSlider = () => {
    
  const itemWidth = 150;
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    console.log("first")
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition)
    containerRef.current.scrollLeft=newScrollPosition
  };


  return (
    <div className="w-full">
      <div >
        <div ref={containerRef} className="slider w-full py-4 border-4">
          {topSliderLinks.map((item) => (
            <div className="sliderItem flex flex-col items-center border-2px-4">
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
      </div>
      <button className="mr-6" onClick={()=>{handleScroll(-itemWidth)}}>left</button>
      <button onClick={()=>{handleScroll(itemWidth)}}>right</button>
    </div>
  );
};

export default TopSlider;
