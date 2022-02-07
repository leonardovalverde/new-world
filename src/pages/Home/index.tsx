import React from "react";
import * as Styled from "./styles";
import WaveBackground from "../../components/WaveBackground";
import FontTitle from "../../components/FontTitle";
import LoadingScreen from "../../components/LoadingScreen";

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <LoadingScreen />
      <FontTitle title="AZZURA" />
      <WaveBackground />
    </Styled.Container>
  );
};

export default Home;
