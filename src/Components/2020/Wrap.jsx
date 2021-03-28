import React from "react";
import styled from "styled-components";
import timeLine from "../../timeLine";

const StyledWrap = styled.div`
  margin-top: 10rem;
  //   height: 100vh;

  .wrappedTitle {
    font-size: 5rem;
    font-family: Fira Sans;
    text-align: center;
    color: #f96d15;
  }

  .line {
    width: 90%;
    margin: 0 auto;
    border: 2px solid white;
  }

  .wrappedCardsContainer {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  .timeLineItem {
    padding: 1 rem;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    background-color: white;

    .time {
      font-size: 3rem;
      color: #f96d15;
      font-family: Fira Sans;
      padding: 1rem;
    }
    .text {
      color: #062743;
      font-size: 1.5rem;
      font-family: Merriweather;
      padding: 1rem;
    }

    &:last-child {
      background-color: #f96d15;

      .time {
        color: white;
      }
    }
  }
`;

const Wrap = () => {
  const timeLineMap = timeLine.map((title) => {
    return (
      <div className="timeLineItem">
        <h1 className="time">{title.time}</h1>
        <h2 className="text">{title.text}</h2>
      </div>
    );
  });

  return (
    <StyledWrap>
      <h1 className="wrappedTitle">Timeline Wrapped</h1>
      <div className="line"></div>

      <div className="wrappedCardsContainer">{timeLineMap}</div>
    </StyledWrap>
  );
};

export default Wrap;
