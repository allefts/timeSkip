/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div`
  margin-top: 10rem;

  .bodyTitle {
    color: blue;
    text-align: center;
  }

  .bodyDescription {
    margin-left: 20px;
  }

  .cern-link {
    color: blue;
    font-size: 1.5rem;
  }

  .history {
    padding: 2rem;
  }

  .futureBtn {
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 1px solid blue;
  }
`;

const Body = () => {
  return (
    <StyledBody>
      <h1 className="bodyTitle">Web Development Timeline</h1>
      <h2 className="bodyDescription">
        The first documented web page was published in 1991 by Tim Berners-Lee.
        He was a Nuclear Researcher in an European Organisationknown as CERN.
      </h2>
      <p>
        It was a simple website with static HTML describing what the World Wide
        Web was and the protocols behind it.
      </p>

      <a
        className="cern-link"
        href="http://info.cern.ch/hypertext/WWW/TheProject.html"
        target="_blank"
      >
        Check it out for yourself !
      </a>

      <div className="history">
        <h1>Web Pages that came after him followed protocols:</h1>
        <li>
          HTTP protocols, sending an identifier to a server and the server
          responding to the request with HTML, or Hyper-Text-Markup-Language .
        </li>
        <li>
          Short and to the point, pages had minimal attractiveness and styling.
        </li>
        <li>Pages were used only for information, almost like an ebook.</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam
          delectus dolor corrupti exercitationem dignissimos quas repellat
          voluptate nemo temporibus.
        </li>
      </div>

      <button className="futureBtn">
        <Link to="/2000">Click to Futurize</Link>
      </button>
    </StyledBody>
  );
};

export default Body;
