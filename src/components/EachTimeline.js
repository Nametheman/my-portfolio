/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled from "styled-components";
import github from "../assets/images/github.svg";
import link from "../assets/images/link.svg";
import { CiLink } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext";
import { IoCodeSlashOutline } from "react-icons/io5";

// import { colors } from "../bits/colors";

const EachTimeline = ({
  id,
  direction,
  text,
  title,
  index,
  date,
  website,
  organization,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <Wrapper $direction={direction} $isDarkTheme={isDarkTheme}>
        <div className="left">
          <p className="title">{title}</p>
          <p className="text">{text}</p>
        </div>
        <div className="middle">
          <span className="line"></span>
          <div className="number">
            <p>{index + 1}</p>
          </div>
        </div>
        <div className="right">
          <p className="org">{organization}</p>
          <div className="linksWrap">
            <span>
              <a href="#" target="_blank">
                <IoCodeSlashOutline />
              </a>
            </span>
            <span>
              <a href={website} target="_blank">
                <CiLink />
              </a>
            </span>
          </div>
          <p className="date">{date ? date : "November 18, 2023"}</p>
        </div>
      </Wrapper>
      <Wrapper2 $isDarkTheme={isDarkTheme}>
        <div className="left">
          <span className="line"></span>
          <div className="number">
            <p>{index + 1}</p>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <p className="title">{title}</p>
            <p className="text">{text}</p>
          </div>
          <div className="date">
            <p>{date}</p>
          </div>
        </div>
      </Wrapper2>
    </>
  );
};

export default EachTimeline;
const Wrapper = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: ${(props) =>
    props.$direction === "left" ? "row" : "row-reverse"};
  justify-content: center;
  gap: 3rem;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    .title {
      font-weight: 600;
      font-size: 1.1rem;
      text-align: ${(props) =>
        props.$direction === "left" ? "right" : "left"};
      margin: 0rem;
      color: #ffbd59;
    }
    .text {
      color: ${(props) => (props.$isDarkTheme ? "#ffffff" : "#000000")};
      text-align: ${(props) =>
        props.$direction === "left" ? "right" : "left"};
      /* width: 60%; */
      font-size: 0.8rem;

      margin-bottom: 0rem;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: ${(props) =>
      props.$direction === "right" ? "flex-end" : "flex-start"};
    .org {
      margin-bottom: 0.5rem;
      color: ${(props) => (props.$isDarkTheme ? "#ffffff" : "#000000")};
      font-weight: bold;
    }
    .linksWrap {
      display: flex;
      align-items: center;
      justify-content: ${(props) =>
        props.$direction === "right" ? "flex-end" : "flex-start"};
      gap: 2rem;
      margin-bottom: 0.5rem;

      span {
        width: 35px;
        height: 35px;
        background-color: #3d3d3d3d;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        cursor: pointer;
        /* gap: 2rem; */
        &:hover {
          transform: scale(1.1);
        }
        &:hover a svg {
          color: #c28e41;
          transform: scale(1.04);
        }
        a {
          svg {
            color: #adadad;
            font-size: 18px;
            transition: all 0.3s ease;
          }
        }
      }
    }
    .date {
      font-weight: 600;
      font-size: 1rem;
      margin: 0rem;
      color: #ffbd59;
      text-align: ${(props) =>
        props.$direction === "right" ? "right" : "left"};
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    .timeLine {
      height: 50px;
    }
    .line {
      background-color: #c28e41;
      width: 2px;
      height: 100px;
    }
    .number {
      background: #c28e41;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: #fff;
        font-size: 0.9rem;
        margin-bottom: 0rem;
        line-height: 1.6;
        font-weight: 600;
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    gap: 2rem;
    .left {
      .title {
        font-size: 0.9rem;
      }
      .text {
        font-size: 0.7rem;
      }
    }
    .right {
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

const Wrapper2 = styled.section`
  display: none;
  @media only screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    /* border: 1px solid red; */
    /* text-align: left; */
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      .timeLine {
        height: 80px;
      }
      .number {
        background: #c28e41;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          color: #ffbd59;
          font-size: 0.6rem;
          margin-bottom: 0rem;
          line-height: 1.6;
          font-weight: 600;
        }
      }
    }
    .right {
      .content {
        flex: 1;
        .title {
          font-weight: 600;
          font-size: 0.8rem;
          text-align: left;
          color: ${(props) => (props.$isDarkTheme ? "#ffffff" : "#000000")};

          margin-bottom: 0rem;
        }
        .text {
          color: #fff;
          text-align: left;
          color: ${(props) => (props.$isDarkTheme ? "#ffffff" : "#000000")};

          /* width: 60%; */
          font-size: 0.6rem;

          margin-bottom: 0rem;
        }
      }
      .date {
        flex: 1;

        p {
          font-weight: 600;
          font-size: 0.8rem;
          margin-bottom: 0rem;
          text-align: left;
          color: ${(props) => (props.$isDarkTheme ? "#ffffff" : "#000000")};
        }
      }
    }
  }
`;
