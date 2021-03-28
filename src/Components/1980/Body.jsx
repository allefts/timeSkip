/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div`
  margin-top: 10rem;

  h1 {
    font-size: 2rem;
  }

  ul {
    li {
      margin: 20px;
    }
  }

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

      <ul>
        <li>
          <b>1969</b> Ted Nelson from Brown University created HyperText.
          Essentially HyperText is a link to another piece of text.
        </li>
        <li>
          <b>1990</b> To facilitate the transferring of HyperText documents
          within one another, Tim Berners-Lee an English engineer came up with
          the idea for the WWW or "World Wide Web".
          <p>
            He developed a Web Browser, followed by a Web Server. Tim then
            created a protocol for sharing files through this server, also known
            as HTTP. Last but not least, he proceeded to create HTML, a language
            that communicates with the browser and renders HyperText to the
            window.
          </p>
        </li>
        <li>
          <b>1994</b> A C programmer by the name of Rasmus Lerdorf created a
          language that allowed for the processing of HTML within the server
          before sending it to the client via the HTTP protocol. The language we
          know of today as PHP.
        </li>
        <li>
          <b>1995</b> Brendan Eich at NetScape invented Javascript. Javascript
          allowed developers to dynamically change the HTML within their
          browser. With Javascript came event handlers and HTML manipulation.
        </li>
        <li>
          <b>1996</b> Hakon Wium, suggested that CSS also known as "Cascading
          Style Sheets" be written separately from HTML in another file. This
          allowed for a lot more reusability of components. Before CSS, the
          styling on webpages were simply HTML attributes .
        </li>
      </ul>

      <a
        className="cern-link"
        href="http://info.cern.ch/hypertext/WWW/TheProject.html"
        target="_blank"
      >
        Check it out the first Website ever Created!
      </a>

      <div className="history">
        <h1>
          Web Pages that came after Tim Berners followed all of his protocols:
        </h1>
        <li>
          HTTP protocols, sending an identifier to a server and the server
          responding to the request with HTML, or Hyper-Text-Markup-Language .
        </li>
        <li>
          Short and to the point, pages had minimal attractiveness and styling.
        </li>
        <li>Pages were used only for information, almost like an ebook.</li>
      </div>

      <div className="technologies"></div>

      <button className="futureBtn">
        <Link to="/2000">Jump 10 years into the future</Link>
      </button>
    </StyledBody>
  );
};

export default Body;
