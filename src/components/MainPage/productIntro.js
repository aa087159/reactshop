import React from 'react'
import { Link } from 'react-router-dom'

export default function productIntro({product, index}) {
    const num = ["01","02","03","04"]
    const pics = {
                    "Embroidery":"格繡",
                    "Knitting":"幸福快樂小兔兔",
                    "Cloth":"兜兜",
                    "Wooden":"捲捲頭"
                }
    const links = ["EmbroideryList","Knitting","Cloth","Wooden"]
    return (
        <div className="productIntro">
            <p className="num">{num[index]}</p>
            <h1>{product}</h1>
            <div className="images" style={{backgroundImage:`url(/img/${Object.keys(pics)[index]}/${pics[Object.keys(pics)[index]]}.webp)`}}></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, corporis!</p>
            <Link to={`/${links[index]}`}>
                <button><i className="fas fa-cat"></i>More</button>
            </Link>
            
        </div>
    )
}
