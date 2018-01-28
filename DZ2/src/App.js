import React, {PureComponent} from 'react';
import './App.css';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';
import Step from './Step';

export default class App extends PureComponent {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    };

    handleClickNextForm = () => {
        this.setState(prevState => ({step: prevState.step + 1}));
    }

    handleTabClick = (stepNum) => {
        this.setState({step: stepNum});
    }

    handleChangeForm = (fieldName, fieldValue) => {
        this.setState({[fieldName]: fieldValue});
    }

    isFormCommitable = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;
        
        if (step === 1) {
            return firstName !== '' &&
                lastName !== '' &&
                email !== '' &&
                email.includes('@');
        }

        if (step === 2) {
            return cardNumber.length === 16
        }

        return false;
    }

    renderForm = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;

        if (step === 1) {
            return (
                <PersonalForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    onChangeForm={this.handleChangeForm} />
            );    
        }

        if (step === 2) {
            return (
                <CardForm
                    cardNumber={cardNumber}
                    onChangeForm={this.handleChangeForm}
                    onChangeTimeOver={this.handleChangeTimeOver} />
            );
        }

        return ('Поздравляем!');
    }

    render() {
        const {step} = this.state;
        const isBtnNextDisabled = !this.isFormCommitable();

        return(
            <div className='container'>
                <div className='tab-panel'>
                    <Step
                        isSelected={step === 1}
                        isClickable={step > 1}
                        number={1}
                        onClick={this.handleTabClick}>
                        Personal information
                    </Step> 
                    <Step
                        isSelected={step === 2}
                        isClickable={step > 2}
                        number={2}
                        onClick={this.handleTabClick}>
                        Card information
                    </Step> 
                    <Step
                        isSelected={step === 3}
                        isClickable={false}
                        number={3}
                        onClick={this.handleTabClick}>
                        Finish
                    </Step>   
                </div>
                <div className='form-content'>
                    {this.renderForm()}
                </div>
                <div className='button-panel'>
                    <button className='button-next'
                        disabled={isBtnNextDisabled}
                        onClick={this.handleClickNextForm}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}