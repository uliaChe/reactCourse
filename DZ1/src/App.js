import React, { Component } from 'react';
import './App.css';
import NewsPost from './NewsPost';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsInput: '',
            news: []
        }
    }

    handleChange = event => {
        this.setState({newsInput: event.target.value});
    };

    handleNewPost = () => {
        const updatedNews = [...this.state.news, {text: this.state.newsInput}];

        this.setState({
            news: updatedNews,
            newsInput: ''
        });
    }

    render() {
        return (
            <div className='App'>
                <div className='todo'>
                    <input onChange={this.handleChange}
                        value={this.state.newsInput}
                        className='todo-input'/>
                </div>        
                <button type='button'
                    onClick={this.handleNewPost}>
                    Добавить
                </button>
                <div className='todo-container'>
                    {this.state.news.map(item => <NewsPost text={item.text} key={item.text}/>)}
                </div>    
            </div>
        );
    }
}