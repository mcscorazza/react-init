import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, ChatBubbleLeftEllipsisIcon, ClipboardIcon, ArrowLeftEndOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuItem from '../partials/MenuItem';

const Sidebar = () => {
  const [sideBar, setSideBar] = useState(false)

  return (
    <div className={`bg-gray-800 transition-all text-white overflow-hidden ${sideBar ? 'w-56' : 'w-12'}`}>
      <div className='cursor-pointer border-b border-gray-500 hover:text-orange-200 w-full flex justify-end' onClick={() => setSideBar((prev) => !prev)}> 
      { sideBar ?
      <XMarkIcon className="w-8 h-8 mr-3 my-4" />
      :
      <Bars3Icon className="w-8 h-8 mr-3 my-4" />
      }
      </div>
      <div className='w-56'>
        <MenuItem toLink="/" nameLink="HOME"><HomeIcon/></MenuItem>
        <MenuItem toLink="/clientes" nameLink="Clientes"><UserIcon/></MenuItem>
        <MenuItem toLink="/pedidos" nameLink="Pedidos"><ClipboardIcon/></MenuItem>
        <MenuItem toLink="/contato" nameLink="Contatos"><ChatBubbleLeftEllipsisIcon/></MenuItem>
        <MenuItem toLink="/sair" nameLink="Sair"><ArrowLeftEndOnRectangleIcon/></MenuItem>
      </div>
    </div>
  );
};

export default Sidebar;

