import React, { Component } from "react";
import TinySlider from "tiny-slider-react";
import styled from 'styled-components';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};

const imgStyles = {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    borderLeft: "2px solid #000"
};

const imgs = [
    "./img/Embroidery/八角小針插.webp",
    "./img/Embroidery/穿針器吊飾.webp",
    "./img/Embroidery/窗花.webp",
    "./img/Embroidery/刺繡針收納小針包.webp",
    "./img/Embroidery/方塊布格繡.webp",
    "./img/Embroidery/格繡.webp",
];

const loadingImage =
    "data:image/gif;base64,\
    R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const settings = {
    controls: false,
    lazyload: false,
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

    render() {
        return (
            <MainWrapper>
                <div style={styles} className="test">
                    <TinySlider 
                        settings={settings}
                        ref={ts => this.ts = ts}
                    >
                    {imgs.map((el, index) => (
                        <div key={index} style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src="{el}"
                                alt=""
                                style={imgStyles}
                            />
                        </div>
                    ))}
                    </TinySlider>
                    <button type="button" className="btn" id="btnLeft" onClick={() => this.onGoTo('prev')}><i class="fas fa-chevron-left fa-3x"></i></button>
                    <button type="button" className="btn" id="btnRight" onClick={() =>  this.onGoTo('next')}><i class="fas fa-chevron-right fa-3x"></i></button>
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
        opacity: 0.1
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
    .test{
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(./img/Embroidery/八角小針插.webp);
        top:0;
        left:0;
        right: 0;
        bottom: 0;
    }
`
export default MainPage