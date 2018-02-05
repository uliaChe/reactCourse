import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmTypes';
import {MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const initialState = {
    orders: []
};

const farm = (state = initialState, action) => {
    switch (action.type) {
      case MOVE_ORDER_TO_CUSTOMER:
        const {orders} = state;
        const movedOrderId = orders[orders.length-1].id;

        return {
            ...state,
            orders: orders.filter((order) => order.id !== movedOrderId)
        }
      case MOVE_ORDER_TO_FARM:
        return {
            ...state,
            orders: state.orders ? [...state.orders, action.payload] : [action.payload]
        }
      default:
        return initialState
    }
  }
  
  export default farm;

