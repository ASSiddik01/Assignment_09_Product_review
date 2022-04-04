import React from "react";
import useReviews from "../../hooks/useReviews";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  // Import hook
  const [reviews, setReviews] = useReviews();
  return (
    <Container>
      <Row>
        <div className="section_title text-center">
          <h1 className="py-5">
            Our <span className="text-warning">Client</span> Says
          </h1>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
