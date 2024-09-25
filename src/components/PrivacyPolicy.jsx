import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  FaLock,
  FaUserSecret,
  FaShieldAlt,
  FaHandshake,
  FaFileSignature,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChildren,
  faFileShield,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { GrServices } from "react-icons/gr";
import { FaMapLocationDot } from "react-icons/fa6";

import { FaCookie } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdMedicalInformation } from "react-icons/md";

// Styled components with creative improvements
const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #e9ecef, #f8f9fa);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;

  @media (min-width: 768px) {
    max-width: 80%;
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 3em;
    margin-bottom: 30px;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #005379;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.75em;
    margin-bottom: 15px;
  }
`;

const BackButtonBox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
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

  svg {
    margin-right: 8px;
    font-size: 1.2em;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;

    svg {
      font-size: 1.5em;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #444;
  margin-left: 15px;

  @media (min-width: 768px) {
    font-size: 1.15em;
    margin-left: 25px;
  }
`;

const LiBox = styled.ul`
  margin-left: 20px;
  list-style: inside circle;
  color: #555;
  padding-left: 0;

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;

const Links = styled.a`
  color: #005379;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 1.1em;
  color: #f5a201;

  svg {
    fill: currentColor;
  }

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

// // Define a styled component for the icons
// const StyledIcon = styled.div`
//   font-size: 24px;
//   color: #000; /* Set a consistent color */
//   margin-right: 8px;
//   display: inline-flex;
//   align-items: center;
// `;

const PrivacyPolicy = () => {
  return (
    <Container>
      {/* Back Button */}
      <BackButtonBox>
        <BackButton to="/landing-page">
          <AiOutlineArrowLeft /> Back to Home
        </BackButton>
      </BackButtonBox>
      <Title>Privacy Policy</Title>

      <Section>
        <SectionTitle>
          <Icon>
            <FaLock />
          </Icon>{" "}
          Introduction
        </SectionTitle>
        <Paragraph>
          Route built the Route app as a commercial application. This SERVICE is
          provided by Route and is intended for use as is. This Privacy Policy
          explains how Route collects, uses, discloses, and safeguards your
          personal information when you use our mobile application. By choosing
          to use our Service, you agree to the collection and use of information
          in accordance with this policy. The personal information we collect is
          used to provide and improve the Service, and we will not use or share
          your information with anyone except as described in this Privacy
          Policy. The terms used in this Privacy Policy have the same meanings
          as in our Terms and Conditions, which are accessible at Route unless
          otherwise defined in this Privacy Policy.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaUserSecret />
          </Icon>{" "}
          Information We Collect And Use
        </SectionTitle>
        <Paragraph>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to your name, email, phone number, and
          vehicle information. The information that we request will be retained
          by us and used as described in this privacy policy. The app also uses
        </Paragraph>
        <Paragraph>
          The app also use third-party services that may collect information to
          identify you.
        </Paragraph>
        <Paragraph>Third-Party Service Providers:</Paragraph>
        <LiBox>
          <li>Google Play Services</li>
          <li>Firebase Crashlytics</li>
          <li>Google Maps</li>
        </LiBox>
        <Paragraph>
          We may collect the following types of information.
        </Paragraph>
        <LiBox>
          <li>
            Personal Information: Name, email address, phone number, and payment
            details.
          </li>
          <li>
            Location Data: Real-time location information when the app is in
            use.
          </li>
          <li>
            Usage Data: Information on how you use the app, such as the features
            you use and your preferences.
          </li>
          <li>
            Payment Information: Credit card details, billing address, and
            transaction history.
          </li>
        </LiBox>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <MdMedicalInformation />
          </Icon>
          How We Use Your Information
        </SectionTitle>
        <Paragraph>We use the collected data for various purposes:</Paragraph>
        <LiBox>
          <li>To provide and maintain our service.</li>
          <li>To manage your account and provide customer support.</li>
          <li>To monitor usage and improve the app.</li>
          <li>To process payments and manage transactions.</li>
          <li>
            To send notifications related to your transactions and usage of the
            app.
          </li>
        </LiBox>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaMapLocationDot />
          </Icon>
          Location and Tracking
        </SectionTitle>
        <Paragraph>
          To enhance your experience and provide timely assistance, the Route
          app will request permission to track your current location. This is
          essential for delivering services such as dispatching help to your
          exact location quickly. Location data is accessed through the Google
          Maps service to ensure the fastest and most accurate support.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaDatabase />
          </Icon>
          Log Data
        </SectionTitle>
        <Paragraph>
          Whenever you use our Service, in the event of an error in the app, we
          collect data and information (via third-party services) from your
          device called Log Data. This may include details such as your device’s
          IP address, device name, operating system version, the configuration
          of the app during use, the time and date of your use, and other
          statistics.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaCookie />
          </Icon>
          Cookies
        </SectionTitle>
        <Paragraph>
          Cookies are small data files commonly used as anonymous unique
          identifiers. These are sent to your browser from the websites that you
          visit and are stored on your device&apos;s internal memory. This
          Service does not explicitly use cookies. However, the app may employ
          third-party code and libraries that use cookies to gather information
          and enhance their services. You can choose to either accept or refuse
          these cookies and know when one is sent to your device. If you decline
          our cookies, some portions of the Service may not function properly.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <GrServices />
          </Icon>
          Service Providers
        </SectionTitle>
        <Paragraph>
          We may employ third-party companies and individuals for the following
          reasons:
        </Paragraph>
        <LiBox>
          <li>To facilitate our Service</li>
          <li>To provide the Service on our behalf</li>
          <li>To perform Service-related services</li>
          <li>To assist us in analyzing how our Service is used</li>
        </LiBox>
        <Paragraph>
          We want to inform users that these third parties have access to your
          personal information, solely to perform the tasks assigned to them on
          our behalf. They are obligated not to disclose or use the information
          for any other purpose.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaHandshake />
          </Icon>
          Sharing Your Information
        </SectionTitle>
        <Paragraph>We may share your information with:</Paragraph>
        <LiBox>
          <li>
            Service Providers: To facilitate our services, including payment
            processing, fraud prevention, and customer support.
          </li>
          <li>
            Payment Processors: To process your payment transactions securely.
          </li>
          <li>
            Law Enforcement: If required by law or to protect our rights and
            property.
          </li>
        </LiBox>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaShieldAlt />
          </Icon>{" "}
          Payment Security
        </SectionTitle>
        <Paragraph>
          We prioritize the security of your payment information. We use secure
          payment gateways and encrypt sensitive data during transmission to
          ensure your payment details are protected.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FontAwesomeIcon icon={faFileShield} />
          </Icon>{" "}
          Data Security
        </SectionTitle>
        <Paragraph>
          We value your trust in providing us with your personal information,
          and we are committed to using commercially acceptable means to protect
          it. However, please be aware that no method of transmission over the
          internet or electronic storage is completely secure. While we strive
          to use strong security measures, we cannot guarantee absolute
          security.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FontAwesomeIcon icon={faLink} />
          </Icon>
          Links to Other Sites
        </SectionTitle>
        <Paragraph>
          Our Service may contain links to other websites. If you click on a
          third-party link, you will be directed to that site. Please note that
          these external websites are not operated by us. Therefore, we strongly
          advise you to review the Privacy Policy of these sites. We are not
          responsible for the content, privacy policies, or practices of any
          third-party websites or services. security.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FontAwesomeIcon icon={faChildren} />
          </Icon>
          Children’s Privacy
        </SectionTitle>
        <Paragraph>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. If we discover that a child under 13 has provided us with
          personal information, we will delete this information from our servers
          immediately. If you are a parent or guardian and you are aware that
          your child has provided us with personal information, please contact
          us so we can take the necessary steps.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaFileSignature />
          </Icon>
          Changes to This Privacy Policy
        </SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>
          <Icon>
            <FaEnvelope />
          </Icon>
          Contact Us
        </SectionTitle>
        <Paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
          <Links href="mailto:privacy@example.com"> privacy@example.com</Links>.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
