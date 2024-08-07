import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='bg-gray-50'>{children}</main>
    </div>
  );
};

export default Layout;