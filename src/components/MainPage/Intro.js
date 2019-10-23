import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'


class Intro extends Component {
    render() {
        return (
           
        <IntroWrapper>
            <Parallax pages={2} scrolling={true} ref={ref => (this.parallax = ref)}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <span 
                          style={{ backgroundColor: '#805E73' }}
                    >
                        Layers can contain anything
                        <img src={"./img/Embroidery/八角小針插.webp"} alt=""/>
                    </span>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={0.4} speed={1}>
                    <span 
                          style={{ backgroundColor: '#805E73' }}
                    >
                        Layers can contain anything
                        <img src={"./img/Embroidery/八角小針插.webp"} alt=""/>
                    </span>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={1.6}>
                    <span 
                          style={{ backgroundColor: '#805E73' }}
                    >
                        Layers can contain anything
                        <img src={"./img/Embroidery/八角小針插.webp"} alt=""/>
                    </span>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={1.3} speed={0.5}>
                    <span 
                          style={{ backgroundColor: '#805E73' }}
                    >
                        Layers can contain anything
                        <img src={"./img/Embroidery/八角小針插.webp"} alt=""/>
                    </span>
                    
                </ParallaxLayer>
            </Parallax>
        </IntroWrapper>
    )
  }
}

const IntroWrapper = styled.div`
      
`

export default Intro