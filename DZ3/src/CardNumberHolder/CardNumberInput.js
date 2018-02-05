import React, {Component} from 'react';

export default class CardNumberInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            number: this.format(this.props.cardNumber)
        }
    }
    componentWillReceiveProps(nextProps) {
        const valueFormatted = this.format(nextProps.cardNumber);

        this.setState({number: valueFormatted});
    }

    format = (data) => {
        const strFormatted = [...data].map((item, index) => index % 4 === 0 && index ? ` ${item}` : item).join('');
        // console.log('data', [...data].map((item, index) => (index % 4 === 0 && index) ? ` ${item}` : item).join(''));
        /* if (!data) {
            return '';
        }
        const strToFormat = typeof(data) === 'string' ? data : data.toString();
        const kChunkLengthMax = 4;
        const kChunkSeparator = ' ';
        let strFormatted = '';
       
        for (var i = 0; i < strToFormat.length; i += kChunkLengthMax) {
            if (strFormatted.length > 0) {
                strFormatted += kChunkSeparator;
            }
    
            strFormatted += strToFormat.substr(i, kChunkLengthMax);
        }*/
        return strFormatted;
    }

    normalize = (strToNormalize) => {
        return strToNormalize.replace(/\s/g, '');
    }

    render() {
        return (
            <div>
                <input type='text'
                    value={this.state.number}
                    onChange={this.props.onChange}/>
            </div>
        );
    }
}