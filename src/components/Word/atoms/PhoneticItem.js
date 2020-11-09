import React from "react";
import styled from "styled-components";

const LinkBoi = styled.a`
  margin-right: 1em;
`;

const PhoneticItem = props => {
  return <LinkBoi href={props.audio}>{props.text}</LinkBoi>;
};

export default PhoneticItem;
//props.audio
