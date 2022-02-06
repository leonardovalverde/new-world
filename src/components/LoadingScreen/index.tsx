import React, { useEffect, useRef } from "react";
import { ScreenLoading } from "../../utils/LoadingGenerator/LoadingGenerator";
import Skull from "../../assets/svg/loadingImg.svg";
import * as Styled from "./style";

const LoadingScreen: React.FC = () => {
  const Loading = useRef();

  useEffect(() => {
    ScreenLoading(Loading.current, 1, 0, 5, "power4.out");
  }, []);

  return (
    <Styled.Container ref={Loading}>
      <img src={Skull} alt="loading..." />
      <span>0</span>
    </Styled.Container>
  );
};

export default LoadingScreen;
