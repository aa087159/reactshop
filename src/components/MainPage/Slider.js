import React, { Component } from "react";
import TinySlider from "tiny-slider-react";
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {Keyframes} from 'react-spring/renderprops'

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


const Title = ["Embroidery","Cloth","Knitting","Wooden","Animals","About"]

const Text = ["Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",]


const IconNames = ["fa-cat", "fa-dog", "fa-paw","fa-crow","fa-bone","fa-mitten"]

const settings = {
    controls: false,
    lazyload: false,
    slideBy:1,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 0,
    responsive: {
        640: {
          items: 2,
          slideBy:2
        },
        900: {
          items: 3,
          slideBy:3
        }
      }
};

const Container = Keyframes.Spring({
    rightArrow: async (next, config) => {
        while(true){
            await next({ opacity: 1, transform:'translate(0px,0)', config: config.wobbly})
            await next({ opacity: 0, transform: 'translate(5px,0px)', config: config.gentle })
        }
    },
    leftArrow: async (next, config) => {
        while(true){
            await next({ opacity: 1, transform:'translate(5px,0)', config: config.wobbly})
            await next({ opacity: 0, transform: 'translate(0px,0px)', config: config.gentle })
        }
    },
    wiggle: async (next, config) => {
        while(true){
            await next({ transform:'translate(0,5px)', config: config.gentle})
            await next({ transform: 'translate(0px,0px)', config: {tension: 0, friction: 2, precision: 0.1}})
        }
    }
  })

let onMouseEnter = []

for (let i = 0; i < 6; i++){
    onMouseEnter.push( function onMouseEnter(){
        document.getElementById("BackImage").style.backgroundImage=`url(${imgs[i]})`
    });
}

class Slider extends Component {
    state={
        textHover: false
    }
    
    textHoverHandler = () => {
        this.setState(prevState => ({
            textHover: !prevState.textHover
          }));
    }

    onGoTo = dir => this.ts.slider.goTo(dir)

    render() {
        return (
                <SliderWrapper>
                    <div style={styles} id="BackImage">
                        <TinySlider 
                            settings={settings}
                            ref={ts => this.ts = ts}
                            class="tinySlider"
                            >
                            {imgs.map((el, index) => (
                            <div className="slide"
                                    onMouseEnter={()=> this.textHoverHandler()}
                                    onMouseLeave={()=> this.textHoverHandler()}
                                    key={index}>
                                <img className={`tns-lazy-img`}
                                        src={loadingImage}
                                        data-src={imgs[index]}
                                        alt=""
                                        style={imgStyles}
                                        onMouseEnter={()=>onMouseEnter[index]()}
                                />
                                <Link activeClass="activer" className="pointer" to="toAboutUs" spy={true} smooth="easeInQuad" offset={-55} duration={1000}>
                                    <h2 className="SliderTitle" 
                                        style={{transform: this.state.textHover?'scale(1.2)':'scale(1)'}}>{Title[index]}</h2>
                                    <p className="SliderText"
                                        style={{opacity: this.state.textHover? 1:0,
                                                transform: this.state.textHover?'translate(70px,0)':'translate(0px,0)'}}>{Text[index]}</p>
                                    <i className={`fas ${IconNames[index]} fa-2x hoverIcons `}
                                        style={{opacity: this.state.textHover? 1:0, 
                                        transform: this.state.textHover?'translate(30px,0)':'translate(0px,0)'}}></i>
                                </Link>
                            </div>
                            ))}
                        </TinySlider>
                        
                        <Container state="rightArrow">{styles =><button style={styles} type="button" className="btn" id="btnRight" onClick={() =>  this.onGoTo('next')}><i className="fas fa-chevron-right fa-3x"></i></button>}</Container>
                        <Container state="leftArrow">{styles =><button style={styles} type="button" className="btn" id="btnLeft" onClick={() => this.onGoTo('prev')}><i className="fas fa-chevron-left fa-3x"></i></button>}</Container>      
                        
                        <Link activeClass="active" to="toAboutUs" spy={true} smooth="easeInQuad" offset={-55} duration={1000}>
                            <div className="icon" >
                                <i className="fas fa-mouse mouse fa-2x"></i><br/>
                                <Container state="wiggle">{styles =><i className="fas fa-chevron-down" style={styles}></i>}</Container>
                            </div>
                        </Link>
                    </div>
                </SliderWrapper>
        )
    }
}

const SliderWrapper = styled.div`
    .btn{
        border:none;
        color: #fff;
        position: absolute;
        top: 45%;
    }
    .icon{
        position: absolute;
        color: #fff;
        bottom: 2%;
        left: 50%;
        cursor: pointer;
        transform: translate(-50%, -50%);
    }
    img{
        opacity: 0.2
    }
    .btn:focus {
        box-shadow: none!important;
    }
    #btnLeft{
        left: 2%;
    }
    #btnRight{
        right: 2%;
    }
    #BackImage{
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(./img/Embroidery/1.jpg);
        background-position: right;  
    }
    .tinySlider{
        display: flex
    }
    .SliderTitle, .SliderText{
        position: absolute;
        color: #fff;
        top: 45%;
        transform: translate(-50%, -50%);
    }
    .SliderTitle{
        transition: 0.6s;
        left: 37%;
    }
    .SliderText{
        top:50%;
        transition: 0.4s;
        left: 20%;
    }
    .Intro{
        position: absolute;
    }
    .slide{
        position: relative;
    }
    .hoverIcons{
        transition: 0.6s;
        position: absolute;
        left: 20%;
        top: 45%;
        color: #fff;
    }
    .pointer{
        cursor: pointer;
    }
`
export default Slider