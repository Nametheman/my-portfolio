import React from "react";
import styled from "styled-components";
import Socials from "./Socials";
import Button from "./Button";
import file from "../assets/files/cv.pdf";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="f1">
          <div className="f1_content">
            <h1>Let’s get to work</h1>
            <p>
              Thank you for taking the time to read about me. Please feel free{" "}
              <br />
              to contact me at any time if you have any queries or would want to
              discuss new opportunities.
            </p>
            <p className="calendly">
              or book a time with me via call using my calendly link{" "}
              <a href="https://calendly.com/nametheman" target="_blank">
                here.
              </a>
            </p>
          </div>
          <div className="btnWrapper">
            <a href={file} download>
              Get My CV
            </a>
            {/* <Button name="Send a message" path="/" /> */}
          </div>
        </div>
        <Socials />
      </div>
      <div className="copyright">
        <p>Copyright @ 2023 || Emmanuel Owolabi</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding: 0 5rem;
  margin-top: 10rem;

  .copyright {
    text-align: center;
    padding: 8rem 0 5rem;
    color: #ffffffb2;
  }
  .footer {
    background-color: #021417;
    border-radius: 20px;
    color: #ffffffb2;
    padding: 8rem 6rem 5rem;
    .f1 {
      display: flex;
      .f1_content {
        flex: 1.5;
        h1 {
          color: #ffffff;
          font-size: 40px;
          margin-bottom: 30px;
        }
        p {
          line-height: 2.2;
          font-size: 16px;
        }
        .calendly {
          margin-top: 50px;

          a {
            color: #fdae24;
          }
        }
      }
      .btnWrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        a {
          background-color: #fdae24;
          padding: 24px 35px;
          color: #fff;
          font-size: 16px;
          text-decoration: none;
          font-family: "gilroylight", sans-serif;
          border-radius: 8px;
        }
      }
    }
    .f2 {
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
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 100vw;
    overflow: hidden;
    /* margin: 0; */
    margin: 6rem auto;
    width: 100%;
    padding: 2rem;

    .container {
      margin: 0;
    }
  }
  @media only screen and (max-width: 450px) {
    /* margin: 0; */
    margin: 6rem auto 1rem;
    width: 100%;
    padding: 2rem;

    .container {
      margin: 0;
    }
    .copyright {
      text-align: center;
      font-size: 10px;
      padding: 3rem 0 1rem;
      color: #ffffffb2;
    }
    .footer {
      padding: 2rem;
      .f1 {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        .f1_content {
          flex: 1.5;
          h1 {
            color: #ffffff;
            font-size: 20px;
            margin-bottom: 30px;
          }
          p {
            line-height: 2.2;
            font-size: 12px;
          }
          .calendly {
            margin-top: 50px;

            a {
              color: #fdae24;
            }
          }
        }
        .btnWrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          a {
            background-color: #fdae24;
            padding: 10px;
            color: #fff;
            font-size: 10px;
            text-decoration: none;
            font-family: "gilroylight", sans-serif;
            border-radius: 8px;
          }
        }
      }
    }
  }
`;
