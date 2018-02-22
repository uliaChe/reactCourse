import React from 'react';
import AppRouter from '../AppRouter';
import {shallow} from 'enzyme';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute';
import AuthPage from '../../AuthPage';

describe('Component AppRouter', () => {
    const wrapper = shallow(<AppRouter/>);
   
    it('should have <Switch/> component', () => {
        expect(wrapper.find(Switch).length).toBe(1);
    });

    it('should have PrivateRoute component with props = path="/user/dex157"', () => {
        expect(wrapper.contains(<PrivateRoute path="/user/dex157" />)).toBeTruthy();
    });

    it('should have PrivateRoute component with props = path="/user/:name"', () => {
        expect(wrapper.contains(<PrivateRoute path="/user/:name" />)).toBeTruthy();
    });

    it('should have Route with path="/login"', () => {
        expect(wrapper.contains(<Route exact path="/login" component={AuthPage}/>)).toBeTruthy();
    });
});