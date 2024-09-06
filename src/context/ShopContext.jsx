import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '€';
  const delivery_fee = 10;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId) => {
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
      toast.success('Product Added');
    } else {
      cartData[itemId] = 1;
      toast.success('Product Added');
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId];
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = { ...cartItems };
    if (quantity > 0) {
      cartData[itemId] = quantity;
    } else {
      delete cartData[itemId];
    }
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    navigate,
    addToCart,
    getCartAmount,
    getCartCount,
    updateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
