import {searchRequest, searchSuccess, searchFailure} from '../actions';
import {search} from '../api';

const searchMiddleware = (store) => (next) => (action) => {
   if(action.type === searchRequest.toString()) {
       search(action.payload)
       .then((response) => {
            if (response && Array.isArray(response)) {
                store.dispatch(searchSuccess(response));
            }
       })
       .catch((error) => {
           store.dispatch(searchFailure(error));
       })
   }
   return next(action);
};

export default searchMiddleware;