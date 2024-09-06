import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    navigate('/products');
    toast.success('Login Successfully');
  };

  const signup = (firstName, lastName, email, password) => {
    const userData = { firstName, lastName, email, password };
    login(userData);
    navigate('/products');
    toast.success('Signup Successfully');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
    toast.success('Logout Successfully');
  };

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, login, logout, signup }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
