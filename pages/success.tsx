import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { AppContextInterface, useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalQuantities, setTotalPrice } =
    useStateContext() as AppContextInterface;

    useEffect(() => {
      localStorage.clear()
      setCartItems([])
      setTotalQuantities(0)
      runFireworks()
    }, [])
    

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className="email-msg">Check your email inbox for the reciept.</p>
        <p className="description">
          If you have any questions please e-mail to
          <a href="mailto:sele4416@gmail.com" className="email">
            sele4416@gmail.com
          </a>
        </p>
        <Link href={"/"}>
          <button className="btn" type="button" >
            Continue Shopping 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
