/* eslint-disable no-lone-blocks */
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "../../App.css";
// import Trends from "./Trends";

// import Aos from "aos";
// import "aos/dist/aos.css";

//IMAGES
import Mobile from "../../Assets/mobile.png";
import Server from "../../Assets/server.png";
import Security from "../../Assets/security.png";
import SEO from "../../Assets/seo.png";

const Styled2020About = styled.div`
  .aboutContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin: 3rem;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 544px) {
    .aboutContainer {
      margin: 0;
    }
  }
`;

const About2020 = ({ image, text }) => {
  return (
    <Styled2020About className="styledAbout">
      <section className="aboutContainer">
        <Card
          text={
            "Nowadays, each screen has a different width and height, whether it's a mobile phone or a PC. Because of this, websites that are written to display on big monitors will not scale themselves down to fit onto a smaller screen like an Iphone. A lot of the times, developers have to write separate code to organize their webpage when it meets a smaller screen"
          }
          title={"Mobile Responsive"}
          img={Mobile}
        />
        <Card
          text={
            "So much private information is being shared within the internet and so many people are out there trying to exploit that information. Cybersecurity is crucial to keeping the private information the way it's meant to be kept, private."
          }
          title={"Security"}
          img={Server}
        />
        <Card
          text={
            "Back when Berner created the Web there was no excessive load of requests within his server. He was the only one, there was no need to optimize his server for handling tons of requests at any given time. Today that is not the case, billions of requests are made online each second. Each of these request awaiting for a response from the server, which is also handling millions of other requests and responses."
          }
          title={"Server Load"}
          img={Security}
        />
        <Card
          text={
            "SEO, or Search Engine Optimization is a very recent idea that companies can optimize their website by using certain keywords that will be prioritized by search engines like Google. This allows the company to create keys and appeal to their target audience a lot more frequently than other companies."
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
