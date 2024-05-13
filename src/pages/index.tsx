import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Welcome to Zoodex!</h1>
      <p className="text-center">Explore the world of wildlife with Zoodex.</p>
      <nav className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <div className="flex items-center justify-center h-10 w-36 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <div className="flex items-center justify-center h-10 w-36 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer">
                Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link href="/submit">
              <div className="flex items-center justify-center h-10 w-36 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer">
                Submissions
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="flex items-center justify-center h-10 w-36 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer">
                About
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
