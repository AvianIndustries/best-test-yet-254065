import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className='min-h-screen bg-white'>
      <header className='bg-blue-500 p-6 mb-12'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link href='/'>
            <a className='text-2xl text-white font-bold'>Dog Lovers</a>
          </Link>
        </div>
      </header>
      <main className='container mx-auto'>
        {children}
      </main>
    </div>
  );
};