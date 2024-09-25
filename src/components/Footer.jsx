import styled from "styled-components";
// import LanguageSwitcher from "./Switchlanguages";
// import { Link } from "react-router-dom";

// Styled components
const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #1b4b73;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: auto; /* Pushes footer to the bottom */
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 0.9em;
`;

// const FooterLinks = styled.div`
//   margin: 20px 0;
//   display: flex;
//   gap: 15px;
// `;

// const FooterLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   font-size: 1em;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SocialMedia = styled.div`
//   margin: 10px 0;
//   display: flex;
//   gap: 10px;
// `;

// const SocialIcon = styled.a`
//   display: inline-block;

//   img {
//     width: 24px;
//     height: 24px;
//   }
// `;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        &copy; {new Date().getFullYear()} Route. All Rights Reserved.
      </FooterText>

      {/* <LanguageSwitcher /> */}
      {/* <FooterLinks>
        <FooterLink to="/landing-page/privacy-policy">
          Privacy Policy
        </FooterLink>
        <FooterLink to="/landing-page/terms-of-service">
          Terms of Service
        </FooterLink>
        <FooterLink to="/landing-page/contact-us">Contact Us</FooterLink>
      </FooterLinks>
      <SocialMedia>
        <SocialIcon href="#">
          <img src="/facebook-icon.svg" alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="#">
          <img src="/twitter-icon.svg" alt="Twitter" />
        </SocialIcon>
      </SocialMedia> */}
    </FooterWrapper>
  );
};

export default Footer;
