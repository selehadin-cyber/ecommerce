import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

const Cart = () => {
  const cartRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } =
    useStateContext() as any;
  console.log(cartItems);
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          className="cart-heading"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items) </span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>You shopping bag is empty</h3>
            <Link href={"/"}>
              <button
                className="btn"
                type="button"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {true &&
            cartItems.map((item: any, idx: number) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0]).url()}
                  alt="product-image"
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={() => toggleCartItemQuantity(item._id, "dec")}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus" onClick={() => toggleCartItemQuantity(item._id, "inc")}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button className="remove-item" type="button" onClick={() => onRemove(item)}>
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>{totalPrice} TL</h3>
            </div>
            <div className="btn-container">
              <button className="btn" type="button">
                Pay with preferred payment method
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
