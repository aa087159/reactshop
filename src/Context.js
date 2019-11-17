import React, { Component } from 'react'
import { Embroidery } from './data'

const ShopContext = React.createContext();

class ShopProvider extends Component {
    state = {
        Embroidery: [],
        NavOpen: false,
        TextOpen: false,
        name: "",
        email: "",
        message: ""
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

    FormSubmit = (e) => {
        e.preventDefault()
    }

    formOnChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }


    render() {
        return (
            <ShopContext.Provider 
                value={{
                    ...this.state,
                    toggleHandler: this.toggleHandler,
                    closeNavModal: this.closeNavModal,
                    FormSubmit: this.FormSubmit,
                    formOnChange: this.formOnChange
                    }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
