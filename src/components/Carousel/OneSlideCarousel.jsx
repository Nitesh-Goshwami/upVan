import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Box = styled.div`
  width: 85%;
  margin: auto;
`;

const ImgHOlder = styled.div`
  height: 300px;
`;
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Box>
        <Slider {...settings}>
          <ImgHOlder>
            <img src="gardenn.jpeg" alt="smallplant.jpg" />
          </ImgHOlder>
          <ImgHOlder>
            <img src="coolbg.jpg" alt="smallplant.jpg" />
          </ImgHOlder>
        </Slider>
      </Box>
    );
  }
}
