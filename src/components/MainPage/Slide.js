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
    width: "100%",
    height: "77vh",
    objectFit: "cover",
    opacity: 0,
};

const imgs = [
    "./img/jumbotron/middle.jpg",
    "./img/jumbotron/left1.jpg",
    "./img/jumbotron/right.jpg",
    "./img/jumbotron/left.jpg",
    "./img/Embroidery/5.webp",
    "./img/Embroidery/6.webp",
];

const loadingImage =
    "data:image/gif;base64,R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";


const Title = ["關於我們","手作","四隻腳","聯絡我們","收藏","購物車"]

const Text = ["Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",]

const TextSwtich = Array(Text.length).fill({status:false});

const IconNames = ["fa-cat", "fa-dog", "fa-mitten","fa-crow","fa-paw","fa-tshirt"]

const settings = {
    controls: false,
    lazyload: true,
    slideBy:1,
    nav: false,
    mouseDrag: false,
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
        textHover: TextSwtich
    }

    textMouseEnterHandler = (index) => {
        let _textHover = JSON.parse(JSON.stringify(this.state.textHover));
        _textHover[index].status = true;
        this.setState({
             textHover:_textHover
        })
     }
     textMouseLeaveHandler = (index) =>{
         setTimeout(()=>{
             let _textHover = JSON.parse(JSON.stringify(this.state.textHover));
             _textHover[index].status = false;
             this.setState({
                  textHover:_textHover
             })
         })
    }

    onGoTo = dir => this.ts.slider.goTo(dir)

    render() {
        return (
                <SliderWrapper>
                    <div style={styles} id="BackImage">
                        <TinySlider 
                            settings={settings}
                            ref={ts => this.ts = ts}
                            >
                            {imgs.map((el, index) => (
                            <div className="slide"
                                 onMouseEnter={()=> this.textMouseEnterHandler(index)}
                                 onMouseLeave={()=> this.textMouseLeaveHandler(index)}
                                 key={index}>
                                <img className={`tns-lazy-img`}
                                        data-src={imgs[index]}
                                        alt=""
                                        style={imgStyles}
                                        onMouseEnter={()=>onMouseEnter[index]()}
                                />
                                <Link  activeClass="activer" className="pointer" to="toAboutUs" spy={true} smooth="easeInQuad" offset={60} duration={1000}>
                                    <h2 className="SliderTitle"
                                        style={{transform: this.state.textHover[index].status?'scale(1.2)':'scale(1)'}}>{Title[index]}</h2>
                                    <i className={`fas ${IconNames[index]} fa-3x hoverIcons `}
                                       style={{opacity: this.state.textHover[index].status? 1:0, 
                                               transform: this.state.textHover[index].status?'translate(-30%)':'translate(0)'}}></i>
                                </Link>
                            </div>
                            ))}
                        </TinySlider>
                        
                        <Container state="rightArrow">{styles =><button style={styles} type="button" className="btn" id="btnRight" onClick={() =>  this.onGoTo('next')}><i className="fas fa-chevron-right fa-3x"></i></button>}</Container>
                        <Container state="leftArrow">{styles =><button style={styles} type="button" className="btn" id="btnLeft" onClick={() => this.onGoTo('prev')}><i className="fas fa-chevron-left fa-3x"></i></button>}</Container>      
                        
                        <Link activeClass="active" to="toAboutUs" spy={true} smooth="easeInQuad" offset={60} duration={1000}>
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
        top: 50%;
        &:focus {
            box-shadow: none!important;
        }
    }
    #btnLeft{
        left: 2%;
    }
    #btnRight{
        right: 2%;
    }
    .icon{
        position: absolute;
        color: #fff;
        bottom: 5%;
        left: 50%;
        cursor: pointer;
        transform: translate(-50%, -50%);
    }
    #BackImage{
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("./img/jumbotron/left1.jpg");
        background-position: right;  
    }
    .slide{
        position: relative;
    }
    .slide:nth-of-type(7), .slide:nth-of-type(8),.slide:nth-of-type(10), .slide:nth-of-type(11){
        border-left: 1.5px solid rgba(255,255,255,0.4);
    }
    .SliderTitle{
        position: absolute;
        transition: 0.6s;
        color: #fff;
        top: 45%;
        left: 0;
        width: 100%;
        font-family: 'Noto Sans TC', sans-serif;
        text-align: center;
        font-weight: 500;
        font-size: 40px;
    }
    .hoverIcons{
        position: absolute;
        transition: 0.6s;
        color: #fff;
        top: 35%;
        left: 47%;
    }
    .pointer{
        cursor: pointer;
    }
    @media screen and (max-width: 1400px){
        .hoverIcons{
        }
    }
    @media screen and (max-width: 640px){
        .hoverIcons{
        }
    }
`
export default Slider