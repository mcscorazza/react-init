import React from 'react'
import { Link } from 'react-router-dom';

export default function MenuItem(props) {
  return (
    <div className='w-full hover:bg-gray-900 text-orange-400 hover:text-orange-200 hover:border-r-4 hover:border-r-slate-100 transition-all border-b border-gray-500'>
        <Link to={props.toLink} className="flex items-center justify-start text-lg font-bold py-2">
            <div className='w-6 h-6 m-2'>{props.children}</div>
            <span className='ml-3'>{props.nameLink}</span>
        </Link>
    </div>
  )
}
