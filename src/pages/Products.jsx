import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { NavLink } from 'react-router-dom';

const Collection = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* left side  */}
      <div className='flex flex-col gap-2 text-md font-bold text-gray-700 lg:px-5'>
        <NavLink
          to='/RockingChair'
          className={({ isActive }) =>
            `flex gap-2 p-2 rounded ${
              isActive
                ? 'bg-black text-white'
                : 'hover:bg-black hover:text-white'
            }`
          }
        >
          Rocking Chair
        </NavLink>
        <NavLink
          to='/SideChair'
          className={({ isActive }) =>
            `flex gap-2 p-2 rounded ${
              isActive
                ? 'bg-black text-white'
                : 'hover:bg-black hover:text-white'
            }`
          }
        >
          Side Chair
        </NavLink>
        <NavLink
          to='/LoungeChair'
          className={({ isActive }) =>
            `flex gap-2 p-2 rounded ${
              isActive
                ? 'bg-black text-white'
                : 'hover:bg-black hover:text-white'
            }`
          }
        >
          Lounge Chair
        </NavLink>
      </div>
      {/* right side  */}
      <div className='flex-1'>
        {/* map product  */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
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
