import React from "react";
import styled from "styled-components";
import { AiFillFire } from "react-icons/ai";

//COLORS
//Orange: #f96d15
//Blue: #062743

const Styled2020Nav = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat;
  position: fixed;
  z-index: 3;
  // background-color: #062743;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .left-content {
    display: flex;
    flex-flow: row;
    margin-left: 20px;
    font-size: 1.5rem;
    animation: slideUp 1s;

    .fireIcon {
      display: flex;
      align-items: center;
      color: #f96d15;
      margin-right: 10px;
    }

    .navTitle {
      font-size: 2rem;
      cursor: pointer;
      color: white;
    }
  }

  .right-content {
    font-family: Montserrat;
    animation: slideUp 1s;

    .nav-links {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      margin-right: 20px;

      .nav-link {
        padding: 0 1rem;
        font-size: 1.25rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s ease;

        &:hover {
          color: #f96d15;
        }
      }
    }
  }
`;

const Nav2020 = () => {
  return (
    <Styled2020Nav>
      <div className="left-content">
        <h2 className="fireIcon">
          <AiFillFire />
        </h2>
        <h2 className="navTitle">Time Skip</h2>
      </div>
      <div className="right-content">
        <ul className="nav-links">
          <li className="nav-link">About</li>
          <li className="nav-link">Gallery</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </Styled2020Nav>
  );
};

export default Nav2020;
