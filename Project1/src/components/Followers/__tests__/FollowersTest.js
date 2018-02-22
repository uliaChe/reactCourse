import React from 'react';
import {shallow, mount} from 'enzyme';
import {Followers} from '../Followers';
import Spinner from 'react-svg-spinner';

describe('Component Followers', () => {
    const fetchFollowersRequest = jest.fn();

    it('should have componentDidMount method', () => {
        const data = [{id: 1, login: 'test', avatar_url: '//test-avatar.png', html_url: '//test.url'}];
        const wrapper=shallow(
            <Followers
                isFetching={false}
                ids={data}
                fetchFollowersRequest={fetchFollowersRequest}
            />
        );
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('should show Spinner component when isFetching = true', () => {
        const wrapper=shallow(
            <Followers
                isFetching
                ids={null}
                fetchFollowersRequest={fetchFollowersRequest}
            />
        );

        expect(wrapper.contains(<Spinner size="64px" color="fuchsia" gap={5} />)).toBeTruthy();
    });

    it('should have Follower component rendered if ids is not empty', () => {
        const data = [
            {id: 1, login: 'test', avatar_url: '//test-avatar.png', html_url: '//test.url'},
            {id: 2, login: 'test1', avatar_url: '//test1-avatar.png', html_url: '//test1.url'}
        ];
        const wrapper=mount(
            <Followers
                isFetching={false}
                ids={data}
                fetchFollowersRequest={fetchFollowersRequest}
            />
        );

        expect(wrapper.find('Follower').length).toBe(2);
    });
});