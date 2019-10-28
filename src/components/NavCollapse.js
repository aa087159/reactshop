import React, { Component } from 'react'
import { ShopConsumer } from '../Context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops'
 
export class NavCollapse extends Component {
    render() {
        return (
            <ShopConsumer>
                {value=>{
                    const { NavOpen, closeNavModal } = value;
                    if(!NavOpen){
                        return null;
                    }else{
                        return(
                            <Spring
                                from={{ opacity: 0, marginTop: -1000 }}
                                to={{ opacity: 1, marginTop: 0  }}
                                
                            >
                                {props=>(
                                        <NavCollapseContainer style={props} >
                                            <ul >
                                                <Link to="/" onClick={()=>closeNavModal()}>
                                                    <li>HOME</li>
                                                </Link>
                                                <Link to="/EmbroideryList" onClick={()=>closeNavModal()} >
                                                    <li>EMBROIDERY</li>
                                                </Link>
                                                <Link to="/Cloth" onClick={()=>closeNavModal()}>
                                                    <li>CLOTH</li>
                                                </Link>
                                                <Link to="/knitting" onClick={()=>closeNavModal()}>
                                                    <li>KNITTING</li>
                                                </Link>
                                                <Link to="/wooden" onClick={()=>closeNavModal()}>
                                                    <li>WOODEN</li>
                                                </Link>
                                                <Link to="/animals" onClick={()=>closeNavModal()}>
                                                    <li>ANIMALS</li>
                                                </Link>
                                                <Link to="/about" onClick={()=>closeNavModal()}>
                                                    <li>ABOUT</li>
                                                </Link>
                                            </ul>
                                        </NavCollapseContainer>
                                )}
                            </Spring>
                        )
                    }
                }}
            </ShopConsumer>
        )
    }
}

const NavCollapseContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.9);
    color: #fff;
    ul{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-57%,-50%);
        list-style-type: none;
        color: #fff;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-size: 40px;
        font-weight: 700
        transition: 0.3s;
    }
    a:hover{
        color: #E98074;
    }

`

export default NavCollapse
