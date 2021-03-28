import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledCard = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  border-radius: 5px;
  position: relative;

  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
  }

  .cardContent {
    z-index: 2;
  }

  //   &:last-child {
  //     grid-column: 1 / -1;
  //     flex-flow: row wrap;
  //     justify-content: center;
  //     align-items: center;
  //   }

  .cardTitle {
    font-family: Fira Sans;
    font-weight: 700;
    margin: 2rem;
    font-size: 2.5rem;
    color: #f96d15;
  }

  // color: #f96d15;
  // color: white;

  .cardText {
    font-family: Open Sans;
    font-weight: 400;
    color: white;
    line-height: 1.8;
    font-size: 1rem;
    margin: 1rem;
  }
`;

const Card = ({ title, text, img }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <StyledCard bgImage={img}>
      <div
        className="cardContent"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <h1 className="cardTitle">{title}</h1>
        <h1 className="cardText">
          <b>{text}</b>
        </h1>
      </div>
    </StyledCard>
  );
};

export default Card;
