import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
    "pk_test_51IV7AWAC7NytXs4V5brHtWZjlRVqtZSPhk2a96JqkWLTsWmZHY9d0KiuqsQrOKpmnaloJtkCo67sptB7ptZ01fZF004j0XuaYm"
)


function App() {
    const [{}, dispatch] = useStateValue();


    useEffect(() => {
            auth.onAuthStateChanged(authUser => {
                console.log('현재 사용자는' + authUser + '입니다' );

                if (authUser) {
                    //유저가 방금 로그인하거나 이미 한상태
                    dispatch({
                        type: 'SET_USER',
                        user: authUser

                    })

                } else {
                    //사용자가 로그아웃 되었을때
                    dispatch({
                        type: 'SET_USER',
                        user: null
                    })
                }
            })


        }, []


    )

    return (
        <Router>
            <div className="App">
                <Switch>

                    <Route path="/orders">
                        <Header/>
                        <Orders />
                    </Route>

                    <Route path="/login">

                        <Login />
                    </Route>

                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>

                    <Route path="/checkout">
                        <Header/>
                        <Checkout />
                    </Route>

                    <Route path="/payment">

                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>

                    </Route>

            </Switch>
            </div>
        </Router>
    );
}

export default App;
