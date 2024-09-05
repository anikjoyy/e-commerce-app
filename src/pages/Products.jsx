import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* left side  */}
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>Rocking Chair</p>
        <p className='flex gap-2'>SideChair</p>
        <p className='flex gap-2'>Lounge Chair</p>
      </div>
      {/* right side  */}
      <div className='flex-1'>
        {/* map product  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
          {products.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
