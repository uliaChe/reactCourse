import React, {Component} from 'react';
import './Switcher.css';

export default class Switcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedChild: 0
        }
    }

    handleChangeChild = (event) => {
        const childId = event.target && event.target.dataset.id;
       
        this.setState({selectedChild: childId});
    }

    render() {
        return (
            <div className='switcher'>
                <ul className='component-list'>
                    {React.Children.map(this.props.children, (child, index) => {
                        if (child.type) {
                            return (
                                <li className='component-list__name'
                                    data-id={index}
                                    onClick={this.handleChangeChild}>
                                    {child.type.displayName || child.type.name}
                                </li>
                            );    
                        }
                    })}
                </ul>
                <hr/>
                {this.props.children[this.state.selectedChild]}
            </div>    
        );    
    }
}