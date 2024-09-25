import { useTranslation } from "react-i18next";
import styled from "styled-components";

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

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <FooterText>
        &copy; {new Date().getFullYear()} {t("Footer")}
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
