import { Children } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSplitScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.4rem;
  align-items: center;
`;

const SplitScreenLeft = styled.div``;

const SplitScreenRight = styled.div``;

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
