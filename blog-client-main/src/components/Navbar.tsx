// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { isAuthenticated, logout } from '../utils/auth';

// const Navbar: React.FC = () => {
//   const router = useRouter();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     setAuthenticated(isAuthenticated());
//   }, []);

//   return (
//     <nav>
//       <Link href="/">Home</Link>
//       {authenticated ? (
//         <>
//           <Link href="/dashboard">Dashboard</Link>
//           <button onClick={() => logout(router)}>Logout</button>
//         </>
//       ) : (
//         <>
//           <Link href="/login">Login</Link>
//           <Link href="/signup">Signup</Link>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isAuthenticated, logout } from '../utils/auth';
import{Menu, Close, Logo} from '../assets';
import Image from 'next/image';


const Navbar: React.FC = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleClick = ()=>setToggle(!toggle)



  return (
    <>
    <nav className="flex justify-between items-center p-4 bg-gray-600 ">
      <Link href="/" className="text-lg text-white hover:text-gray-200">
        Home
      </Link>
      {authenticated ? (
        <div className="flex items-center">
          <Link href="/dashboard" className="text-lg text-white hover:text-gray-200 ml-4">
            Dashboard
          </Link>
          <button
            onClick={() => logout(router)}
            className=" bg-[#002D74] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <Link href="/login" className="text-lg text-white hover:text-gray-200 ml-4">
            Login
          </Link>
          <Link href="/signup" className="text-lg text-white hover:text-gray-200 ml-4">
            Signup
          </Link>
        </div>
      )}
    </nav>
      
</>
  );
};

export default Navbar;