import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaRegLightbulb,
  FaCheckCircle,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCalendarAlt,
} from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";

// Styled components
const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #e9ecef, #f8f9fa);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 80%;
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 3em;
    margin-bottom: 30px;
    letter-spacing: 2px;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #005379;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.75em;
    margin-bottom: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin: 0 0 20px;
  margin-left: 20px;

  @media (min-width: 768px) {
    font-size: 1.15rem;
    margin-left: 25px;
  }
`;

const BackButtonBox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #00537a;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003d4c;
  }

  svg {
    margin-right: 8px;
    margin-left: 8px;
    font-size: 1.2em;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;

    svg {
      font-size: 1.5em;
    }
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  margin-left: 8px;
  font-size: 1.1em;
  color: #f5a201;

  svg {
    fill: currentColor;
  }

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

const TermsOfService = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <Container>
      <BackButtonBox>
        <BackButton to="/">
          {i18n.language === "ar" ? (
            <AiOutlineArrowRight />
          ) : (
            <AiOutlineArrowLeft />
          )}{" "}
          {t("BacktoHome")}
        </BackButton>
      </BackButtonBox>
      <Title>{t("TermsofService")}</Title>

      <Section>
        <SectionTitle>
          <Icon>
            <FaRegLightbulb />{" "}
          </Icon>
          {t("IntroductionT")}
        </SectionTitle>
        <Paragraph>{t("IntroductionTD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaCheckCircle />
          </Icon>
          {t("AcceptanceofTerms")}
        </SectionTitle>
        <Paragraph>{t("AcceptanceofTermsD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaShieldAlt />
          </Icon>
          {t("UseofOurServices")}
        </SectionTitle>
        <Paragraph>{t("UseofOurServicesD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaExclamationTriangle />{" "}
          </Icon>
          {t("LimitationofLiability")}
        </SectionTitle>
        <Paragraph>{t("LimitationofLiabilityD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaCalendarAlt />
          </Icon>{" "}
          {t("ChangestoTheseTerms")}
        </SectionTitle>
        <Paragraph>{t("ChangestoTheseTermsD")}</Paragraph>
      </Section>
    </Container>
  );
};

export default TermsOfService;
