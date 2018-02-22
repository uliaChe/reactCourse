import React from 'react';
import {mount} from 'enzyme';
import Follower from '../Follower';

describe('Component Follower', () => {
    const wrapper=mount(
        <Follower
            login={'test'}
            avatar={'//avatar-test.png'}
            link={'/user/test'}
        />
    );

    it('should have avatar image', () => {
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should have login', () => {
        expect(wrapper.find({login: 'test'}).length).toBe(1);
        expect(wrapper.find('a').text()).toBe('test');
    });

    it('should have link to follower', () => {
        expect(wrapper.find('a').html()).toBe('<a href="/user/test">test</a>');
    });
});
