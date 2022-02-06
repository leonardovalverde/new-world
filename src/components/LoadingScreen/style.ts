import styled from "styled-components";

export const Container = styled.div`
  background-color: #040720;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    z-index: 10;
    max-width: 250px;
  }
  span {
    position: absolute;
    z-index: 3;
    color: transparent;
    font-size: 72px;
    -webkit-animation: glow 2s ease-in-out infinite alternate;
    -moz-animation: glow 2s ease-in-out infinite alternate;
    animation: glow 2s ease-in-out infinite alternate;
    @-webkit-keyframes glow {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff,
          0 0 30px rgba(138, 43, 226, 1), 0 0 40px rgba(138, 43, 226, 1),
          0 0 50px rgba(138, 43, 226, 1), 0 0 60px rgba(138, 43, 226, 1),
          0 0 70px rgba(138, 43, 226, 1);
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
          0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
      }
    }
    @keyframes glow {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff,
          0 0 30px rgba(138, 43, 226, 1), 0 0 40px rgba(138, 43, 226, 1),
          0 0 50px rgba(138, 43, 226, 1), 0 0 60px rgba(138, 43, 226, 1),
          0 0 70px rgba(138, 43, 226, 1);
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
          0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
      }
    }
  }
`;
