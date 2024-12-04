import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTASection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #f4a227;
  color: #fff;
  padding: 15px 30px;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #eb9009;
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 2px solid #eb9009;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const Cta = () => {
  const { t } = useTranslation();

  return (
    <CTASection>
      <CTAHeading>{t("CTAT")}</CTAHeading>
      <CTAButton to={"/mobile"}>{t("CTAD")}</CTAButton>
    </CTASection>
  );
};

export default Cta;
