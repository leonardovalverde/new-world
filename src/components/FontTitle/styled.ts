import styled from "styled-components";

export const MainTitle = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  padding-top: 2rem;
  font-size: 4rem;
  font-family: "Azzurra";
  margin: 0;
  color: #fff;
  letter-spacing: 80px;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgba(138, 43, 226, 1),
        0 0 40px rgba(138, 43, 226, 1), 0 0 50px rgba(138, 43, 226, 1),
        0 0 60px rgba(138, 43, 226, 1), 0 0 70px rgba(138, 43, 226, 1);
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgba(138, 43, 226, 1),
        0 0 40px rgba(138, 43, 226, 1), 0 0 50px rgba(138, 43, 226, 1),
        0 0 60px rgba(138, 43, 226, 1), 0 0 70px rgba(138, 43, 226, 1);
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;
