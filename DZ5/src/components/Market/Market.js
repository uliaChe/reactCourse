import React, {Component} from 'react';
import './Market.css';
import OrdersList from '../Order/Order';

import {connect} from 'react-redux';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toString()
  };
};

export class Market extends Component {
  createOrder = () => {
      const newOrderData = getNewOrder();

      this.props.createOrder(newOrderData);
  }

  moveOrder = () => {
    const {orders} = this.props.market;
    const orderToMove = orders[orders.length - 1];

    this.props.moveOrderToFarm(orderToMove);
  }

  render() {
    const {orders} = this.props.market;
    
    return (
      <div className='market'>
        <h2>Новые заказы в магазине</h2>
        <button
          type='button'
          className='new-orders__create-button'
          onClick={this.createOrder}>
            Создать заказ
        </button>
        <button
          type='button'
          disabled={orders.length === 0}
          onClick={this.moveOrder}>
            Отправить заказ на ферму
        </button>
        {orders.length > 0 && <OrdersList list={orders}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  market: state.market
}); 

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
