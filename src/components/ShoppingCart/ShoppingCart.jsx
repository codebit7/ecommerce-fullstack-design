import React, { useEffect, useState } from "react";
import "./ShoppingCart.css";
import img1 from "./../../assets/Image/tech/1.png";
import img2 from "./../../assets/Image/tech/2.png";
import img3 from "./../../assets/Image/tech/3.png";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteCartItem, getCartItems, updateCartItem } from "../../Store/slices/cartSlice";
import placeholder  from './../../assets/Form/file/placeholder-image.jpg'

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
  
  const cart = useSelector((state)=>state.cart ?? {items:[], total:0});
  console.log("Cart: ");
  
  const [coupon, setCoupon] = useState("");
  const [tax, setTax] =useState(0);
  const [discount, setDiscount] =useState(0);
  const dispatch = useDispatch();

  const temData ={
    size: "Medium",
    color: "Blue",
    material: "Plastic",
    seller: "Artel Market",
  }
   


 

  const updateQuantity = (productId, quantity) => {
     console.log(productId);
     
       dispatch(updateCartItem({productId, quantity}));
  };

  
  const removeItem = (id) => {
   dispatch(deleteCartItem(id))
  };

  
  const removeAll = () => {
    dispatch(clearCart())
  };

  const calculateTotal = ()=>{
     
    setDiscount(cart.total*(5/100));
    const taxRate = 10;
    const discountedTotal = cart.total -discount;
    setTax(discountedTotal *(taxRate/100))

    return discountedTotal + tax;
  }





  useEffect(() => {
    if (cart.items.length === 0) {
      dispatch(getCartItems());
    }
  }, [dispatch, cart.items.length]);

  return (
    <>
      <h3 className="container cart-count">My Cart ({cart.items.length})</h3>
      <div className="main-shopping-cart container">
        
        <div className="shopping-cart">
          {cart.items.length > 0 ? (
            cart.items.map((item) => (
              <div key={item.product._id} className="cart-item">
                
                <div className="cart-content-box">
                <div className="cart-item-image">
                  <img src={item.product.image || placeholder} alt={item.product.name} />
                </div>

                
                <div className="cart-item-details">
                  <h4>{item.product.name}</h4>
                  <p>
                    <span>Size: {item.product?.size ||temData.size}, </span>
                    <span>Color: {item.product?.color || temData.color}, </span>
                    <span>Material: {item.product?.material || temData.material}</span>
                  </p>
                  <p className="seller">Seller: {item.product?.seller || temData.seller}</p>
                  <div className="cart-buttons">
                    <button className="remove-btn" onClick={() => removeItem(item.product._id)}>
                      Remove
                    </button>
                    <button className="save-btn">Save for later</button>
                  </div>
                </div>

                </div>
               
                <div className="cart-item-price">
                  <strong>${item.product.price.toFixed(2)}</strong>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.product._id, item.quantity - 1)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)}>
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
            {cart.items.length > 0 && (
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
            <p>Subtotal: <span>${cart.total.toFixed(2)}</span></p>
            <p className="discount">Discount: <span>- ${discount.toFixed(2)}</span></p>
            <p className="tax">Tax: <span> + ${tax.toFixed(2)}</span></p>
            <p className="total">
              <strong>Total:</strong> <strong>${calculateTotal().toFixed(2)}</strong>
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
