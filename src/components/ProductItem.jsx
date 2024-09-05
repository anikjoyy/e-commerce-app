import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, description }) => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return (
    <div className='text-gray-700 cursor-pointer' to={`/products/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out h-[300px]'
          src={image[0]}
          alt=''
        />
      </div>
      <p className='pt-3 pb-1 text-lg'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
      <p className='text-sm text-gray-400 py-2'>{description}</p>
      <button
        onClick={() => addToCart(productData._id)}
        className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductItem;
