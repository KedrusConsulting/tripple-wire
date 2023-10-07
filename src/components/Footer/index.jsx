import { styled } from "styled-components";
import Container from "../Container";
import { Logo } from "../Navigation";
import { H4, Text } from "../Typo";
import { Link, useLocation } from "react-router-dom";
import Flexbox from "../Flexbox";
import { devices } from "../../breakpoints";

const StyledFooter = styled.footer`
  padding: 8.8rem 0;

  &.footer--about {
    background-color: #fff;
  }

  @media only screen and (${devices.md}) {
    padding: 6.4rem 0;
  }
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr 1fr;
  background-color: #062c14;
  padding: 6.4rem 4.8rem;
  border-radius: 2.4rem;
  gap: 4rem;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "summary summary summary"
      "about legal contact";
    gap: 5.6rem 2.4rem;
    padding: 6.4rem 3.2rem;
  }

  @media only screen and (${devices.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "summary summary"
      "about legal"
      "contact contact";
    padding: 6.4rem 2.4rem;
  }
`;

const FooterBox = styled.div`
  @media only screen and (${devices.md}) {
    grid-area: summary;
  }

  .logo {
    margin-bottom: 2.4rem;
  }

  .text {
    color: #ffffff;
    font-family: "Mona Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    max-width: 38.2rem;
    margin-bottom: 4rem;
  }

  .copyright {
    margin-top: 2.4rem;
  }
`;

const FooterList = styled.ul`
  list-style: none;

  h4 {
    color: #51802b;
    font-variant-numeric: stacked-fractions;
    font-feature-settings: "cv09" on, "cv04" on, "ss01" on, "cv03" on, "ss03" on,
      "cv06" on;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 1.25px;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }

  &.contact-about {
    @media only screen and (${devices.md}) {
      grid-area: about;
    }
  }

  &.contact-legal {
    @media only screen and (${devices.md}) {
      grid-area: legal;
    }
  }

  &.contact-list {
    @media only screen and (${devices.md}) {
      grid-area: contact;
    }
  }
`;

const FooterItem = styled.li`
  margin-bottom: 1.2rem;

  a.contact {
    color: #fde102;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #ffffff;
    font-size: 1.6rem;
    font-family: inherit;
    text-decoration: none;
  }

  svg {
    flex-shrink: 0;
  }
`;

const FooterIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  /* padding: 1.2rem; */
  border-radius: 50%;
  border: 1px solid #1b212c;
  background: #041e0e;

  svg {
    flex-shrink: 0;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <StyledFooter className={pathname === "/about" ? "footer--about" : ""}>
      <Container>
        <FooterWrapper>
          <FooterBox>
            <Logo className="logo" src="/logo.svg" />
            <Text className="text">
              The Triple Wire Raffle Draw presents all Nigerians with an
              opportunity to own a landed property.
            </Text>

            <Flexbox>
              <FooterIcon
                href="https://facebook.com/triplewireng"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.5 5.28613C8.28101 5.28613 4.86108 8.70606 4.86108 12.925C4.86108 16.7376 7.65463 19.8978 11.3068 20.4715V15.1327H9.3665V12.925H11.3068V11.2422C11.3068 9.32787 12.4465 8.27065 14.192 8.27065C15.0277 8.27065 15.9016 8.41961 15.9016 8.41961V10.2988H14.9391C13.9896 10.2988 13.6939 10.8877 13.6939 11.492V12.925H15.8122L15.4738 15.1327H13.6939V20.4715C17.3453 19.8986 20.1389 16.7368 20.1389 12.925C20.1389 8.70606 16.7189 5.28613 12.5 5.28613Z"
                    fill="#2EB202"
                  />
                </svg>
              </FooterIcon>

              <FooterIcon
                href="https://twitter.com/triplewireng"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.5 5.28613C14.5755 5.28613 14.8344 5.29377 15.6487 5.33197C16.4623 5.37016 17.0161 5.49773 17.5034 5.68717C18.0076 5.8812 18.4323 6.14398 18.8571 6.56794C19.2455 6.9498 19.5461 7.41172 19.7378 7.92155C19.9265 8.40815 20.0548 8.96273 20.093 9.77627C20.1289 10.5906 20.1389 10.8495 20.1389 12.925C20.1389 15.0005 20.1312 15.2595 20.093 16.0738C20.0548 16.8873 19.9265 17.4411 19.7378 17.9285C19.5466 18.4386 19.246 18.9006 18.8571 19.2821C18.4751 19.6704 18.0132 19.9709 17.5034 20.1629C17.0168 20.3515 16.4623 20.4799 15.6487 20.5181C14.8344 20.554 14.5755 20.5639 12.5 20.5639C10.4245 20.5639 10.1655 20.5563 9.35122 20.5181C8.53768 20.4799 7.98386 20.3515 7.4965 20.1629C6.98647 19.9715 6.52447 19.6709 6.14289 19.2821C5.75438 18.9003 5.45381 18.4384 5.26213 17.9285C5.07268 17.4419 4.94511 16.8873 4.90692 16.0738C4.87101 15.2595 4.86108 15.0005 4.86108 12.925C4.86108 10.8495 4.86872 10.5906 4.90692 9.77627C4.94511 8.96197 5.07268 8.40891 5.26213 7.92155C5.45328 7.41141 5.75392 6.94936 6.14289 6.56794C6.52458 6.1793 6.98655 5.8787 7.4965 5.68717C7.98386 5.49773 8.53692 5.37016 9.35122 5.33197C10.1655 5.29606 10.4245 5.28613 12.5 5.28613ZM12.5 9.10558C11.487 9.10558 10.5155 9.50798 9.79922 10.2243C9.08293 10.9406 8.68053 11.912 8.68053 12.925C8.68053 13.938 9.08293 14.9095 9.79922 15.6258C10.5155 16.3421 11.487 16.7445 12.5 16.7445C13.513 16.7445 14.4844 16.3421 15.2007 15.6258C15.917 14.9095 16.3194 13.938 16.3194 12.925C16.3194 11.912 15.917 10.9406 15.2007 10.2243C14.4844 9.50798 13.513 9.10558 12.5 9.10558ZM17.4653 8.9146C17.4653 8.66136 17.3647 8.41849 17.1856 8.23942C17.0065 8.06034 16.7636 7.95974 16.5104 7.95974C16.2571 7.95974 16.0143 8.06034 15.8352 8.23942C15.6561 8.41849 15.5555 8.66136 15.5555 8.9146C15.5555 9.16785 15.6561 9.41072 15.8352 9.58979C16.0143 9.76886 16.2571 9.86947 16.5104 9.86947C16.7636 9.86947 17.0065 9.76886 17.1856 9.58979C17.3647 9.41072 17.4653 9.16785 17.4653 8.9146ZM12.5 10.6334C13.1078 10.6334 13.6907 10.8748 14.1204 11.3046C14.5502 11.7343 14.7916 12.3172 14.7916 12.925C14.7916 13.5328 14.5502 14.1157 14.1204 14.5455C13.6907 14.9752 13.1078 15.2167 12.5 15.2167C11.8922 15.2167 11.3093 14.9752 10.8795 14.5455C10.4497 14.1157 10.2083 13.5328 10.2083 12.925C10.2083 12.3172 10.4497 11.7343 10.8795 11.3046C11.3093 10.8748 11.8922 10.6334 12.5 10.6334Z"
                    fill="#2EB202"
                  />
                </svg>
              </FooterIcon>

              <FooterIcon
                href="https://instagram.com/triplewireng"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M20.2626 8.07908C19.6795 8.33704 19.061 8.50646 18.4278 8.58172C19.0952 8.18254 19.5948 7.5543 19.8333 6.81408C19.2069 7.18686 18.5202 7.44811 17.8044 7.58943C17.3237 7.07501 16.6864 6.73385 15.9917 6.61898C15.297 6.5041 14.5838 6.62196 13.963 6.95422C13.3423 7.28649 12.8486 7.81454 12.5589 8.45629C12.2692 9.09804 12.1996 9.81753 12.361 10.5029C11.0907 10.4392 9.84803 10.1091 8.71362 9.53404C7.57921 8.95894 6.57843 8.15169 5.77625 7.16471C5.4923 7.65241 5.34309 8.20683 5.34389 8.77117C5.34389 9.87881 5.90764 10.8573 6.76472 11.4303C6.25751 11.4143 5.76145 11.2773 5.31792 11.0308V11.0705C5.31807 11.8082 5.57334 12.5231 6.04044 13.0941C6.50754 13.665 7.15773 14.0569 7.88076 14.2032C7.40991 14.3308 6.91621 14.3496 6.43701 14.2582C6.64087 14.8931 7.0382 15.4485 7.57337 15.8464C8.10854 16.2443 8.75475 16.4649 9.42153 16.4773C8.75884 16.9977 8.00007 17.3825 7.18859 17.6095C6.37711 17.8365 5.52885 17.9014 4.69229 17.8003C6.15262 18.7395 7.85257 19.2381 9.58882 19.2364C15.4654 19.2364 18.6791 14.3682 18.6791 10.1462C18.6791 10.0087 18.6753 9.86964 18.6692 9.73367C19.2947 9.28157 19.8346 8.72153 20.2634 8.07985L20.2626 8.07908Z"
                    fill="#2EB202"
                  />
                </svg>
              </FooterIcon>
            </Flexbox>

            <Text className="text copyright">
              &copy; 2023 Copyright Company.com
            </Text>
          </FooterBox>

          <FooterList className="contact-about">
            <H4>ABout</H4>

            <FooterItem>
              <Link to={"/playnow"}>Play now</Link>
            </FooterItem>

            <FooterItem>
              <Link to={"/about"}>About us</Link>
            </FooterItem>

            <FooterItem>
              <Link to={"https://triplewire.ng/blog"}>Blog</Link>
            </FooterItem>
          </FooterList>

          <FooterList className="conact-legal">
            <H4>Legal</H4>

            <FooterItem>
              <Link to={"/terms"}>Terms of Service</Link>
            </FooterItem>

            <FooterItem>
              <Link to={"/privacy"}>Privacy Policy</Link>
            </FooterItem>
          </FooterList>

          <FooterList className="contact-list">
            <H4>Contact</H4>

            <FooterItem>
              <Link to={"tel:08160747172"} className="contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M5.465 8.25363C6.545 10.3761 8.285 12.1086 10.4075 13.1961L12.0575 11.5461C12.26 11.3436 12.56 11.2761 12.8225 11.3661C13.6625 11.6436 14.57 11.7936 15.5 11.7936C15.9125 11.7936 16.25 12.1311 16.25 12.5436V15.1611C16.25 15.5736 15.9125 15.9111 15.5 15.9111C8.4575 15.9111 2.75 10.2036 2.75 3.16113C2.75 2.74863 3.0875 2.41113 3.5 2.41113H6.125C6.5375 2.41113 6.875 2.74863 6.875 3.16113C6.875 4.09863 7.025 4.99863 7.3025 5.83863C7.385 6.10113 7.325 6.39363 7.115 6.60363L5.465 8.25363Z"
                    fill="white"
                  />
                </svg>

                <Text as={"span"}>08160747172</Text>
              </Link>
            </FooterItem>

            <FooterItem>
              <Link to={"mailto:info@tripplewire.ng"} className="contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M2 4.66113C2 4.26331 2.15804 3.88178 2.43934 3.60047C2.72064 3.31917 3.10218 3.16113 3.5 3.16113H15.5C15.8978 3.16113 16.2794 3.31917 16.5607 3.60047C16.842 3.88178 17 4.26331 17 4.66113V13.6611C17 14.059 16.842 14.4405 16.5607 14.7218C16.2794 15.0031 15.8978 15.1611 15.5 15.1611H3.5C3.10218 15.1611 2.72064 15.0031 2.43934 14.7218C2.15804 14.4405 2 14.059 2 13.6611V4.66113ZM4.63925 4.66113L9.5 8.91438L14.3608 4.66113H4.63925ZM15.5 5.65788L9.99425 10.4759C9.85748 10.5957 9.68184 10.6618 9.5 10.6618C9.31816 10.6618 9.14252 10.5957 9.00575 10.4759L3.5 5.65788V13.6611H15.5V5.65788Z"
                    fill="white"
                  />
                </svg>

                <Text as={"span"}>info@tripplewire.ng</Text>
              </Link>
            </FooterItem>
          </FooterList>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
