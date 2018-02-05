import React, {Component} from 'react';
import './Farm.css';
import OrdersList from '../Order/Order';

import {connect} from 'react-redux';
import {moveOrderToCustomer} from '../../actions/farmActions';

class Farm extends Component {
    moveOrder = () => {
        const {orders} = this.props.farm;
        const orderToMove = orders[orders.length - 1];

        this.props.moveOrderToCustomer(orderToMove);
    }

    render() {
        const {orders} = this.props.farm;
       
        return (
            <div className='farm'>
                <h2>Производство на ферме</h2>
                <button
                    type='button'
                    disabled={orders && orders.length === 0}
                    onClick={this.moveOrder}>
                    Отправить урожай клиенту
                </button>
                {orders && orders.length > 0 && <OrdersList list={orders}/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({farm: state.farm});
const mapDispatchToProps = {moveOrderToCustomer}
export default connect(mapStateToProps, mapDispatchToProps)(Farm);
  