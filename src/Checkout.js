import React from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket , user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                     alt=""/>


                     <div>
                         <h2 className="checkout_title">  {user?.email} 님의 장바구니 </h2>
                         {basket.map(item => (
                             <CheckoutProduct
                                 id={item.id}
                                 title={item.title}
                                 image={item.image}
                                 price={item.price}
                                 rating={item.rating}
                             />
                         ))}


                     </div>

            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>

        </div>
    );
}

export default Checkout;