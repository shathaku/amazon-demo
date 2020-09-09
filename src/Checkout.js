import React from 'react';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import './Checkout.css';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_1500x600._CB406191253_.jpg"
                />
                {basket?.length === 0 ?
                    <div>
                        <h2>Your shopping basket is empty!!</h2>
                        <p>You have no items in your basket. Go ahead and "add items to your basket".</p>
                    </div>
                    :
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket.map((item) => {
                            return <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        })}
                        
                    </div>
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
