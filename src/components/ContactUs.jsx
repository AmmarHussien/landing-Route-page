import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";

// Styled components
const PageWrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */

  background-color: #f7f7f7;
  padding: 10px;

  /* @media (min-width: 768px) {
    padding: 20px;
  } */
`;

const Container = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 15px;
  background: linear-gradient(135deg, #e9ecef, #f8f9fa);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 40%;
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 15px;
  color: #333;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #444;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;

  resize: vertical;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 250px; /* Smaller max width for smaller screens */
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #00537a;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #004466;
  }

  @media (min-width: 768px) {
    max-width: 300px; /* Larger max width for bigger screens */
    font-size: 1.1rem;
    padding: 12px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BackButtonBox = styled.div`
  @media (min-width: 768px) {
    top: 100px;
    left: 30px;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #00537a;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003d4c;
  }

  svg {
    margin-right: 8px;
    margin-left: 8px;
    font-size: 1.1em;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;

    svg {
      font-size: 1.5em;
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

const Icon = styled.div`
  font-size: 1.2rem;
  color: #00537a;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

// No changes to Wrapper and Content, as they are already responsive

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactUs = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form data submitted:", formData);
    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <PageWrapper>
      <Container>
        <Wrapper>
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
          <IconBox>
            <Icon>
              <FaUser />
            </Icon>
            <Icon>
              <FaEnvelope />
            </Icon>
            <Icon>
              <FaRegPaperPlane />
            </Icon>
          </IconBox>
        </Wrapper>

        <Content>
          <Title>{t("ContactUs")}</Title>
          <Section>
            <SectionTitle>{t("ContactUsT")}</SectionTitle>
            <Paragraph>{t("ContactUsT1")}</Paragraph>
            <Paragraph>{t("ContactUsT3")}</Paragraph>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder={t("YourName")}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder={t("YourEmail")}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder={t("YourMessage")}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <ButtonWrapper>
                <Button type="submit">
                  <FaRegPaperPlane /> {t("SendMessage")}
                </Button>
              </ButtonWrapper>
            </Form>
          </Section>
        </Content>
      </Container>
    </PageWrapper>
  );
};

export default ContactUs;
