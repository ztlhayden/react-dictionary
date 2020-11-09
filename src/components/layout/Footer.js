import React from "react";
import styled from "styled-components";

const LinkBoi = styled.a`
  margin-right: 1em;
  color: var(--color-white);
`;

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 1em;
  margin-top: 2em;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkBoi href="https://twitter.com/haydenyounglex">
        @haydenyounglex
      </LinkBoi>
      <LinkBoi href="https://dictionaryapi.dev/">Google Dictionary API</LinkBoi>
      <LinkBoi href="https://bonappeairplane.com">BonAppeAirplane.com</LinkBoi>
    </FooterWrapper>
  );
};

export default Footer;
