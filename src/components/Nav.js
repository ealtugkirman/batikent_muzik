// import React from 'react';
// // import nav data
// import { navData } from '../data';

// const Nav = () => {
//   // destructure nav data
//   const { items } = navData;
//   return (
//     <nav>
//       <ul className='flex gap-x-[58px]'>
//         {items.map((item, index) => {
//           return (
//             <li key={index}>
//               <a
//                 className='link hover:border-b-2 px-4  hover:border-dark transition duration-300'
//                 href={item.href}
//               >
//                 {item.name}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Nav;




import React from 'react';
// import nav data
import { Link } from 'react-scroll'
const Nav = () => {
  // destructure nav data
  return (
    <nav>
      <ul className='flex  link hover:border- hover:border-dark transition duration-300 gap-x-[58px]'>
            <li>
            <Link to='/' className='link hover:border- ho px-4 ver:border-dark transition duration-300'>
                Ana Sayfa
                </Link>
                <Link to='about'  className='link hover:border-b-2 px-4  hover:border-dark transition duration-300'>
                Hakkımda
                </Link>
                <Link to='gallery' className='link hover:border-b-2 px-4  hover:border-dark transition duration-300'>
                Öğrencilerim
                </Link>
              <Link to='icerik'   className='link hover:border-b-2 px-4  hover:border-dark transition duration-300'>
                İçerik
                </Link>
                <Link to='contact'  className='link hover:border-b-2 px-4  hover:border-dark transition duration-300'>
                İletişim
                </Link>
            </li>
      </ul>
    </nav>
  );
};

export default Nav;
