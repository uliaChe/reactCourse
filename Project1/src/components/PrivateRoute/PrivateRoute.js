import React, {Component} from 'react';
import UserPage from '../UserPage/UserPage';

export default class PrivateRoute extends Component {
    render() {
        const {computedMatch} = this.props;
        const user = computedMatch && computedMatch.params && computedMatch.params.name;
        
        return (
            <div>
                <UserPage login={user}/>
            </div>
        );
    }
}