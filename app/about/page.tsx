import React from 'react';
import { Layout } from '../../components/Layout';

export default function AboutPage() {
  return (
    <Layout title='About Us | Dog Lovers'>
      <div className='p-10 bg-gray-100 text-center'>
        <h1 className='text-4xl mb-4'>About Dog Lovers</h1>
        <p className='text-xl mb-8'>Dog Lovers is a platform where dog enthusiasts can discover and learn about various dog breeds. Our mission is to help people find the perfect dog breed that matches their lifestyle.</p>
      </div>
    </Layout>
  );
}