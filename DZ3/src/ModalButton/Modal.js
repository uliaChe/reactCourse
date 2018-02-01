import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

export default class Modal extends Component {
    render() {
        return ReactDOM.createPortal(this.props.children, this.props.domNode);
    }
}