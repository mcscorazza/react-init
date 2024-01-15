import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, ChatBubbleLeftEllipsisIcon, ClipboardIcon, ArrowLongDownIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <div className="mb-8">
        <div to="/" className="flex items-center text-xl font-bold mb-4">
          <HomeIcon className="w-6 h-6 mr-2" />
          Home
        </div>
        <div to="/clientes" className="flex items-center text-xl mb-4">
          <UserIcon className="w-6 h-6 mr-2" />
          Clientes
        </div>
        <div to="/pedidos" className="flex items-center text-xl mb-4">
          <ClipboardIcon className="w-6 h-6 mr-2" />
          Pedidos
        </div>
        <div to="/contato" className="flex items-center text-xl mb-4">
          <ChatBubbleLeftEllipsisIcon className="w-6 h-6 mr-2" />
          Contato
        </div>
      </div>
      <div>
        <div className="flex items-center text-xl">
          <ArrowLongDownIcon className="w-6 h-6 mr-2" />
          Sair
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

