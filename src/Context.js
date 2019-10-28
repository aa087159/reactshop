import React, { Component } from 'react'
import { Embroidery } from './data'


const ShopContext = React.createContext();

class ShopProvider extends Component {
    state = {
        Embroidery: [],
        NavOpen: false
    }

    componentDidMount(){
        let tempEmb = [...Embroidery]
        this.setState({Embroidery:tempEmb})
    }

    NavClick = () => {
        this.setState(prevState => ({
            NavOpen: !prevState.NavOpen
          }));
    }

    closeNavModal = () => {
        this.setState({NavOpen: false})
    }


    render() {
        return (
            <ShopContext.Provider 
                value={{
                    ...this.state,
                    NavClick: this.NavClick,
                    closeNavModal: this.closeNavModal
                    }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
