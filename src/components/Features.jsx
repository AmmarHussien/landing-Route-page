import styled from "styled-components";

const FeaturesSection = styled.section`
  padding: 60px 20px;
  background: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const FeaturesHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  background: #e0f7fa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  flex: 1 1 250px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #b2ebf2;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin: 10px 0;
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 15px;
`;

const FeatureImage = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesHeading>Why Choose Route?</FeaturesHeading>
      <FeaturesList>
        <FeatureItem>
          <FeatureIcon>
            <FeatureImage src="/Why-two.svg" alt="Rapid Response" />
          </FeatureIcon>
          <FeatureTitle>Rapid Response</FeatureTitle>
          <FeatureText>We reach you quickly in emergencies.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>
            <FeatureImage src="/Safety.png" alt="Safety First" />
          </FeatureIcon>
          <FeatureTitle>Safety First</FeatureTitle>
          <FeatureText>
            We prioritize the safety of your vehicle and our team.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>
            <FeatureImage src="/Why-one.svg" alt="Versatility" />
          </FeatureIcon>
          <FeatureTitle>Versatility</FeatureTitle>
          <FeatureText>
            Our fleet handles all types of vehicles and situations.
          </FeatureText>
        </FeatureItem>
      </FeaturesList>
    </FeaturesSection>
  );
};

export default Features;
