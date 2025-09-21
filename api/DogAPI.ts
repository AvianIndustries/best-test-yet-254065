import { Dog } from '../models/Dog';

export const DogAPI = {
  async getDogs(): Promise<Dog[]> {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const data = await response.json();
    return data.map((dog: any) => ({
      id: dog.id,
      breed: dog.name,
      description: dog.temperament,
      image: dog.image.url,
    }));
  },
};