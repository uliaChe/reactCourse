import React, {Component} from 'react';
import Modal from './Modal';
import './ModalButton.css';

export default class ModalButton extends Component {
    static displayName = 'ModalButton'

    constructor(props) {
        super(props);

        this.state = {
            isModalShow: false
        }
    }

    hideModal = () => {
        this.setState({isModalShow: false});
    }

    showModal = () => {
        this.setState({isModalShow: true});
    }

    render() { 
        const isModalShowed = this.state.isModalShow;

        return (
            <div>
            <button type='button'
                onClick={this.showModal}>
                Show modal!
            </button>
            {isModalShowed ?
                <Modal domNode={document.querySelector('#portal')}>
                    <div className='modal'>
                        <div className='modal__fog'>
                            <div className='modal__body'>
                                <p>Модальное окно</p>
                                <button type='button'  
                                    onClick={this.hideModal}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal> : null}
            </div>    
        );
    }
}