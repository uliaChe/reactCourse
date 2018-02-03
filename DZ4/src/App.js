import React, {Component} from 'react';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import {Switch, Redirect, Link, Route} from 'react-router-dom';
import Home from './Home';
import Private from './Private';
import Public from './Public';
import Auth from './Auth';

class App extends Component {
  state = {
    isAuthorized: false
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  };

  render() {
    const {isAuthorized} = this.state;
    
    return (
      <div className='App-content'>
        <nav>
          <ul>
            <li><Link to='/auth'>Войти</Link></li>
            <li><Link to='/private'>Секретная страница</Link></li>
            <li><Link to='/public'>Публичная страница</Link></li>
            <li><Link to='/'>Главная страница</Link></li>
          </ul>
        </nav>  
        
        <Switch>
          <Route exact path="/" component={Home} /> 
          {isAuthorized && <Route path="/private" component={Private}/>}  
          {!isAuthorized && 
            <Redirect from='/private' to='/auth'/>}    
          <Route path="/public" component={Public} /> 
          <Route path="/auth" component={Auth} />
          <Redirect from='*' to="/"/>
        </Switch>
      </div>
    )
  }
}
export default App;
