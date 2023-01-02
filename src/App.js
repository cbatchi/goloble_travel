import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {Home} from './pages';
const App = () => {

  return (
    <MainStyled>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  position: relative;
  padding: 30px;
  width: 100%;
  height: 100vh;
`;

export default App;
