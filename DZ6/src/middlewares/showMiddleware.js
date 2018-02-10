import {showRequest, showSuccess, showFailure} from '../actions';
import {show} from '../api';

const showMiddleware = (store) => (next) => (action) => {
   if(action.type === showRequest.toString()) {
    show(action.payload)
       .then((response) => {
            store.dispatch(showSuccess(response));
       })
       .catch((error) => {
           store.dispatch(showFailure(error));
       })
   }
   return next(action);
};

export default showMiddleware;