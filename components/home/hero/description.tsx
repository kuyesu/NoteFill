import Github from '@/components/shared/icons/github';
import Twitter from '@/components/shared/icons/twitter';
import Link from 'next/link';
import React from 'react'

export default function description() {
  return (
    <div className="mx-auto mt-20 mb-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
      >
        <Twitter className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">
          Introducing Note-fill
        </p>
      </a>

      <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Revolutionary
        <br />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          AI-Note Trend
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl">
        {/* Notefill is an AI-powered note taking tool for modern teams,
        streamlining collaboration and boosting productivity. Effortlessly
        create, share, and track notes in real-time, say goodbye to cluttered
        and disorganized notes. */}
        {/* Notefill - AI-powered note taking for modern teams, streamlining
        collaboration and boosting productivity. Effortlessly create, share, and
        track notes in real-time. */}
        Notefill, AI-powered note tool for teams, streamlines collaboration and
        boosts productivity. Effortlessly create, share, and track notes in
        real-time.
      </h2>

      <div className="mx-auto mt-10 flex max-w-fit space-x-4">
        <Link
          href=""
          className="rounded-full border border-black bg-black py-2 px-5 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
        >
          Start For Free
        </Link>
        <a
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 px-5 shadow-lg transition-all hover:border-gray-800"
          href="https://github.com/kuyesu/NoteFill"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-5 w-5 text-black" />
          <p className="text-sm">Star on GitHub</p>
        </a>
      </div>
    </div>
  );
}
