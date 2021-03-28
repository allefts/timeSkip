import React from "react";
import styled from "styled-components";
import Plasma from "../../Assets/plasma.png";
import { BiDownArrow } from "react-icons/bi";

const Styled2020Banner = styled.div`
  height: 100vh;
  background-image: url(${Plasma});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;

  .banner {
    margin-left: 20px;
  }

  .bannerTitle {
    color: #f96d15;
    font-size: 4rem;
    font-family: Lato;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    // letter-spacing: 0.075em;
    animation: typing 3.5s;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

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

  .bannerTextContainer {
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  .bannerText {
    font-size: 1.5rem;
    color: white;
    margin: 1rem;
    font-family: Open Sans;
    font-weight: 400;
    padding: 0;
  }

  .arrow {
    position: absolute;
    top: 90%;
    color: white;
    font-size: 2rem;
    width: 100%;
    display: grid;
    place-items: center;

    svg {
      animation: arrowMove 2s infinite;
    }
  }

  @keyframes arrowMove {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  @media screen and (max-width: 772px) {
    .banner {
      margin: 0 auto;
    }

    .bannerTitle {
      font-size: 2rem;
    }

    .bannerTextContainer {
      flex-flow: column;
    }

    .bannerText {
      font-size: 1rem;
    }
  }
`;

const Banner2020 = () => {
  const bannerText = [
    "Mobile Responsiveness",
    "Codeless Websites",
    "Lots and Lots of animations",
  ];

  const bannerTextMap = bannerText.map((text, index) => {
    return (
      <h3
        style={{ animation: ` slideUp ${index + 0.5}s ` }}
        className="bannerText"
      >
        {text}
      </h3>
    );
  });

  return (
    <div>
      <Styled2020Banner>
        <div className="banner">
          <h1 className="bannerTitle">2021 Web Development</h1>
          <div className="bannerTextContainer">{bannerTextMap}</div>
        </div>
        <div className="arrow">
          <BiDownArrow />
        </div>
      </Styled2020Banner>
    </div>
  );
};

export default Banner2020;
