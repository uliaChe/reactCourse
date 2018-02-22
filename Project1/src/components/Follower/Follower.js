import React from 'react';
import styled from 'styled-components';

const Person = styled.div`
    display: flex;
    flex-basis: 260px;
    margin-bottom: 30px;
    font-size: 18px;
`;

const PersonAvatar = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    margin-right: 20px;
    border: 1px solid #eee;
    border-radius: 8px;

    img {
        width: 100%;
    }
`;

const Follower = ({login, avatar, link}) =>
    <Person>
        <PersonAvatar>
            <img src={avatar} alt={login}/>
        </PersonAvatar>
        <a href={link}>{login}</a>
    </Person>

Follower.defaultProps = {
    displayName: 'Follower'
}    

export default Follower;    