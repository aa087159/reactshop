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
                                                    <li>首頁</li>
                                                </Link>
                                                <Link to="/EmbroideryList" onClick={()=>closeNavModal()} >
                                                    <li>刺繡</li>
                                                </Link>
                                                <Link to="/Cloth" onClick={()=>closeNavModal()}>
                                                    <li>布作</li>
                                                </Link>
                                                <Link to="/knitting" onClick={()=>closeNavModal()}>
                                                    <li>針織</li>
                                                </Link>
                                                <Link to="/wooden" onClick={()=>closeNavModal()}>
                                                    <li>木作</li>
                                                </Link>
                                                <Link to="/animals" onClick={()=>closeNavModal()}>
                                                    <li>四隻腳</li>
                                                </Link>
                                                <Link to="/about" onClick={()=>closeNavModal()}>
                                                    <li>關於我們</li>
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
        transition: 0.3s;
        font-family: 'Noto Sans TC', sans-serif;
    }
    a:hover{
        color: #E98074;
    }

`

export default NavCollapse
