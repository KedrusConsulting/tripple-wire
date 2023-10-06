import styled from "styled-components";
import Image from "../Image";
import { Text } from "../Typo";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 37.1rem;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    color: #fff;
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px; /* 127.778% */
    letter-spacing: -0.81px;
  }
`;

const H3 = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #09f481;
  text-overflow: ellipsis;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 24px */
  text-transform: capitalize;
`;

const BlogCard = ({ title, summary, image_url }) => {
  return (
    <Card>
      <Image src={image_url} />
      <H3>{title}</H3>
      <Text>{summary}</Text>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  image_url: PropTypes.string,
};

export default BlogCard;
