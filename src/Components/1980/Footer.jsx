/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import validHTML from "../../Assets/validHTML.png";

const StyledFooter = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: blue;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  color: white;

  .privacy {
    cursor: pointer;
    text-decoration: underline white;
    margin-right: 80px;
  }

  .copyRight {
    margin: 0 20px 0 10px;
  }

  .validHTML {
    margin-right: 40px;
  }

  .google {
    color: inherit;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p className="copyRight">
        Copyright © Allef Soares 1980. All Rights Reserved{" "}
      </p>
      <a className="privacy">Privacy Policy</a>
      <a
        target="_blank"
        href="https://validator.w3.org/check?uri=http%3A%2F%2Facme.com%2F;accept=text%2Fhtml%2Capplication%2Fxhtml%2Bxml%2Capplication%2Fxml%3Bq%3D0.9%2Cimage%2Fwebp%2Cimage%2Fapng%2C%2A%2F%2A%3Bq%3D0.8%2Capplication%2Fsigned-exchange%3Bv%3Db3%3Bq%3D0.9;accept-language=en-US%2Cen%3Bq%3D0.9"
        className="validHTML"
      >
        <img src={validHTML} alt="Valid HTML" />
      </a>
      <a className="google" href="google.com">
        Google
      </a>
    </StyledFooter>
  );
};

export default Footer;
