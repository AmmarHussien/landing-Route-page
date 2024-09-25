import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 60px 20px;
  background: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const ServicesHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ServiceCard = styled.div`
  background: #e0f2f1;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const IconContainer = styled.div`
  margin-bottom: 15px;
  transition: transform 0.3s ease;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: rotate(15deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <ServicesHeading>Our Services</ServicesHeading>
      <ServiceCards>
        <ServiceCard>
          <IconContainer>
            <Icon src="/service-one.svg" alt="Car Towing" />
          </IconContainer>
          <ServiceTitle>Car Towing</ServiceTitle>
          <ServiceDescription>
            24/7 emergency towing service for any breakdown or accident.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <IconContainer>
            <Icon src="/service-two.svg" alt="Battery Changes" />
          </IconContainer>
          <ServiceTitle>Battery Changes</ServiceTitle>
          <ServiceDescription>
            Comprehensive roadside assistance for Battery changes.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <IconContainer>
            <Icon src="/service-three.svg" alt="Car Refuling" />
          </IconContainer>
          <ServiceTitle>Car Refuling</ServiceTitle>
          <ServiceDescription>
            Comprehensive roadside assistance for fuel delivery.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <IconContainer>
            <Icon src="/service-four.svg" alt="Tire Inflate" />
          </IconContainer>
          <ServiceTitle>Tire Inflate</ServiceTitle>
          <ServiceDescription>
            Comprehensive roadside assistance for Tire Inflatey.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <IconContainer>
            <Icon src="/service-five.svg" alt="Oil Change" />
          </IconContainer>
          <ServiceTitle>Oil Change</ServiceTitle>
          <ServiceDescription>
            Comprehensive roadside assistance for Oil Change.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <IconContainer>
            <Icon src="/service-six.svg" alt="Car Wash" />
          </IconContainer>
          <ServiceTitle>Car Wash</ServiceTitle>
          <ServiceDescription>
            Comprehensive roadside assistance for Car Wash.
          </ServiceDescription>
        </ServiceCard>
      </ServiceCards>
    </ServicesSection>
  );
};

export default Services;
