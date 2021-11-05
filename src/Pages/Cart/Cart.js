import React, { useState } from 'react'
import "./Cart.css";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="cart-container">
        <div className="cart-page-direction auth-page-name">
          <p>Cart</p>
          <p>Home - Cart</p>
        </div>
        <div className="cart-product-detail">
          <div className="cart-product-list">
            <span className="product-name">Product</span>
            <span>Juice Isabella common grape vine table</span>
          </div>
          <div className="cart-price-list">
            <span>Price</span>
            <span>$1300.00</span>
          </div>
          <div className="cart-quantity-list">
            <span>Quantity</span>
            <span>
              <button onClick={()=>{setQuantity(quantity-1)}}>-</button>
              <span>{quantity}</span>
              <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
            </span>
          </div>
          <div className="cart-price-list">
            <span>Subtotal</span>
            <span>$1300.00</span>
          </div>
        </div>
        <div className="cart-2-container">
          <div className="cart-coupon">
            <input type="text" placeholder="Type coupon code" />
            <button>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <div>
              <span>Cart Total</span>
            </div>
            <div>
              <span>Subtotal</span>
              <span>$1640.00</span>
            </div>
            <div>
              <span>Shipping Flat rate: Shipping to MA.</span>
              <span>$50.00</span>
            </div>
            <div>
              <span>Change Shipping Address:</span>
              <span>
                <select>
                  <option></option>
                </select>
              </span>
            </div>
            <div>
              <span>Total :</span>
              <span>$ 1690.00</span>
            </div>
            <div>
              <span>
                <button></button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
