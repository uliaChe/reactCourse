import React from 'react';
import './Order.css';

const OrdersList = (list) => {
    return (
      <div className='order-list'>
        {list.list.map((order) => 
            <div className='order' key={order.id}>
                <div className='order__upper'>
                    <p className='p--order'>
                        Название: {order.name}
                    </p>
                    <p className='p--order'>
                        Цена: <span className='order-price'>{order.price}</span>
                    </p>
                </div>    
                <div className='order__lower'>
                    <p className='p--order'>
                        Создан: {order.createdAt}
                    </p>
                </div>
            </div>)}   
      </div>
    );
}

export default OrdersList;