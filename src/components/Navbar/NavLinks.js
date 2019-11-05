import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks({NavIcon, index}) {
    const NavTexts = ["關於我們","手作","四隻腳","聯絡我們","收藏","購物車"]

    return (
        <Link to="/EmbroideryList" className="col-2 navCard">
                <i className={`fas ${NavIcon} fa-2x navIcons`}></i>
                <p className="navTexts text-center">{NavTexts[index]}</p>
        </Link>
    )
}