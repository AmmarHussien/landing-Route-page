import styled from "styled-components";

const VisionMissionSection = styled.section`
  padding: 60px 20px;
  background: #e0f7fa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 40px 10px;
    flex-direction: column;
    gap: 20px;
  }
`;

const VisionMissionCard = styled.div`
  flex: 1 1 45%;
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const VisionMission = () => {
  return (
    <VisionMissionSection>
      <VisionMissionCard>
        <Heading>Our Vision</Heading>
        <Text>
          To revolutionize vehicle recovery with state-of-the-art technology and
          unmatched reliability.
        </Text>
      </VisionMissionCard>
      <VisionMissionCard>
        <Heading>Our Mission</Heading>
        <Text>
          To provide efficient and safe winch car services, ensuring customer
          satisfaction and vehicle safety at all times.
        </Text>
      </VisionMissionCard>
    </VisionMissionSection>
  );
};

export default VisionMission;
