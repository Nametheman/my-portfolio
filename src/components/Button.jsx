import React from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({ path, name }) => {
  return (
    <LinkButton href={`https://${path}`} target="_blank">
      {name}
    </LinkButton>
  );
};

export default Button;

const LinkButton = styled.a`
  background-color: #fdae24;
  padding: 24px 35px;
  color: #fff;
  font-size: ${(props) => props.fontSize};
  font-family: "gilroyregular", sans-serif;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  /* font-size: 22px; */

  @media only screen and (max-width: 1320px) {
    padding: 15px 20px;
  }

  @media only screen and (max-width: 500px) {
    padding: 15px 10px;
    font-size: 12px;
  }
`;
