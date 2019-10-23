import React, { Component } from "react";
import TinySlider from "tiny-slider-react";
import styled from 'styled-components';
import Intro from './Intro'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};

const imgStyles = {
    width: "95%",
    height: "100vh",
    objectFit: "cover",
    borderLeft: "2px solid #fff"
};

const imgs = [
    "./img/Embroidery/1.jpg",
    "./img/Embroidery/2.jpg",
    "./img/Embroidery/3.jpg",
    "./img/Embroidery/刺繡針收納小針包.webp",
    "./img/Embroidery/方塊布格繡.webp",
    "./img/Embroidery/格繡.webp",
];

const loadingImage =
    "data:image/gif;base64,R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const settings = {
    controls: false,
    lazyload: false,
    slideBy:3,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 0,
    responsive: {
    280: {
        items: 3,
    }
    }
};

class MainPage extends Component {
    
    onGoTo = dir => this.ts.slider.goTo(dir)

    onMouseEnter0 = () => {
        document.getElementById("BackImage").style.backgroundImage="url(./img/Embroidery/1.jpg)"
    }
    onMouseEnter1 = () => {
        document.getElementById("BackImage").style.backgroundImage="url(./img/Embroidery/2.jpg)"
    }
    onMouseEnter2 = () => {
        document.getElementById("BackImage").style.backgroundImage="url(./img/Embroidery/3.jpg)"
    }
    onMouseEnter3 = () => {
        document.getElementById("BackImage").style.backgroundImage="url(./img/Embroidery/方塊布格繡.webp)"
    }
    onMouseEnter4 = () => {
        document.getElementById("BackImage").style.backgroundImage="url(./img/Embroidery/格繡.webp)"
    }
    onMouseEnter5 = () => {
        document.getElementById("BackImage").style.backgroundImage="url(./img/Embroidery/剪刀吊飾.webp)"
    }

    render() {
        return (
            
            
            <MainWrapper>
                <div style={styles} id="BackImage">
                    
                    <TinySlider 
                        settings={settings}
                        ref={ts => this.ts = ts}
                    >
                        <div style={{ position: "relative" }} className="test">
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={imgs[0]}
                                alt=""
                                style={imgStyles}
                                onMouseEnter={()=>this.onMouseEnter0()}
                            />
                            <h2 className="SliderTitle" >Embroidery</h2>
                            <p className="SliderText">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={imgs[1]}
                                alt=""
                                style={imgStyles}
                                onMouseEnter={()=>this.onMouseEnter1()}
                            />
                            <h2 className="SliderTitle" >Cloth</h2>
                            <p className="SliderText">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={imgs[2]}
                                alt=""
                                style={imgStyles}
                                onMouseEnter={()=>this.onMouseEnter2()}
                            />
                            <h2 className="SliderTitle" >Knitting</h2>
                            <p className="SliderText">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={imgs[3]}
                                alt=""
                                style={imgStyles}
                                onMouseEnter={()=>this.onMouseEnter3()}
                            />
                            <h2 className="SliderTitle" >Wooden</h2>
                            <p className="SliderText">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={imgs[4]}
                                alt=""
                                style={imgStyles}
                                onMouseEnter={()=>this.onMouseEnter4()}
                            />
                            <h2 className="SliderTitle" >Animals</h2>
                            <p className="SliderText">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={imgs[5]}
                                alt=""
                                style={imgStyles}
                                onMouseEnter={()=>this.onMouseEnter5()}
                            />
                            <h2 className="SliderTitle" >About</h2>
                            <p className="SliderText">Lorem ipsum dolor sit amet.</p>
                        </div>
                    
                    </TinySlider>
                    <button type="button" className="btn" id="btnLeft" onClick={() => this.onGoTo('prev')}><i className="fas fa-chevron-left fa-3x"></i></button>
                    <button type="button" className="btn" id="btnRight" onClick={() =>  this.onGoTo('next')}><i className="fas fa-chevron-right fa-3x"></i></button>
                </div>
                
            </MainWrapper>
            
            
                
                
        )
    }
}

const MainWrapper = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0
    .btn{
        border:none;
        color: #fff
    }
    img{
        opacity: 0.2
    }
    .btn:focus {
        box-shadow: none!important;
    }
    #btnLeft{
        position: absolute;
        top: 45%;
        left: 2%;
    }
    #btnRight{
        position: absolute;
        top: 45%;
        right: 2%;
    }
    #BackImage{
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(./img/Embroidery/1.jpg);
        background-position: right;  
    }
    .SliderTitle{
        position: absolute;
        top:40%;
        left: 35%;
        color: #fff;
    }
    .SliderText{
        position: absolute;
        top:50%;
        color: #fff;
        left: 32%;
    }
    .Intro{
        position: absolute;
    }
`
export default MainPage