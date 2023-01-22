import React from 'react'
import Background from '../components/shared/background'
import Hero from '../components/home/hero'

export default function page() {
  return (
    <div className="flex h-screen justify-center">
    <Hero />
    <Background />
    </div>
  )
}
