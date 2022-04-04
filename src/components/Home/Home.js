import React from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import "./Home.css";
import banner from "../../image/banner.png";
import logo from "../../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const slicedReview = reviews.slice(0, 3);

  return (
    <div>
      <Container>
        {/* Banner Section */}
        <Row className="my-3  align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="banner_info d-flex align-items-center">
              <img className="" width={50} src={logo} alt="" />
              <h1 className="text-uppercase fw-bold text-info mb-0 mt-3 ms-3">
                Hackintosh
              </h1>
            </div>
            <h1 className=" fw-bold ">MacBook Killer !</h1>
            <h1 className=" fw-bold text-warning">Lenovo ThinkPad X240</h1>
            <p>
              I think <span>Lenovo ThinkPad X240</span> MacBook killer Laptop.
              Laptop Configuration is; Processor - i5 4300U, Ram - 8GB DDR3L,
              SSD - 120GB.{" "}
              <b>
                But funny thing is the laptop is mine and I install hackintosh
                in this laptop and also put the Apple logo from my old Macbook.
              </b>{" "}
            </p>
            <Button variant="info">
              Read More <FontAwesomeIcon icon={faArrowRightLong} />{" "}
            </Button>
          </div>
          <div className="col-lg-6 col-md-6">
            <Image
              className="img-fluid border rounded-circle pt-5"
              src={banner}
              alt=""
            />
          </div>
        </Row>
        {/* Review Section */}
        <Row className="my-5">
          <div className="section_title text-center">
            <h1 className="py-5">Customer Reviews ({slicedReview.length}) </h1>
          </div>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {slicedReview.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
