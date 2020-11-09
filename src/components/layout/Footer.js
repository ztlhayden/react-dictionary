import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.header`
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 1em;
  margin-bottom: 2em;
  width: 100%;
  height: 50px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <a>Google Dictionary API</a>
      <a>BonAppeAirplane.com</a>
    </FooterWrapper>
  );
};

export default Footer;
