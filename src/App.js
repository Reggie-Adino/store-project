import React, { Suspense, useRef, useState } from "react";
import Navbar from "./components/navbar";
import './App.css';
import { Routes, Route } from "react-router-dom";
import approutes from "./routes";

function App() {
  const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: []
  };

  const categoryRef = useRef(null);
  const [cartItems, setCartItems] = useState(cartInitialState);

  return (
    <div>
      <Navbar categoryRef={categoryRef} cartItemsCount={cartItems.numberOfItems}/>
      <Suspense fallback={<h1 className="">Loading ....</h1>}>
        <Routes>
          {approutes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.component categoryRef={categoryRef} cartItems={cartItems} setCartItems={setCartItems}/>}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
