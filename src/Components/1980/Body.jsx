import React from "react";
import styled from "styled-components";

const StyledBody = styled.div `
margin-top: 10rem;

  .bodyTitle{
    color: blue;
    text-align: center;
  }

  .bodyDescription{
    margin-left: 20px;
  }

`;

const Body = () => {
  return (<StyledBody>
    <h1 className="bodyTitle">Web Development Timeline</h1>
    <h2 className="bodyDescription">The first documented web page was published in 1991 by Tim Berners-Lee. He was a Nuclear Researcher in an European Organisationknown as CERN.</h2>
    <p>It was a simple website with static HTML describing what the World Wide Web was and the protocols behind it.</p>

  // <p>By 1981 Microsoft had already created the DOS or "Disk Operating System". IBM had just confirmed that they were on track to release a PC in the
  // near future and they would use Microsoft's operating system</p>

  </StyledBody>)
}

export default Body;
