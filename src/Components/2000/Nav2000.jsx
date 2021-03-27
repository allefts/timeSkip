import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styled2000Nav = styled.div``;

function Nav2000() {
  return (
    <Styled2000Nav>
      <button className="futureBtn">
        <Link to="/2020">Click to Futurize</Link>
      </button>
      <h1>2000 webpage</h1>
    </Styled2000Nav>
  );
}

export default Nav2000;
