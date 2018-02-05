import {MOVE_ORDER_TO_CUSTOMER} from './farmTypes';

export const moveOrderToCustomer = (data) => {
    return {
        type: MOVE_ORDER_TO_CUSTOMER,
        payload: data
    }
}
