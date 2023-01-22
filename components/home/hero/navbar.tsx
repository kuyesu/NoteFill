import React from 'react'
import Image from 'next/image'

export default function navbar() {
  return (
    <div className="py-4 px-48 mx-4 flex justify-between w-full z-50">
      <div className='flex'>
        <Image src="./vercel.svg" width={100} height={100} alt="" />
      </div>
      <div className='flex'>
        <button
          type="button"
          className="text-white bg-gray-900 hover:text-gray-600 hover:border-gray-900 hover:border hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-full text-sm px-5 py-1.5 mr-2 mb-2 "
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
