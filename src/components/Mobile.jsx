import styled from "styled-components";
import mobileImage from "/Splash-one.svg"; // Replace with your image path
import anotherImage from "/Splash-two.svg"; // Replace with your image path
import googlePlayLogo from "/GooglePlay.svg"; // Replace with your logo path
import appStoreLogo from "/AppStore.svg"; // Replace with your logo path
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  display: inline-block;
  padding: 20px 20px;
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
    background-color: #003d4c;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;

    svg {
      font-size: 1.5em;
    }
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

const ReviewPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <ReviewPageContainer>
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
      <ReviewSection>
        <ReviewTitle>{t("DiscoverOurNewApp")}</ReviewTitle>
        <ReviewWrapper>
          <ReviewCard>
            <ReviewText>{t("DiscoverOurNewAppR1")}</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <ReviewText>{t("DiscoverOurNewAppR2")}</ReviewText>
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
};

export default ReviewPage;
