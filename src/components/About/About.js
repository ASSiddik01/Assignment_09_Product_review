import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h1>About Site</h1>
      <ul className="mt-5 text-start">
        <li>This is a review website</li>
        <li>It is build by React</li>
        <li>
          Here I use Boostrap, FontAwesome, Recharts, React Router, React-icon
          Framework
        </li>
        <li>
          5 pages in this site. Homepage show the main content. Review page show
          the all reviews, Dashboard page show the Chart, Blog page show the two
          question and answer and About page tell about the site
        </li>
        <li>Site is responsive for large, medium, mobile device</li>
      </ul>
    </Container>
  );
};

export default About;
