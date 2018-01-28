import React, {PureComponent} from 'react';
import './CardForm.css';

export default class CardForm extends PureComponent {
    componentWillUnmount() {

    }

    handleChangeForm = (event) => {
        this.props.onChangeForm(event.target.name, event.target.value);
    }

    render() {
        return (
            <div className='card-form'>
                <h2>Номер карты</h2>
                <input type='text'
                    name='cardNumber'
                    placeholder='card number'
                    value={this.props.cardNumber}
                    onChange={this.handleChangeForm}/>
            </div>
        );
    }
}