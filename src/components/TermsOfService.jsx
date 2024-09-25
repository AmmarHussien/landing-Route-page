import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaRegLightbulb,
  FaCheckCircle,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

// Styled components
const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(135deg, #e9ecef, #f8f9fa);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #00537a;
  display: flex;
  align-items: center;
  font-weight: bold;

  svg {
    margin-right: 10px;
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
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

const LinkStyled = styled(Link)`
  color: #00537a;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const BackButtonBox = styled.div`
  display: inline-block;
  margin-bottom: 30px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #00537a;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004466;
  }

  svg {
    margin-right: 8px;
  }
`;

const TermsOfService = () => {
  return (
    <Container>
      <BackButtonBox>
        <BackButton to="/landing-page">
          <AiOutlineArrowLeft /> Back to Home
        </BackButton>
      </BackButtonBox>
      <Title>Terms of Service</Title>

      <Section>
        <SectionTitle>
          <FaRegLightbulb color="#F5A201" /> Introduction
        </SectionTitle>
        <Paragraph>
          Welcome to Route. These Terms of Service govern your use of our
          website and mobile application. By using our services, you agree to
          these terms.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <FaCheckCircle color="#F5A201" /> Acceptance of Terms
        </SectionTitle>
        <Paragraph>
          By accessing or using our services, you agree to comply with and be
          bound by these Terms of Service. If you do not agree, you should not
          use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <FaShieldAlt color="#F5A201" /> Use of Our Services
        </SectionTitle>
        <Paragraph>
          You agree to use our services only for lawful purposes and in
          accordance with these terms. You must not use our services in any way
          that causes, or may cause, damage to the website or interferes with
          other users access.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <FaExclamationTriangle color="#F5A201" /> Limitation of Liability
        </SectionTitle>
        <Paragraph>
          We are not liable for any damages or losses arising from your use of
          our services or any content provided through our website and
          application.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <FaCalendarAlt color="#F5A201" /> Changes to These Terms
        </SectionTitle>
        <Paragraph>
          We may update these Terms of Service from time to time. Any changes
          will be posted on this page with an updated revision date.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <FaEnvelope color="#F5A201" /> Contact Us
        </SectionTitle>
        <Paragraph>
          If you have any questions about these Terms of Service, please contact
          us at{" "}
          <LinkStyled to="mailto:support@example.com">
            support@example.com
          </LinkStyled>
          .
        </Paragraph>
      </Section>
    </Container>
  );
};

export default TermsOfService;
