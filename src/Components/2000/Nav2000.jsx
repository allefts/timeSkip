import React from "react";
import styled from "styled-components";

const Styled2000Nav = styled.div`
  // height: 100px;
  width: 100%;
  font-family: monospace;

  h2 {
    border: 2px solid blue;
    margin: 2rem;
    font-size: 2rem;
  }

  .navLinks {
    list-style: none;
    display: flex;
    flex-flow: row;
    justify-content: center;

    .navLink {
      font-size: 1.2rem;
      margin: 2rem;
      background-color: blue;
      color: white;
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: red;
      }
    }
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  .futureBtn {
    padding: 1rem;
    font-size: 16px;
    font-family: monospace;
  }
`;

function Nav2000() {
  return (
    <Styled2000Nav>
      <h2>TimeSkip</h2>
      <ul className="navLinks">
        <li className="navLink">Home</li>
        <li className="navLink">Gallery</li>
        <li className="navLink">About</li>
      </ul>
    </Styled2000Nav>
  );
}

export default Nav2000;
