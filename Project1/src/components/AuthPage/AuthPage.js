import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getToken} from '../../reducers/auth';
import {setToken} from '../../actions/auth';

const AuthBlock = styled.div`
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc
`;

const AuthLink = styled.a`
    color: #65a3be;
`;

const AuthInput = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    padding: 3px;
    border-radius: 3px;
    font: 15px/20px helvetica, arial, sans-serif;
`;

class AuthPage extends Component {
    static mapStateToProps = state => ({
        token: getToken(state)
    })

    constructor(props) {
        super(props);

        this.state = {
            authToken: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({authToken: event.target.value})
    }

    handleKeyUp = (event) => {
        if (event && event.keyCode === 13) {
            this.props.setToken(this.state.authToken);
        }
    }

    render() {
        return (
            <AuthBlock onKeyUp={this.handleKeyUp}>
                <p>Получить токен нужно на своей странице github, перейдите по <AuthLink href='https://github.com/settings/tokens'>адресу</AuthLink> и создайте себе токен.</p>
                <p>Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.</p>
                <AuthInput
                    placeholder='Auth token'
                    onChange={this.handleInputChange}
                    value={this.state.authToken}
                />
                <p>После ввода токена нужно нажать <strong>Enter</strong></p>
            </AuthBlock>
        )
    }
}

export default connect(AuthPage.mapStateToProps, {setToken, getToken})(AuthPage);