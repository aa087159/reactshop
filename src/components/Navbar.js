import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ShopConsumer } from '../Context'
import { Transition } from 'react-spring/renderprops'
import * as easings from 'd3-ease'

export default function Navbar() {
        return (
            <NavWrapper className="container">
                <ShopConsumer>
                    {value=>{
                        const { NavClick, NavOpen } = value
                        return(
                            <div>
                                <Link to="/" >
                                    <h1>Happy Doggie</h1>
                                </Link>
                                
                                <Transition
                                    items={NavOpen}
                                    from={{ opacity: 0 }}
                                    enter={{ opacity: 1 }}
                                    leave={{ opacity: 0 }}
                                    config={{duration: 300, easing: easings.easeCircleIn}}
                                >
                                    {NavOpen =>
                                    NavOpen
                                        ? props => <div style={props}><i className="fas fa-times-circle fa-3x moreIcon"
                                        onClick={()=>NavClick()}>
                                     </i></div>
                                        : props => <div style={props}><i className="fas fa-align-right fa-3x moreIcon"
                                        onClick={()=>NavClick()}>
                                     </i></div>
                                    }
                                </Transition>
                            </div>
                            )
                    }}
                </ShopConsumer>
            </NavWrapper>
        )
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
        &:hover{
            color: #FFE3B0;
            transition-timing-function: ease-out;
            transition: 1.5s;
        }
    }
`

