import React, { useEffect, useRef, useState } from "react";
import iphoneVideo from "../assets/videos/welcomeVideo.mp4";

const WelcomeVideo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoWidth, setVideoWidth] = useState(1600); // Initial video width
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Calculate the new video width based on scroll direction
      if (currentScrollY > scrollY) {
        // Scrolling down: decrease width
        setVideoWidth((prevWidth) => Math.max(prevWidth - 7, 1370)); // Minimum width: 900px
      } else if (currentScrollY < scrollY) {
        // Scrolling up: increase width
        setVideoWidth((prevWidth) => Math.min(prevWidth + 7, 1600)); // Maximum width: 1000px
      }

      // Update scroll position
      setScrollY(currentScrollY);
    };

    // Listen for the "loadedmetadata" event to get video dimensions
    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="container mx-auto mt-6 mb-96 pb-96">
      <div className="w-full flex items-center justify-between px-16 py-9">
        <span className="text-7xl font-semibold">iPhone</span>
        <span className="text-3xl font-semibold">Design to be loved.</span>
      </div>
      <div className="w-full mt-9 flex items-center justify-center">
        <video
          className={`${videoWidth < 1600 ? "welcomeVideo" : ""}`}
          controls={true}
          loop={true}
          muted={true}
          autoPlay={true}
          width={videoWidth}
        >
          <source src={iphoneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default WelcomeVideo;
