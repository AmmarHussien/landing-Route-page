import styled from "styled-components";
import { useEffect, useRef } from "react";

const TestimonialsSection = styled.section`
  padding: 60px 20px;
  background: #f5f5f5;
  text-align: center;
`;

const TestimonialsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialSlider = styled.div`
  display: flex;
  gap: 20px;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  justify-content: center;
  padding-bottom: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const TestimonialItem = styled.div`
  background: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  min-width: 220px;
  scroll-snap-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-width: 180px;
    padding: 10px;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialAuthor = styled.h4`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const NavigationArrow = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  ${({ direction }) =>
    direction === "left"
      ? `
    left: 10px;
  `
      : `
    right: 10px;
  `}

  &:focus {
    outline: none;
  }
`;

const Testimonials = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      sliderRef.current.scrollLeft = scrollLeft + scrollAmount;
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
    }
  }, []);

  return (
    <TestimonialsSection>
      <TestimonialsHeading>What Our Clients Say</ TestimonialsHeading>
      <div style={{ position: "relative" }}>
        <TestimonialSlider ref={sliderRef}>
          <TestimonialItem>
            <TestimonialText>
              Route provided quick and reliable service when my SUV broke down.
            </TestimonialText>
            <TestimonialAuthor>- Mike, SUV Owner</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialText>
              Excellent service! The tow truck arrived faster than I expected.
            </TestimonialText>
            <TestimonialAuthor>- Lisa, Truck Driver</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialText>
              Very professional service, would definitely recommend Route.
            </TestimonialText>
            <TestimonialAuthor>- John, Car Owner</TestimonialAuthor>
          </TestimonialItem>
        </TestimonialSlider>
        <NavigationArrow direction="left" onClick={() => scroll("left")}>
          &#9664;
        </NavigationArrow>
        <NavigationArrow direction="right" onClick={() => scroll("right")}>
          &#9654;
        </NavigationArrow>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
