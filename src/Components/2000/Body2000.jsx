import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "xp.css/dist/XP.css";

import Clipart from "../../Assets/2000clipart.png";
import Courage from "../../Assets/courage.png";

import tieDye from "../../Assets/tiedye.png";
// background-image: url(${tieDye});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center center;

const StyledBody2000 = styled.div`
  background-color: lightblue;

  width: 70%;
  margin: 0 auto;

  .line {
    width: 100%;
    border: 2px solid blue;
  }

  .bodyContainer {
    width: 60%;
    margin: 0 auto;
    text-align: center;

    .bodyTitle {
      font-size: 3rem;
      margin: 2rem;
      font-family: monospace;
    }

    .clipart {
      position: absolute;
      top: 5%;
      left: 80%;
      height: 200px;
      border: 1px dotted black;
    }

    .courage {
      position: absolute;
      top: 75%;
      left: 10%;
      height: 200px;
      border: 1px dotted black;
    }
  }

  .tlItem {
    font-family: monospace;
    font-size: 1.2rem;
    margin: 1rem;
  }

  .futureContainer {
    display: grid;
    place-items: center;

    .btn {
      display: flex;
      justify-content: center;
    }
  }

  .futureBtn {
    padding: 1rem;
  }
`;

const Body2000 = () => {
  return (
    <StyledBody2000>
      <div className="line"></div>
      <div className="bodyContainer">
        <h2 class="bodyTitle">2000's Web Dev</h2>

        <ul className="2000tl">
          <li className="tlItem">
            <b>2002</b> Before XMLHttpRequest, each user interaction would
            require the entire website to be reloaded. By combinining javascript
            with XML, developers were able to create asychrony through their
            webpages. This allowed them to fetch information from other sources
            and render it without reloading the components that were not
            changed.
          </li>
          <li className="tlItem">
            <b>2006</b> John Resig wrote a library, jQuery. Manipulating the DOM
            and handling events allowed for different browsers to be more
            compatible with each other.
          </li>
          <li className="tlItem">
            <b>2009</b> {"  "}Ryan Dahl created NodeJS. Essentially, NodeJS
            takes the javascript compiler from the browser and allows it to be
            used within a server/environment. Originally, Javascript could only
            be read within a browser but thanks to Node Javascript can now run
            on the server. Developers could now use Javascript to serve as a
            backend language to receive and handle Http requests.
          </li>
          <li className="tlItem"></li>
        </ul>

        <img className="clipart" src={Clipart} alt="Clipart" />
        <img className="courage" src={Courage} alt="Clipart" />
      </div>

      <div className="futureContainer">
        <div style={{ width: 300 }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">Futurize</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body btn">
            <button>
              <Link to="/2020" className="futureBtn">
                Click to Futurize
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </StyledBody2000>
  );
};

export default Body2000;
