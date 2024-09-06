import { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState(''); // State for first name
  const [lastName, setLastName] = useState(''); // State for last name
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const { login, signup } = useContext(UserContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currentState === 'Login') {
      login({ email, password });
    } else {
      signup(firstName, lastName, email, password);
    }
  };

  return (
    <div className='flex flex-col-reverse sm:flex-row justify-evenly items-center pt-10'>
      {/* form div  */}
      <div className=' pb-10 mt-10'>
        {currentState === 'Login' ? (
          <div>
            <h1 className='font-bold'>Welcome Back</h1>
            <span className='text-sm'>
              Enter your Credentials to access your account
            </span>
          </div>
        ) : (
          <div className='pt-5'>
            <h4>Welcome To</h4>
            <h1 className='font-bold'>
              Furni<span className='text-[#4977EE]'>Flex</span>
            </h1>
            <span className='text-sm'>
              Signup for purchase your desire products
            </span>
          </div>
        )}

        <form
          onSubmit={onSubmitHandler}
          className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-4 gap-4 text-gray-700'
        >
          <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
          </div>

          {currentState === 'Sign Up' && (
            <div className='grid grid-cols-2 gap-7'>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          )}

          <input
            type='email'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className='relative w-full'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full px-3 py-2 border border-gray-800'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className='w-full flex justify-between text-sm mt-[-8px]'>
            {currentState === 'Login' && (
              <p className='cursor-pointer'>Forgot your password?</p>
            )}

            {currentState === 'Login' ? (
              <p
                onClick={() => setCurrentState('Sign Up')}
                className='cursor-pointer'
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState('Login')}
                className='cursor-pointer'
              >
                Login Here
              </p>
            )}
          </div>

          {/* Submit button */}
          <button className='bg-black text-white font-light px-8 py-2 mt-4'>
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
      {/* end form div  */}

      {/* picture div  */}
      <div className='pt-10'>
        <img src={assets.login_cover} alt='' />
      </div>
    </div>
  );
};

export default Login;
