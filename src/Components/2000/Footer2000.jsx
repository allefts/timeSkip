/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const Styled2000Footer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .copyRight {
    margin-left: 20px;
  }
`;

const Footer2000 = () => {
  return (
    <Styled2000Footer>
      <p className="copyRight">
        Copyright © Allef Soares 1980. All Rights Reserved{" "}
      </p>
    </Styled2000Footer>
  );
};

export default Footer2000;
