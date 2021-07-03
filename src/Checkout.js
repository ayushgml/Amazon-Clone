import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css'

function Checkout() {
    const [{cart}] = useStateValue();

    return (
        <div className="checkout">
            <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/SBD/Electronics/WebHero-Categories-2X_3000x1200_new._CB665730751_.jpg"
            alt=""
            />
            {cart?.length === 0 ? (
                <div>
                    <h2>Your Cart is Empty</h2>
                    <h3 className="checkout__emptytext">
                        You have no items in your cart and this site is under construction!
                        We can't deliver you anything because this is a clone app XD
                        <h4 className="checkout__emptytext2">by Ayush Gupta</h4>
                    </h3>
                </div>
            ) : (
                <div>
                    <h2>Your Cart:</h2>
                </div>
            )}
        </div>
    )
}

export default Checkout
