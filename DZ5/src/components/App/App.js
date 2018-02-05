import React, {Component} from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Market/>
                <Farm/>
                <Budget/> 
            </div>
        );
    }
}