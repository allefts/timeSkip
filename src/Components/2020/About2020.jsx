/* eslint-disable no-lone-blocks */
import React from "react";
import styled from "styled-components";
import Card from "./Card";
// import Trends from "./Trends";

// import Aos from "aos";
// import "aos/dist/aos.css";

//IMAGES
import Mobile from "../../Assets/mobile.png";
import Server from "../../Assets/server.png";
import Security from "../../Assets/security.png";
import SEO from "../../Assets/seo.png";

const Styled2020About = styled.div`
  height: 40vh;

  .aboutContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin: 3rem;
    grid-gap: 1rem;
  }
`;

const About2020 = ({ image, text }) => {
  return (
    <Styled2020About>
      <section className="aboutContainer">
        <Card
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eum incidunt id magnam hic vel suscipit corrupti dolorum obcaecati nemo."
          }
          title={"Mobile Responsive"}
          img={Mobile}
        />
        <Card
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eum incidunt id magnam hic vel suscipit corrupti dolorum obcaecati nemo."
          }
          title={"Security"}
          img={Server}
        />
        <Card
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eum incidunt id magnam hic vel suscipit corrupti dolorum obcaecati nemo."
          }
          title={"Server Load"}
          img={Security}
        />
        <Card
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eum incidunt id magnam hic vel suscipit corrupti dolorum obcaecati nemo."
          }
          title={"SEO"}
          img={SEO}
        />
      </section>
      {/* <section>
        <Trends />
      </section> */}
      {/* <Card
        text={"Just some of the <b>magic</b> being used in today's websites"}
        title={"2021 Web Trends"}
      /> */}
    </Styled2020About>
  );
};

export default About2020;
