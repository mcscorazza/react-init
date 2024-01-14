import { useState } from "react";

const Sidebar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={`bg-gray-800 transition-all text-white ${navbarOpen ? 'w-64' : 'w-12'}`}>
        <span className='w-12 h-12 cursor-pointer' onClick={() => setNavbarOpen((prev) => !prev)}> 
            <img className='w-8 m-2' src="./imgs/menu.svg" alt="" />
        </span>
        <ul className='w-full mt-4'>
            <li className='pl-4 flex py-4 my-1 hover:bg-slate-500 hover:pl-5 transition-all cursor-pointer'><img className='w-5' src="./imgs/home.svg" alt="" /><span className='pl-10'>HOME</span></li>
            <li className='pl-4 flex py-4 my-1 hover:bg-slate-500 hover:pl-5 transition-all cursor-pointer'><img className='w-5' src="./imgs/mail.svg" alt="" /><span className='pl-10'>EMAIL</span></li>
            <li className='pl-4 flex py-4 my-1 hover:bg-slate-500 hover:pl-5 transition-all cursor-pointer'><img className='w-5' src="./imgs/client.svg" alt="" /><span className='pl-10'>CLIENT</span></li>
            <li className='pl-4 flex py-4 my-1 hover:bg-slate-500 hover:pl-5 transition-all cursor-pointer'><img className='w-5' src="./imgs/gps.svg" alt="" /><span className='pl-10'>GPS</span></li>
            <li className='pl-4 flex py-4 my-1 hover:bg-slate-500 hover:pl-5 transition-all cursor-pointer'><img className='w-5' src="./imgs/product.svg" alt="" /><span className='pl-10'>PRODUCT</span></li>
        </ul>
    </div>
  );
};

export default Sidebar;
