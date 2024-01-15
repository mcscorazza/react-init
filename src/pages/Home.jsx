import React from 'react';
import { HomeIcon, HomeModernIcon, RocketLaunchIcon, TvIcon, WindowIcon } from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <WindowIcon className="h-10 w-10 text-green-500" />
      <TvIcon  className="h-10 w-10 text-blue-500" />
      <HomeIcon className="h-10 w-10 text-red-500" />
      <HomeModernIcon className="h-10 w-10 text-pink-500" />
      <RocketLaunchIcon  className="h-10 w-10 text-yellow-500" />
    </div>
  );
};

export default Home;
