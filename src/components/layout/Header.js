import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 1em;
  margin-bottom: 2em;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Simple Dictionary!</h1>
      <span>A very simple refrence dictionary.</span>
    </HeaderWrapper>
  );
};

export default Header;
