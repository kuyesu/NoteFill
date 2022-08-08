import React from 'react';
import type { NextPage } from 'next'
import Home from './home'

const HomePage: NextPage = () => {
  return (
    <div
      className={` h-screen bg-gradient-to-b from-gray-900/5 to-[#e2d8c3] lg:h-[155vh] w-100`}
    >
      <main className="">
        <Home />
      </main>
    </div>
  );
}

export default HomePage;