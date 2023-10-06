import { styled } from "styled-components";
import { Text } from "../Typo";
import Image from "../Image";
import playbtn from "../../assets/playbtn.svg";
import Lottie from "react-lottie";
import animationData from "../../assets/direction.json";
import PropTypes from "prop-types";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

const Card = styled.div`
  position: relative;
  /* -webkit-clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 20%); */

  p {
    transform: skewX(15deg);
  }

  sup {
    color: #249103;
    font-size: 1.7rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
  }

  .card--content {
    background-color: #070e04;
    border: 2.6px solid #35cb00;
    max-width: 25.3rem;
    padding: 1.6rem 1.2rem 0 3.2rem;
    transform: skewX(-12deg);
  }

  .card--no {
    color: #fff;
    font-size: 3rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
  }

  .card--label {
    display: inline-flex;
    padding: 1rem 2.7rem;
    justify-content: center;
    align-items: center;
    background-color: #fde102;
    transform: skewX(12deg) translate(10rem, 2rem);
    margin-bottom: 2.4rem;
    margin-top: 1.6rem;

    span {
      color: #316014;
      font-size: 2.8rem;
      font-weight: 800;
      line-height: normal;
    }
  }

  .card--desc {
    color: #fdf694;
    font-size: 1.8rem;
    font-style: italic;
    font-weight: 700;
    line-height: 2.4rem;
    max-width: 17.3rem;
    margin-bottom: 2.4rem;

    &.white {
      color: #fff;
      font-weight: 800;
    }

    .green {
      color: #79de3a;
    }
  }

  .card--img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
    z-index: -2;

    width: 20rem;
  }

  .card--ani {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 5rem;

    svg {
      position: absolute;
      top: 2rem;
      left: 3rem;
    }
  }

  .card--sms {
    color: #91ca6d;
    font-family: "Just Me Again Down Here", cursive;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transform: rotate(-27.94deg);
  }
`;

const PlayBtn = styled.a`
  display: flex;
  justify-content: center;
  width: 11.4rem;
  margin-inline: auto;
  background: none;
  border: none;
  transform: skewX(12deg) translateX(-1rem);
  margin-top: 3.2rem;
  cursor: pointer;

  img {
    display: block;
    position: relative;
    bottom: -1px;
  }
`;

const PlayNowCard = ({ label, worth, cost }) => {
  return (
    <Card>
      <div className="card--content">
        <div className="card--ani">
          <Text className="card--sms">SMS</Text>
          <Lottie options={defaultOptions} height={34} width={32} />
        </div>
        <div className="card--label">
          <Text as="span">{label}</Text>
        </div>

        <Text>
          <sup>to</sup>{" "}
          <Text as={"span"} className="card--no">
            5776
          </Text>
        </Text>

        <Text className="card--desc">
          And stand a chance to win a{" "}
          <Text as={"span"} className="green">
            {" "}
            property worth N{worth}
          </Text>
        </Text>

        <Text className="card--desc white">Costs {cost}NGN</Text>

        <PlayBtn href={`sms:5776?body=SUB%20${label}`}>
          <Image src={playbtn} />
        </PlayBtn>
      </div>

      <div className="card--img">
        <Image src="/deb_image 113.png" />
      </div>
    </Card>
  );
};

PlayNowCard.propTypes = {
  label: PropTypes.string,
  worth: PropTypes.string,
  cost: PropTypes.string,
};

export default PlayNowCard;
