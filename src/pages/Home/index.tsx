import React from "react";
import VideoSrc from "../../assets/oldwalls.mp4";
import BackgroundVideo from "../../components/BackgroundVideo";

const Home: React.FC = () => {
  return (
    <BackgroundVideo
      videoSrc={VideoSrc}
      videoWidth="100vw"
      videoHeight="100vh"
      videoType="video/mp4"
    />
  );
};

export default Home;
