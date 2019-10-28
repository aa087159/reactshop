import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import MainPage from './MainPage'


class Intro extends Component {
    render() {
        return (
           
        <IntroWrapper>
            <Parallax pages={3} scrolling={true} ref={ref => (this.parallax = ref)} style={{ backgroundColor: '#fff' }}>
                <ParallaxLayer offset={0} speed={0} >
                    <MainPage />
                </ParallaxLayer>

                <ParallaxLayer offset={1.2} speed={1} >
                    <img src={"./img/Embroidery/八角小針插.webp"} alt=""/>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.8} >
                    <img src={"./img/Embroidery/窗花.webp"} alt=""/>
                </ParallaxLayer>

                <ParallaxLayer offset={2.7} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={"./img/Embroidery/剪刀吊飾.webp"} style={{ width: '60%' }} />
                </ParallaxLayer>
            </Parallax>
        </IntroWrapper>
    )
  }
}

const IntroWrapper = styled.div`
      .footer{
          background-color: #000;
          color: #fff;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          top: auto;
      }
`

export default Intro