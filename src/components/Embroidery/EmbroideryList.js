import React, { Component } from 'react'
import { ShopConsumer } from '../../Context'
import EmbroideryItem from './EmbroideryItem'

export class EmbroideryList extends Component {
    render() {
        return (
            <React.Fragment>
                <ShopConsumer>
                    {value=>{
                        return value.Embroidery.map((item)=>{
                            return(
                                <EmbroideryItem key={item.id} data={item} />
                            )
                        })
                    }}

                </ShopConsumer>
            </React.Fragment>
        )
    }
}

export default EmbroideryList
