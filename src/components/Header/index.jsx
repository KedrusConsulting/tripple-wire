import { styled } from "styled-components";
import { devices } from "../../breakpoints";

const Header = styled.header`
  padding-top: 8.8rem;
`;

const Hero = styled.div`
  outline-offset: 0px;
  -webkit-text-fill-color: inherit;
  object-fit: fill;
  background-color: #205133;
  background-clip: padding-box;
  border: 0.9rem #000;
  border-radius: 1.5rem;
  outline: 0.9rem dotted #00f076;
  margin-inline: auto;
  /* padding: 0 0 4rem; */

  overflow: visible;
  box-shadow: -2px 0 0.5rem rgba(0, 0, 0, 0.2);
  position: relative;
  /* z-index: 2; */

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    filter: blur(20px);
    background-color: #3fe47f;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #205133;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 1.5rem;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    z-index: -1;
  }
`;

const HeroSub = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  max-width: 44.3rem;
  background-color: #0e431c;
  border-bottom-right-radius: 4rem;
  border-bottom-left-radius: 4rem;
  margin-inline: auto;
  margin-bottom: 2.4rem;
  padding: 3.2rem 1.6rem;

  @media only screen and (${devices.sm}) {
    max-width: 70%;
    justify-content: center;
    text-align: center;
    padding: 1.6rem;
  }

  .hero-subtitle {
    color: #fff;
    font-family: Mona Sans, sans-serif;
    font-weight: 800;

    @media only screen and (${devices.sm}) {
      line-height: normal;
    }
  }

  .hero-accent {
    font: inherit;
    color: #f8e67d;
  }
`;

const HeroCta = styled.div`
  min-height: 25rem;
  width: 100%;
  max-width: 45rem;
  margin-inline: auto;
  position: relative;

  .play-btn,
  .wheel,
  .diamond-pin,
  .balls-left,
  .balls-right {
    position: absolute;
  }

  .play-btn,
  .wheel,
  .diamond-pin {
    left: 50%;
    transform: translateX(-50%);
  }

  .balls-left,
  .balls-right {
    width: 11rem;
    z-index: 1;
  }

  .play-btn {
    bottom: -4px;

    animation: bounce 0.5s ease-in-out 5s infinite alternate-reverse;
    @media only screen and (${devices.xs}) {
      width: 70%;
    }
  }

  .wheel {
    bottom: 10%;
    transform: translate(-50%, 50%);
    animation: spin 5s infinite linear;
    transform-style: preserve-3d;
    will-change: transform;

    @media only screen and (${devices.xs}) {
      left: 49%;
    }
  }

  .diamond-pin {
    top: 30%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media only screen and (${devices.xs}) {
      top: 40%;
    }

    @media only screen and (max-width: 345px) {
      top: 50%;
    }
  }

  .balls-left {
    width: 10rem;
    left: 0;
    bottom: -1rem;
  }

  .balls-right {
    right: 0;
    bottom: -1rem;
  }

  @keyframes spin {
    from {
      transform: translate3d(-50%, 50%, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
    to {
      transform: translate3d(-50%, 50%, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(360deg) skew(0deg, 0deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: translate(-50%, -1px);
    }

    30% {
      transform: translate(-50%, 0px);
    }

    100% {
      transform: translate(-50%, -2px);
    }
  }
`;

const HeroWrapper = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
`;

export { Header, Hero, HeroSub, HeroCta, HeroWrapper };
