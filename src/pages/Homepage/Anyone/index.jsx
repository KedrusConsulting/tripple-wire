import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2, Text } from "../../../components/Typo";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import playnow from "../../../assets/playnow.svg";
import Lottie from "react-lottie";
import { defaultOptions } from "../defaultOptions";
import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import PlayNowPopup from "../../../components/PlayNowPopup";
import { devices } from "../../../breakpoints";

const StyledH2 = styled(H2)`
  color: #79de3a;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 5.6rem;

  @media only screen and (${devices.sm}) {
    font-size: 3rem;
  }
`;

const StyledText = styled(Text)`
  max-width: 100rem;
  margin-inline: auto;
  color: #fff;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 4rem;
  margin-bottom: 4.8rem;

  @media only screen and (${devices.sm}) {
    font-size: 2.2rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.4rem;

  @media only screen and (${devices.sm}) {
    transform: scale(1.1);
  }
`;

const ButtonWrapper = styled.div`
  button {
    @media only screen and (${devices.sm}) {
      transform: scale(0.9);
    }

    @media only screen and (${devices.xs}) {
      transform: scale(0.8);
    }
  }
`;

const Anyone = () => {
  const openModal = useModal();

  return (
    <>
      <Section>
        <Container>
          <StyledH2>Anyone Can Win!</StyledH2>

          <FlexBox>
            <Image src="/I_won.gif" />
          </FlexBox>

          <StyledText>
            {` Everyone can participate no matter how small you may have. It doesn't
          matter if you are a Student, Tenant or Business Owner. Get ready to
          become the latest LANDLORD/LANDLADY`}
          </StyledText>

          <ButtonWrapper
            className="anyone"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Button onClick={openModal.openModal}>
              <Image src={playnow} />
            </Button>
            <Image className="blur-block-2" src="/blur_block.svg" />
            <Image className="blur-block-2" src="/blur_block.svg" />

            <div className="sparkles">
              <Lottie
                options={defaultOptions}
                style={{ maxWidth: "500px", height: "300px" }}
              />
            </div>
          </ButtonWrapper>
        </Container>
      </Section>

      <Modal isOpen={openModal.isOpen} onClose={openModal.closeModal}>
        <PlayNowPopup />
      </Modal>
    </>
  );
};

export default Anyone;
