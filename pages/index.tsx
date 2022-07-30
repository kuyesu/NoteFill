import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/common/footer'
import Home from './home'
import styles from '../styles/Home.module.css'


const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
     <Home />
      <main className={styles.main}>
        
      </main>
    <Footer />
      
    </div>
  )
}

export default HomePage;
