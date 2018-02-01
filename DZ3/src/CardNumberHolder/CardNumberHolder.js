import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

export default class CardNumberHolder extends Component {
    static displayName = 'Card number formating'

    constructor(props) {
        super(props);

        this.state = {
            cardNumber: ''
        };
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        const normalized = this.child.normalize(e.target.value);
        console.log('normalized', normalized);
        this.setState({cardNumber: normalized});
    }

    render() {
        return (
            <CardNumberInput
                ref={numberInput => (this.child = numberInput)}
                cardNumber={this.state.cardNumber}
                onChange={this.handleChange}/>
        );
    }
}