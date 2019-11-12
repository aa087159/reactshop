import React from 'react'
import { Link as ScrollLink }  from 'react-scroll';

export default function NavLinks({NavIcon, index}) {
    const NavTexts = ["關於我們","手做","四隻腳","聯絡我們"]
    const ScrollTo = ["section-b", "section-c", "section-d", "section-e"]
    return (
        <ScrollLink activeClass="activer" className="col-2 navCard nav-item" to={ScrollTo[index]} spy={true} smooth="easeInQuad" offset={0} duration={1000}>
            <i className={`fas ${NavIcon} fa-2x navIcons`}></i>
            <p className="navTexts text-center">{NavTexts[index]}</p>
        </ScrollLink>
    )
}