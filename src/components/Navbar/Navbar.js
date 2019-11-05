import React from 'react'
import { ShopConsumer } from '../../Context'
import { Transition } from 'react-spring/renderprops'
import * as easings from 'd3-ease'
import NavLinks from './NavLinks'
import './navbar.css'


const NavIcons = [
    "fa-cat", "fa-dog", "fa-mitten","fa-crow","fa-paw","fa-tshirt"
] 

export default function Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar-default">
                <ShopConsumer>
                    {value=>{
                        const { NavClick, NavOpen } = value
                        return(
                            <React.Fragment>
                                <div className="NavLinks row">
                                    {NavIcons.map((icon, index)=>{
                                        return(
                                            <NavLinks key={index} index={index} NavIcon={icon} />
                                    )})}
                                </div>

                                <Transition
                                    items={NavOpen}
                                    from={{ opacity: 0}}
                                    enter={{ opacity: 1 }}
                                    leave={{ opacity: 0}}
                                    config={{duration: 300, easing: easings.easeCircleIn}}
                                >
                                    {NavOpen =>
                                    NavOpen
                                        ? props => <div style={props}><i className="fas fa-times-circle fa-2x moreIcon "
                                        onClick={()=>NavClick()}>
                                     </i></div>
                                        : props => <div style={props}><i className="fas fa-align-right fa-2x moreIcon white"
                                        onClick={()=>NavClick()}>
                                     </i></div>
                                    }
                                </Transition>
                            </React.Fragment>
                            )
                    }}
                </ShopConsumer>
            </nav>
        )
}


