import { NextRouter } from 'next/router';
import api from './api';
import Cookies from '../../node_modules/@types/js-cookie';
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  user: {
    id: string;
  };
  exp: number;
}

export const login = async (email: string, password: string) => {
try {
  const response = await api.post('/auth/login', { email, password });
  console.log(response)
  const { token } = response.data;
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
  Cookies.set('token', token, { expires: 1 }); // Set cookie to expire in 7 days
  console.log(response.data)
  return response.data;
} catch (error : any) {
  if (error.response) {
    throw error.response;
  }
  throw error;
}
};

export const signup = async (email: string, password: string) => {
try {
  const response = await api.post('/auth/signup', { email, password });
  console.log(response)
  const { token } = response.data;
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
  Cookies.set('token', token, { expires: 1 }); // Set cookie to expire in 7 days
  return response.data;
} catch (error : any) {
  if (error.response) {
    throw error.response;
  }
  throw error;
}
};

export const logout = (router: NextRouter) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
  Cookies.remove('token');
  router.push('/login');
};

export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('token');
  }
  // For server-side rendering, we'll consider the user not authenticated
  return false;
};

export const getUserId = (): string | null => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        return decodedToken.user.id;
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
  }
  return null;
};