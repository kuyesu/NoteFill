import React, { Component } from "react";
import Slider from "react-slick";
import {
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
  User7,
} from "./img/card";

export default class Feedback extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="container pt-5">
        <Slider {...settings}>
         <div><User1 /></div>
          <div><User2 /></div>
          <div><User3 /></div>
          <div><User4 /></div>
          <div><User5 /></div>
          <div><User6 /></div>
          <div><User7 /></div>
        </Slider>
      </div>
    );
  }
}