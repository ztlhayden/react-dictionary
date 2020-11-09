import React from "react";
import "./style.css";
import styled from "styled-components";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Word from "./components/Word/Word";

const MainWrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 248px);
`;

export default function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Word />
      </MainWrapper>
      <Footer />
    </>
  );
}
