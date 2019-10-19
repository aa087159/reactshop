import React, { Component } from 'react'
import { Embroidery } from './data'
const ShopContext = React.createContext();

class ShopProvider extends Component {
    state = {
        Embroidery: []
    }

    componentDidMount(){
        let tempEmb = [...Embroidery]
        this.setState({Embroidery:tempEmb})
    }

    render() {
        return (
            <ShopContext.Provider 
                value={{
                    ...this.state
                    }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
