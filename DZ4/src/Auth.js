import React, {Component} from 'react';
import {authorizeUser} from './AuthorizeApi';
import {Redirect} from 'react-router-dom';

class Auth extends Component {
  state = {
    email: '',
    password: '',
    isAuthorized: false,
    showError: false
  }

  handleSubmit = (e) => {
    const {email, password} = this.state;
    const authResult = authorizeUser(email, password);

    this.setState({isAuthorized: authResult, showError: !authResult});
  }

  handleChange = (e) => {
    const target = e.target;

    this.setState({[target.name]: target.value});
  }

  render() {
    const {isAuthorized, showError} = this.state;

    return (
      <form>
        <p>
          <input type='text'
            placeholder='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}/>
        </p>
        <p>
          <input type='password'
            placeholder='password'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}/>
        </p>  
        {showError && 
          <p className='error'>Неправильный пароль и/или адрес электронной почты</p>}
        <button type='button' onClick={this.handleSubmit}>
          Submit
        </button>
        {isAuthorized &&
          <Redirect to="/"/>}
      </form>
    );
  }
}

export default Auth;
