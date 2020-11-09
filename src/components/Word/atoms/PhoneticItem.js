import React from "react";
import styled from "styled-components";

const linker = styled.a`
  margin-right: 1em;
`;

const PhoneticItem = props => {
  return <linker href={props.audio}>{props.text}</linker>;
};

export default PhoneticItem;
//props.audio
