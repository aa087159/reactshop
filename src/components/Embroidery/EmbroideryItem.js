import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const EmbroideryItem = (props) => {
    const {title, img, price, company, info} = props.data
    return (
        <EmbroideryWrapper className="container">
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
        </EmbroideryWrapper>
    )
}

EmbroideryItem.propTypes = {
    EmbroideryItem: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const EmbroideryWrapper = styled.div`

`
export default EmbroideryItem