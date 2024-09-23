import React, { useContext } from "react";
import styled from "styled-components";
import EachTimeline from "./EachTimeline";
import { ThemeContext } from "../context/ThemeContext";

const Timeline = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const faqs = [
    {
      title: "AdashiEsusuAkawo",
      text: "Adashi helps you create halal contributions towards achieving a better financial future while also providing a platform where rotatory contribution is possible in groups.",
      id: "faq1",
      date: "August 10, 2023",
      direction: "left",
      githubLink: "#",
      website: "https://adashiesusuakawo.com/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "CIT Microfinance Bank",
      text: "Whether it’s Money to Pay Rent, Cover School Fees or Buy a New Car? CIT offer online loans up to ₦5,000,000, conveniently spread over 3-6 months, and their flexible repayment pattern is specially designed to meet your needs.",
      id: "faq2",
      direction: "right",
      date: "November 29, 2022",
      githubLink: "#",
      website: "https://ibank.citmfb.com/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "TMSAAS - API marketplace",
      text: "TM30’s SAAS Platform is a solution built to speed up integration for Company’s, developers, individuals or entrepreneurs’ websites, Applications or processes.",
      id: "faq3",
      direction: "left",
      date: "March 05, 2023",
      githubLink: "#",
      website: "https://saas.tm30.net/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Swatini Power",
      text: "Swatini power offer end-to-end energy-efficient solutions to commercial and industrial clientsm from design and development to financing and implementation.",
      id: "faq4",
      direction: "right",
      date: "May 11 , 2022",
      githubLink: "#",
      website: "https://www.swatinipower.com/",
      organization: "Swatini Power",
    },
    {
      title: "Official TM30's Website",
      text: "TM30 Global Limited, a leading software solution company at the forefront of revolutionizing industries through cutting-edge technologies and innovative software development.",
      id: "faq5",
      direction: "left",
      date: "March 30 , 2022",
      githubLink: "#",
      website: "https://www.tm30.net/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Official Unified Payment's Payarena Website",
      text: "Experience the ultimate in mobile services with our payment platform - where convenience meets innovation",
      id: "faq6",
      direction: "right",
      date: "Ongoing",
      githubLink: "#",
      website: "https://www.payarena.com/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Official Bankpro Website",
      text: "BankPro is an enterprise grade mobile-first internet/mobile banking platform that enables financial institutions to accelerate time to market. It offers capabilities for omni-channel experiences with highly customizable features.",
      id: "faq6",
      direction: "left",
      date: "Ongoing",
      githubLink: "#",
      website: "https://official-bankpro.vercel.app/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Diligence Records",
      text: "Professional due diligence and KYC verification for African vendors and high-profile individuals. Elevate business integrity with advanced algorithms, real-time monitoring, and regulatory compliance assurance.",
      id: "faq7",
      direction: "right",
      date: "Ongoing",
      githubLink: "#",
      website: "https://records.diophalytics.com/",
      organization: "Noemdek Limited",
    },
    {
      title: "PetroData",
      text: "Offers real-time data analytics and visualization tools for the petroleum sector. Users can access comprehensive information on production rates, market trends, and prices. The app also includes analytics for better decision-making.",
      id: "faq8",
      direction: "left",
      date: "Ongoing",
      githubLink: "#",
      website: "https://petrodata.diophalytics.com/",
      organization: "Noemdek Limited",
    },
  ];
  return (
    <Wrapper $isDark={isDarkTheme}>
      <h3>Project Timeline</h3>
      <p className="bigText">
        Here is a breakdown of some of my relevant projects. Showcasing the{" "}
        <br />
        name and the tools used for development
      </p>
      <p className="smallText">
        Here is a breakdown of some of my relevant projects. Showcasing the name
        and the tools used for development
      </p>
      <div className="timelineContainer">
        {faqs.map((faq, idx) => {
          const { title, text, direction, id, date, website, organization } =
            faq;
          return (
            <div
              key={id}
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay={idx + 1 * 500}
            >
              <EachTimeline
                id={id}
                direction={direction}
                text={text}
                title={title}
                date={date}
                website={website}
                organization={organization}
                index={idx}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Timeline;
const Wrapper = styled.section`
  border-bottom: 1px solid #ffffff2e;
  padding: 2rem 15%;
  position: relative;
  .star_pu {
    position: absolute;
    top: 16%;
    left: 24%;
  }
  h3 {
    color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .bigText {
    color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  .smallText {
    display: none;
  }
  .timelineContainer {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 480px) {
    /* display: none; */
    .bigText {
      display: none;
    }
    .smallText {
      color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
      font-size: 0.7rem;
      text-align: center;
      margin-bottom: 1rem;
      line-height: 1.6;
      display: block;
    }
  }
`;
