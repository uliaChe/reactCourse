import React, {Component} from 'react';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchUserRequest} from '../../actions/users';
import {
    getUserData,
    getUserError,
    getUserIsFetched,
    getUserIsFetching
} from '../../reducers/users';
import Followers from '../Followers';


const User = styled.div`
    display: flex;
    justify-content: center;
`;

const Avatar = styled.div`
    width: 300px;
    height: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 30px;
`;

export const UserAvatar = styled.img`
    max-width: 100%;
`;

const UserInfo = styled.div`
    font: 16px/1.5em helvetica, sans-serif;
`;

export class UserPage extends Component {
    static mapStateToProps = state => ({
        users: getUserData(state),
        error: getUserError(state),
        isFetching: getUserIsFetching(state),
        isFetched: getUserIsFetched(state)
    });

    componentDidMount() {
        const {fetchUserRequest, login} = this.props;

        fetchUserRequest(login);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== this.props.login) {
            fetchUserRequest(nextProps.login);
        }
    }

    render() {
        const {isFetching, users} = this.props;

        if (isFetching) {
            return <Spinner size="64px" color="fuchsia" gap={5} />;
        }

        if (!isFetching && !users) {
            return (
                <div>Пользователь не найден</div>
            );
        }

        const {avatar_url, login, followers, public_repos} = users;

        return (
            <div>
                <User>
                    <Avatar>
                        <UserAvatar src={avatar_url}
                            alt={login}
                        />
                    </Avatar>
                    <UserInfo>
                        <h3>{login}</h3>
                        <p>Followers: {followers}</p>
                        <p>Public repos: {public_repos}</p>
                    </UserInfo> 
                </User> 
                <Followers login={login}/>
            </div>
        );
    }
}

export default connect(UserPage.mapStateToProps, {fetchUserRequest})(UserPage);