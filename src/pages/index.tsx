import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

const animals = [
  { id: 1, name: 'Tiger', image: '/images/tiger.jpg', description: 'A large carnivorous feline that lives in Asia.' },
  { id: 2, name: 'Eagle', image: '/images/eagle.jpg', description: 'A bird of prey with very keen eyesight, found worldwide.' },
  { id: 3, name: 'Lion', image: '/images/lion.jpg', description: 'Known as the king of the jungle, lions are majestic animals that live in Africa.' },
  { id: 4, name: 'Giraffe', image: '/images/giraffe.jpg', description: 'The tallest living terrestrial animals and the largest ruminants.' },
  { id: 5, name: 'Panda', image: '/images/panda.jpg', description: 'Known for their distinctive black and white coloring and their diet primarily consisting of bamboo.' },
  { id: 6, name: 'Elephant', image: '/images/elephant.jpg', description: 'The largest existing land animals, famous for their large ears and long trunks.' }
];

export default function Home() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">Welcome to Zoodex!</h1>
        <p className="text-center">Explore the world of wildlife with Zoodex.</p>
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="flex items-center justify-center h-10 w-36 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link href="/loginandregister" className="flex items-center justify-center h-10 w-36 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                Login/Register
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8 grid grid-cols-3 gap-4 justify-items-center">
          {animals.map((animal) => (
            <div key={animal.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto">
                <Image src={animal.image} alt={animal.name} layout="fill" objectFit="cover" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{animal.name}</div>
                <p className="text-gray-700 text-base">
                  {animal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
