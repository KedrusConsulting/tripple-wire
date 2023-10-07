import styled from "styled-components";
import Image from "../Image";

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #041e0e;
  background-image: linear-gradient(rgba(3, 18, 9, 0.87), rgba(3, 18, 9, 0.87)),
    url("https://uploads-ssl.webflow.com/64f4e74b8e765ab51f7c2ec1/6503683be895777a702e0c4a_ptn.png");
  background-position: 0 0, 0 0;
  background-size: auto, 70px;

  img {
    animation: pulsate 2s infinite;
  }

  @keyframes pulsate {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <Image src="/logo.png" />
    </StyledLoader>
  );
};

export default Loader;
