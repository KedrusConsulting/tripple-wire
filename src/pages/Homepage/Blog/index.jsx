import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2 } from "../../../components/Typo";
import BlogCard from "../../../components/BlogCard";
import Image from "../../../components/Image";
import viewblog from "../../../assets/viewblog.svg";
import { Link } from "react-router-dom";

const Caption = styled.div`
  text-align: center;
  margin-bottom: 6.4rem;

  h2 {
    color: #45cf15;
    text-align: center;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.96px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4.8rem;
  margin-bottom: 4.8rem;
`;

const GridItem = styled.div``;

const Blog = () => {
  return (
    <Section>
      <Container>
        <Caption>
          <H2>Read More about Triple Wire</H2>
        </Caption>

        <GridContainer>
          <GridItem>
            <BlogCard
              image_url={"/thumbnail_1.png"}
              title={"Winners of the previous raffle draw"}
              summary={
                "We at Triple Wire believe in the strength of collaboration. We understand that to create transformative change, we must join hands with organizations"
              }
            />
          </GridItem>

          <GridItem>
            <BlogCard
              image_url={"/thumbnail_2.png"}
              title={"Upcoming raffle event"}
              summary={
                "Let's explore the incredible benefits of our partnerships with MTN Nigeria, the National Lottery Regulatory Commission, African Content Media, and I Cell."
              }
            />
          </GridItem>

          <GridItem>
            <BlogCard
              image_url={"/thumbnail_3.png"}
              title={"Diversify you landed property"}
              summary={
                "In today's digital age, accessibility and connectivity are paramount. That's where MTN Nigeria, a leading telecommunications giant, comes in. Our partnership with MTN ensures that our Triple Wire Raffle Draw Programme reaches every corner of Nigeria, allowing individuals."
              }
            />
          </GridItem>
        </GridContainer>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={"/"}>
            <Image src={viewblog} />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
