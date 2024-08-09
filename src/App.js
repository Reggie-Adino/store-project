import React, { Suspense, useRef, useState } from "react";
import Navbar from "./components/navbar";
import './App.css';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import approutes from "./routes";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: []
  };

  const categoryRef = useRef(null);
  const [cartItems, setCartItems] = useState(cartInitialState);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const location = useLocation();

  return (
    <div>
      <Navbar categoryRef={categoryRef} cartItemsCount={cartItems.numberOfItems} isLogged={isLogged} />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={<h1 className="">Loading ....</h1>}>
            <Routes location={location}>
              {approutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.requiresAuth && !isLogged ? (
                      <Navigate replace to="/login" />
                    ) : (
                      <route.component
                        categoryRef={categoryRef}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        setUser={setUser}
                        setIsLogged={setIsLogged}
                        user={user}
                      />
                    )
                  }
                />
              ))}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
