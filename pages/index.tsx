import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from './home'
import styles from '../styles/Home.module.css'


const HomePage: NextPage = () => {
  return (
    <div className={`relative h-screen bg-gradient-to-b from-gray-900/5 to-[#010511] lg:h-[140vh]`}>
      <main className=''>
        <Home />
      </main>
    </div>
  );
}

export default HomePage;
