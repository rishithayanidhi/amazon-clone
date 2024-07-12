import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import {auth} from "./Firebase";
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Pb2vN2N0DNtJDdcO8wFjazqAzYzlAi73HdMRf9PwVQkKgYRNYp6nobwC0wQ2RiteK4SF0ZVFCcR3KmG6ThO985j00FEsWHNlr');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

     auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ',authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<>
            <Login />  
          </>} />
          <Route path="/checkout" element={<>
            <Header />
            <Checkout />
          </>} />
          <Route path="/payment" element={<>
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements> 
          </>} />
          <Route path="/" element={<>
            <Header />
            <Home />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

