import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-center bg-green-500 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:bg-green-700 transition-colors cursor-pointer rounded-full px-3 py-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:bg-green-700 transition-colors cursor-pointer rounded-full px-3 py-1">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/submit" className="hover:bg-green-700 transition-colors cursor-pointer rounded-full px-3 py-1">
              Submissions
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-green-700 transition-colors cursor-pointer rounded-full px-3 py-1">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
