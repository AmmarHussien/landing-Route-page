import styled from "styled-components";
import { Link } from "react-scroll"; // Using react-scroll for smooth scrolling
//import { useTranslation } from "react-i18next";

const HeroSection = styled.section`
  background-image: url("/Never-Get-Stuck.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 1rem; // Add padding to ensure content doesn't touch edges on smaller screens

  @media (max-width: 768px) {
    height: 80vh; // Reduce height on smaller screens
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem; // Add padding for better spacing on smaller screens
`;

const HeroContent = styled.div`
  color: white;
  text-align: center;
  max-width: 1000px; // Limit the maximum width to prevent content from stretching too wide on large screens

  @media (max-width: 768px) {
    max-width: 100%; // Make content take full width on smaller screens
    padding: 0 1rem; // Add padding on smaller screens
  }
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem; // Reduce font size on smaller screens
  }
`;

const HeroParagraph = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem; // Reduce font size on smaller screens
  }
`;

const CTAButton = styled.button`
  background-color: #f4a227;
  color: white;
  padding: 15px 30px;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #eb9009;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px; // Adjust padding for smaller screens
    font-size: 1rem; // Adjust font size for smaller screens
  }
`;

const Hero = () => {
  //const { t } = useTranslation();
  return (
    <HeroSection>
      <HeroOverlay>
        <HeroContent>
          <HeroHeading>Revolutionize Trucking with Route</HeroHeading>
          <HeroParagraph>
            Your Ultimate Partner in Freight Management
          </HeroParagraph>
          <CTAButton>
            <Link to="about" smooth={true} duration={500}>
              Get Started
            </Link>
          </CTAButton>
        </HeroContent>
      </HeroOverlay>
    </HeroSection>
  );
};

export default Hero;
