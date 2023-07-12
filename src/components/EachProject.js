import React from "react";
import styled from "styled-components";
import Button from "./Button";
import adashi from "../assets/images/adashi.svg";

const Project = ({ img, name, link, details, btnText, stack }) => {
  return (
    <Container>
      <div
        className="imageWrapper"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <img src={img} alt="project_image" />
      </div>
      <div className="projectDetailWrapper">
        <h3
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="800"
        >
          {name}
        </h3>

        <p
          className="about"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="900"
        >
          About
        </p>
        <article
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="1000"
        >
          {details}
        </article>
        <p
          className="availability"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="1100"
        >
          Stack
        </p>
        <div className="stacks">
          <ul>
            {stack.map((s) => {
              return (
                <li
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  data-aos-delay="1100"
                >
                  {s}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="buttonWrapper"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="1200"
        >
          <Button name={btnText} path={link} fontSize={10} />
        </div>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.section`
  display: flex;
  margin-top: 2.5rem;
  gap: 8.2rem;
  padding: 0 2rem 0 0;
  /* align-items: center; */
  margin-bottom: 5rem;

  .imageWrapper {
    img {
      width: 480px;
      height: 340px;
      border-radius: 10px;
    }
  }
  .projectDetailWrapper {
    h3 {
      font-family: "gilroymedium", sans-serif;
      font-size: 40px;
      margin-bottom: 20px;
      color: #fff;
    }
    .project_link {
      color: #fdae24;
      font-family: "gilroysemibold", sans-serif;
      font-size: 20px;
      margin-top: -1rem;
      span {
        a {
          margin-left: 9px;
          color: #fdae24;
          text-decoration: underline;
          font-size: 20px;
          letter-spacing: 1.3px;
        }
      }
    }
    .about {
      font-family: "gilroybold", sans-serif;
      margin: 1.5rem 0 1rem;
      color: #ffffffb2;
      font-size: 18px;
    }
    article {
      font-family: "gilroybold", sans-serif;
      font-size: 16px;
      letter-spacing: 1.1px;
      line-height: 1.2;
      color: #fff;
      width: 70%;
    }
    .availability {
      color: #ffffffb2;
      font-family: "gilroysemibold", sans-serif;
      font-size: 20px;
      margin-top: 1rem;

      span {
        margin-left: 9px;
        font-size: 20px;
        letter-spacing: 1.3px;
      }
    }
    .stacks {
      color: #fdae24;
      margin-top: 10px;
      font-weight: bold;

      ul {
        display: flex;
        column-gap: 2.5rem;
        row-gap: 1rem;
        list-style: none;
        flex-wrap: wrap;
      }
    }
    .buttonWrapper {
      margin-top: 3rem;
    }
  }

  @media only screen and (max-width: 1320px) {
    .imageWrapper {
      img {
        width: 400px;
        height: 300px;
        border-radius: 10px;
      }
    }
    .projectDetailWrapper {
      h3 {
        font-family: "gilroymedium", sans-serif;
        font-size: 30px;
        margin-bottom: 15px;
        color: #fff;
      }
      .about {
        font-family: "gilroybold", sans-serif;
        margin: 1rem 0 1rem;
        color: #ffffffb2;
        font-size: 18px;
      }
      .buttonWrapper {
        margin-top: 2rem;
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    margin-bottom: 10rem;
    gap: 4rem;

    /* align-items: center;  */
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 7rem;
    gap: 2rem;
    align-items: center;
    .imageWrapper {
      img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }
    }
    .stacks {
      font-size: 12px;
      ul {
        font-size: 12px;
      }
    }
    .projectDetailWrapper {
      h3 {
        font-family: "gilroymedium", sans-serif;
        font-size: 20px;
        margin-bottom: 20px;
        color: #fff;
      }
      .about {
        font-family: "gilroybold", sans-serif;
        margin: 1.5rem 0 1rem;
        color: #ffffffb2;
        font-size: 12px;
      }
      article {
        font-family: "gilroybold", sans-serif;
        font-size: 13px;
        letter-spacing: 1.1px;
        line-height: 1.2;
        color: #fff;
        width: 90%;
      }
      .availability {
        color: #ffffffb2;
        font-family: "gilroysemibold", sans-serif;
        font-size: 14px;
        margin-top: 1rem;

        span {
          margin-left: 9px;
          font-size: 20px;
          letter-spacing: 1.3px;
        }
      }
    }
  }
`;
