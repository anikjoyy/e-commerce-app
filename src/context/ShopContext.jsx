import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '€';
  const delivery_fee = 10;
  const navigate = useNavigate();

  const value = { products, navigate };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
