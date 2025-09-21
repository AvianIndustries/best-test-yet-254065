import React from 'react';
import { Dog } from '../models/Dog';

interface DogCardProps {
  dog: Dog;
}

export const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-md'>
      <img className='w-full h-48 object-cover' src={dog.image} alt={dog.breed} />
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-2'>{dog.breed}</h2>
        <p className='text-gray-700'>{dog.description}</p>
      </div>
    </div>
  );
};