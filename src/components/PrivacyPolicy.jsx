import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  FaLock,
  FaUserSecret,
  FaShieldAlt,
  FaHandshake,
  FaFileSignature,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChildren,
  faFileShield,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { GrServices } from "react-icons/gr";
import { FaMapLocationDot } from "react-icons/fa6";

import { FaCookie } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdMedicalInformation } from "react-icons/md";
import { useTranslation } from "react-i18next";

// Styled components with creative improvements
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

const LiBox = styled.ul`
  margin-left: 20px;
  margin-right: 20px;
  list-style: inside circle;
  color: #555;
  padding-left: 0;

  @media (min-width: 768px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const Links = styled.a`
  color: #005379;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
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

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <Container>
      {/* Back Button */}
      <BackButtonBox>
        <BackButton to="/landing-page">
          {i18n.language === "ar" ? (
            <AiOutlineArrowRight />
          ) : (
            <AiOutlineArrowLeft />
          )}{" "}
          {t("BacktoHome")}
        </BackButton>
      </BackButtonBox>
      <Title>{t("PrivacyPolicy")}</Title>

      <Section>
        <SectionTitle>
          <Icon>
            <FaLock />
          </Icon>{" "}
          {t("Introduction")}
        </SectionTitle>
        <Paragraph>{t("IntroductionD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaUserSecret />
          </Icon>{" "}
          {t("InformationWeCollect")}
        </SectionTitle>
        <Paragraph>{t("InformationWeCollectD")}</Paragraph>
        <Paragraph>{t("InformationWeCollectD2")}</Paragraph>
        <Paragraph>{t("InformationWeCollectD3")}</Paragraph>
        <LiBox>
          <li>{t("InformationWeCollectD4")}</li>
          <li>{t("InformationWeCollectD5")}</li>
          <li>{t("InformationWeCollectD6")}</li>
        </LiBox>
        <Paragraph>{t("InformationWeCollectD7")} </Paragraph>
        <LiBox>
          <li>{t("InformationWeCollectD8")}</li>
          <li>{t("InformationWeCollectD9")}</li>
          <li>{t("InformationWeCollectD10")}</li>
          <li>{t("InformationWeCollectD11")}</li>
        </LiBox>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <MdMedicalInformation />
          </Icon>
          {t("HowWeUse")}
        </SectionTitle>
        <Paragraph>{t("HowWeUse1")}</Paragraph>
        <LiBox>
          <li>{t("HowWeUse2")}</li>
          <li>{t("HowWeUse3")}</li>
          <li>{t("HowWeUse4")}</li>
          <li>{t("HowWeUse5")}</li>
          <li>{t("HowWeUse6")}</li>
        </LiBox>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaMapLocationDot />
          </Icon>
          {t("Location")}
        </SectionTitle>
        <Paragraph>{t("LocationD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaDatabase />
          </Icon>
          {t("LogData")}
        </SectionTitle>
        <Paragraph>{t("LogDataD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaCookie />
          </Icon>
          {t("Cookies")}
        </SectionTitle>
        <Paragraph>{t("CookiesD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <GrServices />
          </Icon>
          {t("ServiceProviders")}
        </SectionTitle>
        <Paragraph>{t("ServiceProviders1")}</Paragraph>
        <LiBox>
          <li>{t("ServiceProviders2")}</li>
          <li>{t("ServiceProviders3")}</li>
          <li>{t("ServiceProviders4")}</li>
          <li>{t("ServiceProviders5")}</li>
        </LiBox>
        <Paragraph>{t("ServiceProviders6")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaHandshake />
          </Icon>
          {t("SharingYourInformation")}
        </SectionTitle>
        <Paragraph>{t("SharingYourInformation1")}</Paragraph>
        <LiBox>
          <li>{t("SharingYourInformation2")}</li>
          <li>{t("SharingYourInformation3")}</li>
          <li>{t("SharingYourInformation4")}</li>
        </LiBox>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaShieldAlt />
          </Icon>{" "}
          {t("PaymentSecurity")}
        </SectionTitle>
        <Paragraph>{t("PaymentSecurityD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FontAwesomeIcon icon={faFileShield} />
          </Icon>{" "}
          {t("DataSecurity")}
        </SectionTitle>
        <Paragraph>{t("DataSecurityD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FontAwesomeIcon icon={faLink} />
          </Icon>
          {t("LinkstoOtherSites")}
        </SectionTitle>
        <Paragraph>{t("LinkstoOtherSitesD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FontAwesomeIcon icon={faChildren} />
          </Icon>
          {t("Children’sPrivacy")}
        </SectionTitle>
        <Paragraph>{t("Children’sPrivacyD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaFileSignature />
          </Icon>
          {t("ChangesPolicy")}
        </SectionTitle>
        <Paragraph>{t("ChangesPolicyD")}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaEnvelope />
          </Icon>
          {t("ContactUs")}
        </SectionTitle>
        <Paragraph>
          {t("ContactUsD")}
          <Links href="mailto:privacy@example.com"> privacy@example.com</Links>.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
