import styled from "styled-components";
import mobileImage from "/Splash-one.svg"; // Replace with your image path
import anotherImage from "/Splash-two.svg"; // Replace with your image path
import googlePlayLogo from "/GooglePlay.svg"; // Replace with your logo path
import appStoreLogo from "/AppStore.svg"; // Replace with your logo path
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReviewPageContainer = styled.div`
  background: linear-gradient(135deg, #f0f4f8 0%, #d0e4f0 100%);
  min-height: 90.5vh;
  overflow: hidden;
  position: relative;
`;

const ReviewSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  color: #333;
  position: relative;
  z-index: 1;
`;

const ReviewTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  position: relative;
  animation: fadeIn 1s ease-out;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  z-index: 1;
`;

const ReviewCard = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: slideUp 1s ease-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ReviewText = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const DownloadButtons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 1s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ButtonImage = styled.img`
  max-width: 30px; /* Adjusted size for better appearance */
  height: auto;
`;

const BackButtonBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10000;
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
    background-color: #0056b3;
  }

  svg {
    margin-right: 8px;
  }
`;

const MobileImage = styled.img`
  max-width: 40%;
  height: auto;
  position: absolute;
  bottom: -10%;
  left: 5%;
  transform: rotate(-10deg);
  animation: float 3s ease-in-out infinite;
`;

const AdditionalImage = styled.img`
  max-width: 40%;
  height: auto;
  position: absolute;
  bottom: -10%;
  right: 5%;
  transform: rotate(10deg);
  animation: float 4s ease-in-out infinite reverse;
`;

const ReviewPage = () => (
  <ReviewPageContainer>
    <BackButtonBox>
      <BackButton to="/landing-page">
        <AiOutlineArrowLeft /> Back to Home
      </BackButton>
    </BackButtonBox>
    <ReviewSection>
      <ReviewTitle>Discover Our New App!</ReviewTitle>
      <ReviewWrapper>
        <ReviewCard>
          <ReviewText>
            Our brand new app is here to revolutionize your experience. Download
            it now and enjoy a seamless, user-friendly interface that&apos;s
            designed with you in mind.
          </ReviewText>
        </ReviewCard>
        <ReviewCard>
          <ReviewText>
            Be among the first to experience the latest in app technology. Your
            feedback is crucial, so get it now and let us know how we can make
            it even better!
          </ReviewText>
        </ReviewCard>
      </ReviewWrapper>
      <DownloadButtons>
        <Button href="https://play.google.com/store/apps/details?id=yourapp">
          <ButtonImage src={googlePlayLogo} alt="Google Play" />
        </Button>
        <Button href="https://apps.apple.com/app/idyourapp">
          <ButtonImage src={appStoreLogo} alt="App Store" />
        </Button>
      </DownloadButtons>
    </ReviewSection>
    <MobileImage src={mobileImage} alt="Mobile App" />
    <AdditionalImage src={anotherImage} alt="Another View" />
  </ReviewPageContainer>
);

export default ReviewPage;
