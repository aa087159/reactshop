import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imgs = [
    "shop",
    "left1",
    "right",
    "left"
];

export class Carousel extends Component {
    render() {
        var settings = {
          dots: true,
          arrows: false,
          autoplay: false,
          dotsClass: "cssDots",
        };
        return (
            <Slider {...settings} >
                {imgs.map((el, index) => (
                        <img key={index} src={`./img/jumbotron/${imgs[index]}.jpg`} alt=""/>
                ))}
            </Slider>
        );
      }
}



export default Carousel

