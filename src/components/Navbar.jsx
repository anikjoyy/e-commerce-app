import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { getCartCount } = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src='' className='w-36' alt='FurniFlex' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/products' className='flex flex-col items-center gap-1'>
          <p>Products</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/categories' className='flex flex-col items-center gap-1'>
          <p>Categories</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/custom' className='flex flex-col items-center gap-1'>
          <p>Custom</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/blog' className='flex flex-col items-center gap-1'>
          <p>Blog</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        <div className='group relative'>
          <Link to='/login'>
            <img
              src={assets.profile_icon}
              className='w-5 cursor-pointer'
              alt='profile'
            />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='' />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to='/'
            className='py-2 pl-6 border'
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/products'
            className='py-2 pl-6 border'
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/categories'
            className='py-2 pl-6 border'
          >
            Categories
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/contact'
            className='py-2 pl-6 border'
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/blog'
            className='py-2 pl-6 border'
          >
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
