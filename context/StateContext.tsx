import React, { createContext, useContext, useState, useEffect } from "react";
import toast, { Toast } from "react-hot-toast";
import { LayoutProps } from "../pages/components/Layout";

export interface AppContextInterface {
  showCart: boolean;
  cartItems: {
    _id: number;
    quantity?: number;
  }[];

  totalPrice: number | undefined;
  totalQuantities: number | undefined;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: any, quantity: any) => void;
  setShowCart: (arg0: boolean) => void;
  toggleCartItemQuantity: (id: number, value: string) => void;
  onRemove: (product: any) => void
}

interface IKeys {
  _id?: number;
  quantity?: number;
}

const Context = createContext<AppContextInterface | null>(null);

export const StateContext: React.FC<LayoutProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct: any;
  let index: any;

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  const onAdd = (product: any, quantity: any) => {
    const checkProductInCart = cartItems?.find(
      (item: any) => item._id === product._id
    );
    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems as any);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }] as any);
    }
    toast.success(`${qty} ${product.name} added to cart`);
  };

  const onRemove = (product: any) => {
    foundProduct = cartItems.find((item: IKeys) => item._id === product._id);
    const newCartItems = cartItems.filter(
      (item: IKeys) => item._id !== product._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id: number, value: string) => {
    foundProduct = cartItems.find((item: IKeys) => item._id === id);
    index = cartItems.findIndex((product: IKeys) => product._id === id);
    const newCartItems = cartItems.filter((item: IKeys) => item._id !== id);

    if ((value = "inc")) {
      setCartItems(
        cartItems.map((item, i) =>
          i === index
            ? { ...foundProduct, quantity: foundProduct.quantity + 1 }
            : item
        ) as any
      );
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if ((value = "dec")) {
      if (foundProduct.quantity > 1) {
        setCartItems(
          cartItems.map((item, i) =>
            i === index
              ? { ...foundProduct, quantity: foundProduct.quantity - 1 }
              : item
          ) as any
        );
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
