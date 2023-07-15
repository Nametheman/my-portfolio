import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(true);
  const { changeToLightTheme, changeToDarkTheme, isDarkTheme } = useContext(
    ThemeContext
  );

  //   useEffect(() => {
  //     console.log("changed theme");
  //   }, [isDarkTheme]);

  //   console.log(isDarkTheme);
  return (
    <Container>
      <div
        className="light"
        style={
          isDarkTheme
            ? {}
            : {
                backgroundColor: "#718183",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }
        }
      >
        <BsSun
          style={
            isDarkTheme
              ? {
                  color: "#ffffff2a",
                }
              : {
                  color: "#fff",
                  fontSize: "13px",
                }
          }
          onClick={() => {
            changeToLightTheme();
          }}
        />
      </div>
      <div
        className="dark"
        style={
          isDarkTheme
            ? {
                backgroundColor: "#718183",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }
            : {}
        }
      >
        <BsMoon
          style={
            isDarkTheme
              ? {
                  color: "#fff",
                  fontSize: "13px",
                }
              : {
                  color: "#27272784",
                }
          }
          onClick={() => {
            changeToDarkTheme();
          }}
        />
      </div>
    </Container>
  );
};

export default ThemeSwitch;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-radius: 20px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 1);
  padding: 4px 6px;
  .light {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  }
  .dark {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  }
`;
