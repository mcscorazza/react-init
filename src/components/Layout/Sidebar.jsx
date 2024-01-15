import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, ChatBubbleLeftEllipsisIcon, ClipboardIcon, ArrowLongDownIcon, ArrowLeftEndOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import MenuItem from '../partials/MenuItem';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-12 overflow-hidden">
      <Bars3Icon className="w-8 h-8 mr-2 my-4" />
      <div className="w-64">
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

