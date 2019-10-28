import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import AboutUs from './AboutUs'


class MainPage extends Component {
    render() {
        return (
            <MainPageWrapper>
                <Slider />
                <AboutUs />
               
            </MainPageWrapper>
    )
  }
}

const MainPageWrapper = styled.div`
    .about{
    }
`

export default MainPage