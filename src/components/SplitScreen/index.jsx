import { Children } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../../breakpoints";

const StyledSplitScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.4rem;
  align-items: center;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "video"
      "text";
    gap: 4rem;
  }
`;

const SplitScreenLeft = styled.div`
  @media only screen and (${devices.md}) {
    grid-area: text;
  }
`;

const SplitScreenRight = styled.div`
  @media only screen and (${devices.md}) {
    grid-area: video;
  }
`;

const SplitScreen = ({ children }) => {
  const [left, right] = Children.toArray(children);

  return (
    <StyledSplitScreen>
      <SplitScreenLeft>{left}</SplitScreenLeft>
      <SplitScreenRight>{right}</SplitScreenRight>
    </StyledSplitScreen>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.node,
};

export default SplitScreen;
