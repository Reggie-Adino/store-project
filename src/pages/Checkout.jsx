import React from 'react'

const Checkout = ({user, cartItems}) => {
  return (
    <>
        <h1>Checkout</h1>
        {user && cartItems ? <div className="cart-summaty-cont">
            <h2>Total: ${cartItems.totalAmount.toFixed(2)}</h2>
          <h5>Shipping Cost: $0</h5>
          <h5>Total Items: {cartItems.numberOfItems}</h5>
          <h5>Shipping Address <span className="text-purple">{user.address.city} {user.address.street}</span></h5>
          <h5>Biller: {" "}<span>{user.name.firstname} {user.name.lastname}</span></h5>
          <button style={{alignSelf:"center", width:"100%"}}>Pay Now</button>
        </div> : <h1 className="">No Items</h1>}
    </>
  )
}

export default Checkout