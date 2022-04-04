import React from "react";
import "./Review.css";
import { Card, Col } from "react-bootstrap";
import Rating from "../Rating/Rating";

const Review = (props) => {
  const { img, name, rating, message } = props.review;
  console.log(img);

  return (
    <Col>
      <Card className="text-center border-0 review_card ">
        <Card.Img className="mx-auto rounded-circle mt-3" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-capitalize">{name}</Card.Title>
          <p><small>Rating: {rating} <Rating></Rating> </small></p>
          <Card.Text title={message} className="text_justify">
            {message.length > 20 ? message.slice(0, 150) + "..." : message}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
