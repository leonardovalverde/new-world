import React from "react";
import VideoSrc from "../../assets/oldwalls.mp4";
import BackgroundVideo from "../../components/BackgroundVideo";
import HellFireFx from "../../components/HellFireFx";

const Home: React.FC = () => {
  return (
    <HellFireFx>
      <BackgroundVideo
        videoSrc={VideoSrc}
        videoWidth="100vw"
        videoHeight="100vh"
        videoType="video/mp4"
        videoOverlay="linear-gradient(90deg, rgba(134,1,17,1) 0%, rgba(255,255,255,0) 50%, rgba(134,1,17,1) 100%)"
      />
    </HellFireFx>
  );
};

export default Home;
