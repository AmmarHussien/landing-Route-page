import { useTranslation } from "react-i18next";
import styled from "styled-components";

const HowItWorksSection = styled.section`
  padding: 60px 20px;
  background: #f5f5f5;
  text-align: center;
`;

const HowItWorksHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Step = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  flex: 1 1 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin: 10px 0;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 15px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease;

  ${Step}:hover & {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HowItWorks = () => {
  const { t } = useTranslation();
  return (
    <HowItWorksSection id="about">
      <HowItWorksHeading>{t("HowItWorks")}</HowItWorksHeading>
      <StepsContainer>
        <Step>
          <IconContainer>
            <Icon src="/how-one.svg" alt="Request Service" />
          </IconContainer>
          <StepTitle>{t("RequestService")}</StepTitle>
          <StepDescription>{t("RequestServiceD")} </StepDescription>
        </Step>
        <Step>
          <IconContainer>
            <Icon src="/how-two.svg" alt="Dispatch" />
          </IconContainer>
          <StepTitle>{t("Dispatch&Arrival")}</StepTitle>
          <StepDescription>{t("Dispatch&ArrivalD")} </StepDescription>
        </Step>
        <Step>
          <IconContainer>
            <Icon src="/how-three.svg" alt="Vehicle Recovery" />
          </IconContainer>
          <StepTitle>{t("VehicleRecovery")}</StepTitle>
          <StepDescription>{t("VehicleRecoveryD")} </StepDescription>
        </Step>
      </StepsContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;
