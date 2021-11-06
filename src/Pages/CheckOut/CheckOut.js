import './CheckOut.css'

const CheckOut = () => {
   return (
      <>
         <div className="checkout-container">
         <div className="cart-page-direction auth-page-name">
          <p>CHECK OUT</p>
          <p>Home - check out</p>
        </div>
            <div className="checkout-billing-process">
              <p>Billing address</p>
              <div className="checkout-address-input">
                 <input type="text" placeholder="Full Name*" />
                 <input type="text" placeholder="Compnay name (optional)" />
                 <input type="text" placeholder="Country*" />
                 <input type="text" placeholder="Address Line 1" />
                 <input type="text" placeholder="Address Line 2" />
                 <input type="text" placeholder="Postal Code" />
              </div>
              <div className="checkout-product-payment">
                <table>
                   <tr>
                      <th>Product Name</th>
                      <th>Product Price</th>
                   </tr>
                   <tr>
                      <td>Subtotal</td>
                      <td>$ 1300.00</td>
                   </tr>
                   <tr>
                      <td>Shipping fee</td>
                      <td>$ 7.00</td>
                   </tr>
                   <tr>
                      <td>Total</td>
                      <td>$ 20.00</td>
                   </tr>
                </table>
              </div>
            </div>
         </div>
      </>
   )
}

export default CheckOut
