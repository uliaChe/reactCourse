import React from 'react';
import {shallow} from 'enzyme';
import {UserPage} from '../UserPage';
import {UserAvatar} from '../UserPage';
import Spinner from 'react-svg-spinner';

describe('Component UserPage', () => {
    const fetchUserRequest = jest.fn();

    describe('check for lifecycle methods', () => {
        const users = {
            avatar_url: '//test-avatar.jpg',
            login: 'test-login'
        };
        const wrapper=shallow(<UserPage isFetching={false} users={users} fetchUserRequest={fetchUserRequest}/>);
        
        it('should have componentDidMount method', () => {
            expect(wrapper.instance().componentDidMount).toBeDefined();
        });
    
        it('should have componentWillReceiveProps method', () => {
            expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
        });
    });
    
    describe('check Spinner', () => {
        const wrapper=shallow(<UserPage isFetching fetchUserRequest={fetchUserRequest}/>);
 
        it('should show Spinner if isFetching = true', () => {
            expect(wrapper.contains(<Spinner size="64px" color="fuchsia" gap={5} />)).toBeTruthy();
        });
    });

    describe('check no-user message', () => {
        const users = null;
        const wrapper=shallow(<UserPage isFetching={false} users={users} fetchUserRequest={fetchUserRequest}/>);
        
        expect(wrapper.contains(<div>Пользователь не найден</div>)).toBeTruthy();
    });

    describe('check Avatar block', () => {
        const users = {
            avatar_url: '//test-avatar.jpg',
            login: 'test-login'
        };
        const wrapper = shallow(<UserPage isFetching={false} users={users} fetchUserRequest={fetchUserRequest}/>);

        expect(wrapper.contains(<UserAvatar src='//test-avatar.jpg' alt='test-login'/>))
    })
    
});