import React from "react";
import styled from "styled-components";
import footerLine from "../assets/images/footer_line.svg";
import linkedIn from "../assets/images/linkedIn.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import twitter from "../assets/images/twitter.svg";
import hashnode from "../assets/images/hashnode.svg";
import github from "../assets/images/git.svg";

const Socials = () => {
  return (
    <SocialsWrapper>
      <img src={footerLine} alt="" />
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/emmanuel-owolabi-6b5b73172/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedin" />
        </a>
        <a href="https://wa.me/+2348138469203" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp" />
        </a>

        <a
          href="https://twitter.com/infiniti0x"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://github.com/Nametheman"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://hashnode.com/@Nametheman"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hashnode} alt="hashnode" />
        </a>
      </div>
    </SocialsWrapper>
  );
};

export default Socials;

const SocialsWrapper = styled.div`
  margin-top: 60px;

  .socials {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 30px;

    a {
      text-decoration: none;

      img {
        width: 2.5rem;
      }
    }
  }
`;
