import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './Carousel'
import AboutUs from './AboutUs'
import './mainpage.css';

class MainPage extends Component {
    render() {
        return (
            <div className="main-wrapper">
                    <div className="JumboTron">
                        <img src="./img/jumbotron/Q.png" alt=""/>
                        <div className="bluredBackground">
                            <h2>幸福小窩</h2> 
                        </div>
                        <span className="arched">
                            <span>Q</span>
                            <span>c</span>
                            <span>l</span>
                            <span>u</span>
                            <span>b</span>
                            <span>!</span>
                        </span>
                    </div>

                    <div className="carousel-wrapper">
                        <Carousel />
                    </div>

                    <div className="contact">
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
                    </div>
            </div>
    )
  }
}

export default MainPage