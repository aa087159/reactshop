import React from 'react'
import { Link } from 'react-router-dom'

const EmbroideryItem = (props) => {
    const {title, img, price, company, info} = props.data
    return (
        <div className="container">
            <div className="card">
                <Link to="/Detail">
                    <img src={img} alt="product-pic" className="card-img-top"/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className={price}></p>
                    <p className={company}></p>
                    <p className={info}></p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default EmbroideryItem