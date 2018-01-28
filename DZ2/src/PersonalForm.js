import React, {PureComponent} from 'react';
import './PersonalForm.css';

export default class PersonalForm extends PureComponent {

    handleChangeForm = (event) => {
        this.props.onChangeForm(event.target.name, event.target.value);
    }

    render() {
        return (
            <div className='personal-form'>
                <h2>Персональная информация</h2>
                <input type='text'
                    value={this.props.fistName}
                    placeholder='first name'
                    name='firstName'
                    onChange={this.handleChangeForm}/>
                <input type='text'
                    value={this.props.lastName}
                    placeholder='last name'
                    name='lastName'
                    onChange={this.handleChangeForm}/>
                <input type='text'
                    name='email'
                    placeholder='email'
                    onChange={this.handleChangeForm}/>
            </div>
        );
    }
}