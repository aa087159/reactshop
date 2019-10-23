import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ShopConsumer } from '../Context'

export class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="container">
                <ShopConsumer>
                    {value=>{
                        const { NavClick } = value
                        return(
                            <div>
                                <Link to="/" >
                                    <h1>Happy Doggie</h1>
                                </Link>
                                <i className="fas fa-align-right fa-3x moreIcon"
                                   onClick={()=>NavClick()}></i>
                            </div>
                            )
                    }}
                </ShopConsumer>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    a{
        position: absolute;
        z-index: 3;
        top: 5%;
        left: 3%;
        text-decoration: none;
        color: #fff;
    }
    .moreIcon{
        position: absolute;
        z-index: 3;
        top: 6%;
        right: 3%;
        color: #fff;
        cursor: pointer;
        
    }
`

export default Navbar
