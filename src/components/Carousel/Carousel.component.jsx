import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgMediaCard from "../../microcomponents/Card";
import { Heading } from "../PlantCollection";
import { GiPlantsAndAnimals } from "react-icons/gi";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Heading>
          Best Selling{" "}
          <span>
            {" "}
            <GiPlantsAndAnimals></GiPlantsAndAnimals>
          </span>
        </Heading>
        <br></br>
        <br></br>
        <Slider {...settings}>
          <ImgMediaCard
            uri="gardenn.jpeg"
            heading="Indoor"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          />
          <ImgMediaCard
            uri="coolbg.jpg"
            heading="Outdoor"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          />
          <ImgMediaCard
            uri="classic.jpg"
            heading="For Office"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          />
          <ImgMediaCard
            uri="smallplant.jpg"
            heading="Air Purify"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          />
          <ImgMediaCard
            uri="petfrnd.png"
            heading="For Pets"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          />
          <ImgMediaCard
            uri="forof.jpg"
            heading="Farming"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
          />
        </Slider>
      </div>
    );
  }
}
