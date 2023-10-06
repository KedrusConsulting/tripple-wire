import Container from "../../../components/Container";
import {
  Hero,
  HeroCta,
  HeroSub,
  HeroWrapper,
  Header as StyledHeader,
} from "../../../components/Header";
import Image from "../../../components/Image";
import Modal from "../../../components/Modal";
import PlayNowPopup from "../../../components/PlayNowPopup";
import { H1, Text } from "../../../components/Typo";
import useModal from "../../../hooks/useModal";

const Header = () => {
  const openModal = useModal();

  return (
    <>
      <StyledHeader>
        <Container>
          <Hero>
            <HeroSub>
              <Text fontsize="2.4rem" className="hero-subtitle">
                Triple Wire{" "}
                <Text as={"span"} className="hero-accent">
                  Raffle Draw
                </Text>
              </Text>
            </HeroSub>
            <H1>
              Become a Proud Land Owner for as Low as{" "}
              <Text as={"span"}>N300</Text>
            </H1>

            <HeroWrapper>
              <HeroCta>
                <Image className="balls-left" src="/left_balls.svg" />
                <Image className="balls-right" src="/right_balls.svg" />
                <Image className="diamond-pin" src="/pin.svg" />
                <Image className="wheel" src="rolling_wheel.svg" />
                <Image
                  className="play-btn"
                  src="/dance_button.svg"
                  onClick={openModal.openModal}
                />
              </HeroCta>
            </HeroWrapper>
          </Hero>
        </Container>
      </StyledHeader>

      <Modal isOpen={openModal.isOpen} onClose={openModal.closeModal}>
        <PlayNowPopup />
      </Modal>
    </>
  );
};

export default Header;
