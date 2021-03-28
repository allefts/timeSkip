/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-title {
    display: flex;
    flex-flow: row;

    .no-image {
      height: 50%;
    }
  }

  .nav-links {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 20px;

    .nav-link {
      padding-right: 20px;
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }
  }

  .line {
    width: 100%;
    padding: 4rem;
    border: 2px solid blue;
  }
`;

const Nav = () => {
  return (
    // <div></div>
    <StyledNav>
      <div className="nav-title">
        <img className="no-image" alt="[ Time Skip Image ]" />
        <h1 className="navTitle">TimeSkip</h1>
      </div>

      <ul className="nav-links">
        <li>
          <a className="nav-link">Home</a>
        </li>
        <li>
          <a className="nav-link">Gallery</a>
        </li>
        <li>
          <a className="nav-link">Contact</a>
        </li>
      </ul>
      <div className="line"></div>
    </StyledNav>
  );
};

export default Nav;
