import React, { Component } from 'react'
import { Embroidery } from './data'


const ShopContext = React.createContext();

class ShopProvider extends Component {
    state = {
        Embroidery: [],
        NavOpen: false,
        TextOpen: false
    }

    componentDidMount(){
        let tempEmb = [...Embroidery]
        this.setState({Embroidery:tempEmb})
    }

    toggleHandler = (stateName) => {
        this.setState(prevState => ({
            [stateName]:!prevState[stateName]
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
                    toggleHandler: this.toggleHandler,
                    closeNavModal: this.closeNavModal
                    }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
