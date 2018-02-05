import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const initialState = {
    orders: []
}

const market = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER:
        return {
            ...state,
            orders: [...state.orders, action.payload]
        }
      case MOVE_ORDER_TO_FARM:
        const {orders} = state;
        const movedOrderId = orders[orders.length-1].id;
       
        return {
            ...state,
            orders: orders.filter((order) => order.id !== movedOrderId)
        }
      default:
        return state
    }
  }
  
  export default market;