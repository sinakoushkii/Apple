import React, { useEffect, useRef, useState } from "react";
import iphoneVideo from "../assets/videos/welcomeVideo.mp4";
import play from "../assets/icons/play.png";
import pause from "../assets/icons/pause.png";

const WelcomeVideo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoWidth, setVideoWidth] = useState(1600); // Initial video width
  const [videoPause, setVideoPause] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Calculate the new video width based on scroll direction
      if (currentScrollY > scrollY) {
        // Scrolling down: decrease width
        setVideoWidth((prevWidth) => Math.max(prevWidth - 5, 1400)); // Minimum width: 900px
      } else if (currentScrollY < scrollY) {
        // Scrolling up: increase width
        setVideoWidth((prevWidth) => Math.min(prevWidth + 5, 1600)); // Maximum width: 1000px
      }

      // Update scroll position
      setScrollY(currentScrollY);
    };

    // Listen for the "loadedmetadata" event to get video dimensions
    // if (video) {
    //   video.addEventListener("loadedmetadata", handleLoadedMetadata);
    // }

    window.addEventListener("scroll", handleScroll);

    return () => {
      //   if (video) {
      //     video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      //   }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const videoPauseHandler = () => {
    setVideoPause((prev) => !prev);
    if(videoPause){
        videoRef.current.play();
    }else{
        videoRef.current.pause();
    }
  };

  return (
    <div className="container mx-auto mt-6 mb-96 pb-96">
      <div className="w-full flex items-center justify-between px-16 py-9">
        <span className="text-7xl font-semibold">iPhone</span>
        <span className="text-3xl font-semibold">Design to be loved.</span>
      </div>
      <div className="w-full mt-9 flex items-center justify-center relative">
        <video
          className={`${videoWidth < 1600 ? "welcomeVideo" : ""}`}
          //   controls={true}
          ref={videoRef}
          loop={true}
          muted={true}
          autoPlay={true}
          width={videoWidth}
        >
          <source src={iphoneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span className="rounded-full bg-gray-400 p-3 absolute left-0 bottom-0">
          <img
            width={30}
            height={30}
            onClick={() => videoPauseHandler()}
            src={`${videoPause ? play : pause}`}
          />
        </span>
      </div>
    </div>
  );
};

export default WelcomeVideo;
