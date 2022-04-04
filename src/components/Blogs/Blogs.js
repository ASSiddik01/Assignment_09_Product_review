import React from "react";
import "./Blogs.css";
import { Container } from 'react-bootstrap';

const Blogs = () => {
  return (
    <Container>
      <h1 className="section_name">Question &#38; Answer</h1>
      <div className="qa">
        <h2>
          <span>Q:</span> What is Context API
        </h2>
        <p>
          <span>Ans:</span> The Context API is a React structure. This is share unique details and helps you solve prop-drilling problems at various levels of your project.A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.
        </p>
      </div>
      <div className="qa">
        <h2>
          <span>Q:</span> What is Symantic Tag
        </h2>
        <p>
          <span>Ans:</span> A semantic tag's defining feature is that it communicates its meaning to both the developer and the browser. Its content is clearly defined by these elements. The tags that provide meaning to an HTML page, rather than just presentation, are referred to as HTML semantics. It improves the understanding of HTML by better defining the various sections and layouts of web pages. For example:-
          header tag
        </p>
      </div>
    </Container>
  );
};

export default Blogs;
