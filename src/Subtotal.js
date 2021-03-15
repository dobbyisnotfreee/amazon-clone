import React from 'react';
import './Subtotal.css'
import CurrecnyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import {useHistory} from "react-router-dom";
import {getBasketTotal} from "./reducer";

function Subtotal() {
    const history = useHistory();

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrecnyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총액 ( {basket?.length} items): <strong> {value} </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>체크박스입니다.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />


            <button onClick={e => history.push('/payment')}> 결제하기 </button>

        </div>
    );
}

export default Subtotal;