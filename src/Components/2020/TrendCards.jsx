import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledTrendCards = styled.div`
  padding: 3rem;

  .trendTitle {
    font-family: Fira Sans;
    font-size: 3rem;
    color: white;
  }

  .trendList {
    display: flex;
    flex-flow: column;
    // justify-content: space-between;
    list-style: none;

    li {
      color: #eb6814;
      font-size: 1.5rem;
      font-family: Merriweather;
      margin: 1rem;
    }
  }
`;

const TrendCards = ({ title, trends }) => {
  //   console.log(title);
  //   console.log(trends);

  useEffect(() => {
    Aos.init();
  });

  const renderTrends = trends.map((trend) => {
    console.log(trend);
    return (
      <li>
        <h3
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          {trend}
        </h3>
      </li>
    );
  });

  return (
    <StyledTrendCards>
      <h1 className="trendTitle">{title}:</h1>
      <ul className="trendList">{renderTrends}</ul>
    </StyledTrendCards>
  );
};

export default TrendCards;
