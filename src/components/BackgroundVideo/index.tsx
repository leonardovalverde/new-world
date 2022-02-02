import React from "react";
import * as Styled from "./styles";
import { VideoProps } from "./types";

const BackgroundVideo: React.FC<VideoProps> = ({
  videoWidth,
  videoRadius,
  videoSrc,
  videoType,
  videoHeight,
  videoOverlay,
}: VideoProps) => {
  return (
    <Styled.VideoOverlay
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      videoOverlay={videoOverlay}
    >
      <Styled.Video
        autoPlay
        muted
        loop
        videoWidth={videoWidth}
        videoHeight={videoHeight}
        videoRadius={videoRadius}
      >
        <source src={videoSrc} type={videoType} />
      </Styled.Video>
    </Styled.VideoOverlay>
  );
};

export default BackgroundVideo;
