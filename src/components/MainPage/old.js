import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'

const imgs = [
    "shop",
    "left1",
    "right",
    "left"
];

const BottomIconTexts = ["關於我們","手作","四隻腳","聯絡我們","收藏","購物車"]

const bottomCards = [
    "fa-cat", "fa-dog", "fa-mitten","fa-crow","fa-paw","fa-tshirt"
] 


export class Carousel extends Component {
    render() {
        var settings = {
          dots: true,
          arrows: false,
          autoplay: false,
          dotsClass: "cssDots",
        };
        return (
            <Wrap>
                <NavLinksWrapper>
                    {bottomCards.map((each, index)=>{
                        return(
                            <div key={index} className="bottomCard">
                                <i className={`fas ${bottomCards[index]} fa-2x bottomIcon`}></i>
                                <p className="BottomIconTexts">{BottomIconTexts[index]}</p>
                            </div>
                    )})}
                </NavLinksWrapper>
                <JumbotronWrapper>
                    <img src="./img/jumbotron/Q.png" alt=""/>
                    <div class="bluredBackground">
                        <h2>幸福小窩</h2> 
                    </div>
                    <span class="arched">
                        <span>Q</span>
                        <span>c</span>
                        <span>l</span>
                        <span>u</span>
                        <span>b</span>
                        <span>!</span>
                    </span>
                </JumbotronWrapper>
                <CarouselWrapper>
                    <Slider {...settings}>
                        {imgs.map((el, index) => (
                            <img key={index} src={`./img/jumbotron/${imgs[index]}.jpg`} alt=""/>
                        ))}
                    </Slider>
                </CarouselWrapper>
                <ContactWrapper>
                    <div className="time">
                        <h1>營業時間</h1>
                        <p>週一至週五</p>
                        <p>10:00AM-3:00PM</p>
                    </div>
                    <div className="tel">
                        <h1>聯絡我們</h1>
                        <p>(02)2504-1461</p>
                        <p>0935213721</p>
                    </div>
                </ContactWrapper>

            </Wrap>
        );
      }
}

const Wrap = styled.div`
    height: 100vh;
`








export default Carousel

