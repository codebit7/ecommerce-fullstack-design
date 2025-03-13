import React from "react";
import "./requestQuote.css"; 

const RequestQuote = () => {
  return (
    <div className="request-quote-container container">
     
      <div className="quote-text">
        <h2>An easy way to send requests to all suppliers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      
      <div className="quote-form">
        <h3>Send quote to suppliers</h3>
        <form>
          <input type="text" placeholder="What item you need?" />
          <textarea placeholder="Type more details"></textarea>
          <div className="input-group">
            <input type="number" placeholder="Quantity" />
            <select>
              <option>Pcs</option>
              <option>Kg</option>
              <option>Liters</option>
            </select>
          </div>
          <button type="submit">Send inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
