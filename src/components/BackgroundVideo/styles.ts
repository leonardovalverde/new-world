import styled from "styled-components";
import { VideoStyleProps } from "./types";

export const VideoOverlay = styled.div<VideoStyleProps>`
  position: relative;
  pointer-events: none;
  width: ${({ videoWidth }) => videoWidth || "300px"};
  height: ${({ videoHeight }) => videoHeight || "300px"};
  &::before {
    content: "";
    width: ${({ videoWidth }) => videoWidth || "300px"};
    height: ${({ videoHeight }) => videoHeight || "300px"};
    position: absolute;
    background: ${({ videoOverlay }) => videoOverlay || "rgb(0, 0, 0)"};
    opacity: ${({ videoOverlayOpacity }) => videoOverlayOpacity || "0.5"};
    top: 0;
    left: 0;
  }
`;

export const Video = styled.video<VideoStyleProps>`
  width: ${({ videoWidth }) => videoWidth || "300px"};
  border-radius: ${({ videoRadius }) => videoRadius || "0"};
  height: ${({ videoHeight }) => videoHeight || "300px"};
  object-fit: cover;
  max-height: 100vh;
  max-width: 100vw;
`;
