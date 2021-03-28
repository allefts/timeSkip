import React from "react";
import styled from "styled-components";
import TrendCards from "./TrendCards";

const trends = [
  {
    Frontend: ["HTML", "CSS", "Javascript", "React", "Angular", "Vue"],
  },
  {
    Backend: ["NodeJS", "PHP", "Java", "GO", "Python", "C#", "Ruby on Rails"],
  },
  {
    Design: ["Figma", "Canva", "Sketch", "Adobe"],
  },
  {
    Data: ["SQL", "PostgreSQL", "Cassandra", "MongoDB"],
  },
];

const sendTrends = trends.map((trend, index) => {
  return (
    <TrendCards
      title={Object.keys(trend)[0]}
      trends={Object.entries(trend)[0][1]}
    />
  );
});

const StyledTrends = styled.div`
  // height: 100vh;
  margin-top: 8rem;
  width: 100%;

  .trendsTitle {
    font-size: 5rem;
    font-family: Fira Sans;
    // text-decoration: underline;
    text-align: center;
    color: #f96d15;
  }

  .trendsSubTitle {
    font-size: 2rem;
    font-family: Merriweather;
    text-align: center;
    color: #b6bdc5;
  }

  .line {
    width: 90%;
    margin: 0.5rem auto 1rem auto;
    border: 2px solid white;
  }

  .trendCardsContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    // align-items: center;
  }

  @media screen and (max-width: 644px) {
    .trendsTitle {
      font-size: 3rem;
    }

    .trendsSubTitle {
      font-size: 1.5rem;
    }
  }
`;

//   Object.keys(ahash)[0];

const Trends2020 = () => {
  return (
    <StyledTrends>
      <div className="trendsContainer">
        <h1 className="trendsTitle">21st Century Web Trends</h1>
        <h2 className="trendsSubTitle">
          Some of the magical technologies available out there!
        </h2>
        <div className="line"></div>
        <div className="trendCardsContainer">{sendTrends}</div>
        <div className="line"></div>
      </div>
    </StyledTrends>
  );
};

export default Trends2020;
