import React, {PureComponent} from 'react';
import './Step.css';

export default class Step extends PureComponent {
    
    handleClick = () => {
        if (this.props.isClickable) {
            this.props.onClick(this.props.number);
        }
    }

    defineCssClass = () => {
        let cssClass = 'step';

        if (this.props.isClickable) {
            cssClass = 'step step-clickable';
        }
        if (this.props.isSelected) {
            cssClass = 'step step-selected';
        }
        return cssClass;
    }

    render() {
        const stepCssClass = this.defineCssClass();

        return (
            <div className={stepCssClass} onClick={this.handleClick}>
                <p className='step__number'>{this.props.number}</p>
                <p className='step__title'>{this.props.children}</p>
            </div>
        );
    }
}