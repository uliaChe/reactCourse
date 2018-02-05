import React, {Component} from 'react';
import './Budget.css';

import {connect} from 'react-redux';

class Budget extends Component {
    render() {
        const {profit, marketExpanse, farmExpanse, deliveryExpanse} = this.props.budget;
        const total = profit - marketExpanse - farmExpanse - deliveryExpanse;

        return (
            <div className='budget'>
                <h2>Бюджет</h2>
                <p>
                    Всего получено денег:
                    <span className='t-profit'>
                        {profit}
                    </span>
                </p>
                <p>
                    Расходы продавцов:
                    <span className='t-sellers'>
                        {marketExpanse ? `-${marketExpanse}` : 0}
                    </span>
                </p>
                <p>
                    Расходы на ферме:
                    <span className='t-farm'>
                        {farmExpanse ? `-${farmExpanse}` : 0}
                    </span>
                </p>
                <p>
                    Расходы на доставку:
                    <span className='t-delivery'>
                        {deliveryExpanse ? `-${deliveryExpanse}` : 0}
                    </span>
                </p>
                <p>
                    Итого:
                    <span className='t-total'>
                        {total}
                    </span>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    budget: state.budget
  }); 

export default connect(mapStateToProps)(Budget);