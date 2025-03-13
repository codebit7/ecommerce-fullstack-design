import React, { useState } from "react";
import "./ShoppingCart.css";
import img1 from "./../../assets/Image/tech/1.png";
import img2 from "./../../assets/Image/tech/2.png";
import img3 from "./../../assets/Image/tech/3.png";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";


const initialCartItems = [
  {
    id: 1,
    image: img1,
    title: "T-shirts with multiple colors, for men and lady",
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    seller: "Artel Market",
    price: 78.99,
    quantity: 1,
  },
  {
    id: 2,
    image: img2,
    title: "T-shirts with multiple colors, for men and lady",
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    seller: "Best Factory LLC",
    price: 39.0,
    quantity: 2,
  },
  {
    id: 3,
    image: img3,
    title: "T-shirts with multiple colors, for men and lady",
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    seller: "Artel Market",
    price: 170.5,
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  
  const removeAll = () => {
    setCartItems([]);
  };


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 60.0; 
  const tax = 14.0; 
  const total = subtotal - discount + tax;

  return (
    <>
      <h3 className="container cart-count">My Cart ({cartItems.length})</h3>
      <div className="main-shopping-cart container">
        
        <div className="shopping-cart">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                
                <div className="cart-content-box">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>
                    <span>Size: {item.size}, </span>
                    <span>Color: {item.color}, </span>
                    <span>Material: {item.material}</span>
                  </p>
                  <p className="seller">Seller: {item.seller}</p>
                  <div className="cart-buttons">
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                    <button className="save-btn">Save for later</button>
                  </div>
                </div>

                </div>
               
                <div className="cart-item-price">
                  <strong>${item.price.toFixed(2)}</strong>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}

         
          <div className="cart-footer">
            <button className="back-btn">
              <FaArrowLeft /> Back to shop
            </button>
            {cartItems.length > 0 && (
              <button className="remove-all-btn" onClick={removeAll}>
                Remove all
              </button>
            )}
          </div>
        </div>

       
        <div className="checkout-summary">
        
          <div className="coupon-section">
            <label>Have a coupon?</label>
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Add coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button>Apply</button>
            </div>
          </div>

          
          <div className="summary-box">
            <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
            <p className="discount">Discount: <span>- ${discount.toFixed(2)}</span></p>
            <p className="tax">Tax: <span>+ ${tax.toFixed(2)}</span></p>
            <p className="total">
              <strong>Total:</strong> <strong>${total.toFixed(2)}</strong>
            </p>

            
            <button className="checkout-btn">Checkout</button>

           
            <div className="payment-icons">
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
