import './App.css';
import React, { useState } from "react";

import CartProvider from "./store/CartProvider";

import Cart from "./components/Cart/Cart";
import TheNav from "./components/Header/TheNav";
import Sections from "./components/Sections/Sections";
import TheFooter from "./components/Footer/TheFooter";
import Swal from "sweetalert2";

function App() {
  //Using useState hook
  const [cartIsShown, setCartIsShown] = useState(false);
  //END

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };
  //END

  //EVent to occur on Order
  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: "Successful!",
      text: "Your order is on the way",
      icon: "success",
    });
  };

  //END  
  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler}/>
      <Sections/>
      <TheFooter />
    </CartProvider>
  );
}

export default App;
