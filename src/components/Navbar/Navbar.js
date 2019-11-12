import React from 'react'
import { ShopConsumer } from '../../Context'
import { Transition } from 'react-spring/renderprops'
import * as easings from 'd3-ease'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import './navbar.css'


const NavIcons = [
    "fa-cat", "fa-dog", "fa-mitten","fa-paw"
] 

export default function Navbar() {
        return (
            
            <ShopConsumer>
                {value=>{
                    const { toggleHandler, NavOpen } = value
                    return(
                        <nav className="navbar navbar-expand-lg navbar-default">
                            <Link to="/" className="navbar-brand">
                                <li>Q CLUB</li>
                            </Link>
                            <Transition
                                items={NavOpen}
                                from={{ opacity: 0}}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0}}
                                config={{duration: 300, easing: easings.easeCircleIn}}
                            >
                                {NavOpen =>
                                NavOpen
                                    ? props => <div style={props} 
                                                    className="navbar-toggler" 
                                                    data-target="#navbarNav" 
                                                    aria-controls="navbarNav" 
                                                    aria-expanded="false" 
                                                    aria-label="Toggle navigation" 
                                                    data-toggle="collapse">
                                                        <i className="fas fa-times-circle fa-2x moreIcon"
                                                        onClick={()=>toggleHandler("NavOpen")} >
                                                        </i></div>
                                    : props => <div style={props} 
                                                    className="navbar-toggler" 
                                                    data-target="#navbarNav" 
                                                    aria-controls="navbarNav" 
                                                    aria-expanded="false" 
                                                    aria-label="Toggle navigation" 
                                                    data-toggle="collapse">
                                                        <i className="fas fa-align-right fa-2x moreIcon white"
                                                           onClick={()=>toggleHandler("NavOpen")} >
                                                        </i></div>
                                }
                            </Transition>
                            
                            <div className="collapse navbar-collapse" id="navbarNav">
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
                                            ? props => <div style={props}><i className="fas fa-times-circle fa-2x moreIcon white"
                                            onClick={()=>toggleHandler("NavOpen")}></i></div>
                                            : props => <div style={props}><i className="fas fa-align-right fa-2x moreIcon"
                                            onClick={()=>toggleHandler("NavOpen")}></i></div>
                                        }
                                    </Transition>
                            </div>
                        </nav>


                        )
                }}
            </ShopConsumer>
        )
}


