import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer'
import './SubTotal.css'

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subTotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length}) items: {getBasketTotal(basket)}
                        </p>
                        <div className="subTotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </div>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
