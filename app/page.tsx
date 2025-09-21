import { React, useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { DogCard } from '../components/DogCard';
import { DogAPI } from '../api/DogAPI';
import { Dog } from '../models/Dog';
import Link from 'next/link';

export default function HomePage() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    DogAPI.getDogs().then((data) => setDogs(data));
  }, []);

  return (
    <Layout title='Home | Dog Lovers'>
      <div className='p-10 bg-gray-100 text-center'>
        <h1 className='text-4xl mb-4'>Welcome to Dog Lovers!</h1>
        <p className='text-xl mb-8'>Discover different breeds of dogs and find your perfect companion.</p>
        <Link href='/about'>
          <a className='text-blue-500 hover:underline'>Learn more about us</a>
        </Link>
      </div>
      <div className='p-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </Layout>
  );
}