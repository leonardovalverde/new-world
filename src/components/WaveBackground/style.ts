import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Smoke = styled.img`
  position: absolute;
  max-height: 100vh;
  z-index: 2;
`;

export const FlipedSmoke = styled(Smoke)`
  transform: scaleX(-1);
  z-index: 2;
`;

export const Mage = styled.img`
  position: absolute;
  max-height: 90vh;
  z-index: 2;
`;

export const Waves = styled.canvas`
  z-index: 1;
  position: absolute;
  height: 100vh;
`;

export const WavesFront = styled(Waves)`
  z-index: 3;
`;
