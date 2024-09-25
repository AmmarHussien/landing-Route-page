import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

// Styled components
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86.5vh; /* Full viewport height */
  background-color: #f7f7f7; /* Light gray background for contrast */
  padding: 20px; /* Padding to prevent content from touching edges */
`;

const Container = styled.div`
  max-width: 90%;
  width: 100%;
  max-width: 600px; /* Set a maximum width for larger screens */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #444;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  text-align: center;
  margin: 0 0 15px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  resize: vertical;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 300px; /* Set a maximum width for better control */
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: #00537a;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #004466;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BackButtonBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  @media (min-width: 768px) {
    top: 30px;
    left: 30px;
  }
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
    background-color: #004466;
  }

  svg {
    margin-right: 8px;
    font-size: 1.1rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 15px;

  @media (min-width: 768px) {
    top: 30px;
    right: 30px;
  }
`;

const Icon = styled.div`
  font-size: 1.25rem;
  color: #00537a;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactUs = () => {
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
        <IconWrapper>
          <Icon>
            <FaUser />
          </Icon>
          <Icon>
            <FaEnvelope />
          </Icon>
          <Icon>
            <FaRegPaperPlane />
          </Icon>
        </IconWrapper>
        <BackButtonBox>
          <BackButton to="/landing-page">
            <AiOutlineArrowLeft /> Back to Home
          </BackButton>
        </BackButtonBox>
        <Content>
          <Title>Contact Us</Title>
          <Section>
            <SectionTitle>We&apos;d Love to Hear from You</SectionTitle>
            <Paragraph>
              If you have any questions, feedback, or need assistance,
            </Paragraph>
            <Paragraph>
              please fill out the form below and we will get back to you as soon
              as possible.
            </Paragraph>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <ButtonWrapper>
                <Button type="submit">
                  <FaRegPaperPlane /> Send Message
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
