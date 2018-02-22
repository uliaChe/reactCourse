import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';
import Follower from '../Follower/Follower'; 
import {
    fetchFollowersRequest
} from '../../actions/users';
import {
    getFollowersData,
    getFollowersError,
    getFollowersIsFetching,
    getFollowersIsFetched
} from '../../reducers/followers';

const FollowersWrap = styled.div`
    max-width: 70%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export class Followers extends Component {
    static mapStateToProps = state => ({
        ids: getFollowersData(state),
        error: getFollowersError(state),
        isFetching: getFollowersIsFetching(state),
        isFetched: getFollowersIsFetched(state)
    })

    componentDidMount() {
        const {login, fetchFollowersRequest} = this.props;

        fetchFollowersRequest(login);
    }

    render() {
        const {isFetching, ids} = this.props;

        if (isFetching && !ids) {
            return <Spinner size="64px" color="fuchsia" gap={5} />;
        }
        return (
            <FollowersWrap>
                {ids.map((person) => 
                    <Follower
                        key={person.id}
                        login={person.login}
                        avatar={person.avatar_url}
                        link={person.html_url}
                    />
                )}
            </FollowersWrap>
        );
    }
}

export default connect(Followers.mapStateToProps, {fetchFollowersRequest})(Followers);