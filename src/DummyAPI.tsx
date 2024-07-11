import uuid from 'react-native-uuid';

export interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
}

const postExamples = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+1',
    title: 'Sunset Bliss',
    description: 'A mesmerizing sunset over the mountains.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Post+2',
    title: 'City Lights',
    description: 'The city comes alive with lights at night.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300/5733FF/FFFFFF?text=Post+3',
    title: 'Beach Day',
    description: 'A relaxing day at the beach with clear blue waters.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Post+4',
    title: 'Mountain Hike',
    description: 'An adventurous hike up the snowy mountains.',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300/33A1FF/FFFFFF?text=Post+5',
    title: 'Forest Trail',
    description: 'A peaceful walk through the dense forest.',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300/FF9A33/FFFFFF?text=Post+6',
    title: 'Desert Dunes',
    description: 'Exploring the vast and beautiful desert dunes.',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300/33FF9A/FFFFFF?text=Post+7',
    title: 'Snowy Cabin',
    description: 'A cozy cabin nestled in a snowy landscape.',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+8',
    title: 'Lush Garden',
    description: 'A lush garden full of vibrant flowers.',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/300/5733FF/FFFFFF?text=Post+9',
    title: 'Urban Jungle',
    description: 'The hustle and bustle of the urban jungle.',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/300/33A1FF/FFFFFF?text=Post+10',
    title: 'Tropical Paradise',
    description: 'A tropical paradise with palm trees and a sandy beach.',
  },
  {
    id: 11,
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+11',
    title: 'Calm Lake',
    description: 'A calm lake reflecting the clear sky.',
  },
  {
    id: 12,
    image: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Post+12',
    title: 'Cityscape',
    description: 'A beautiful cityscape with skyscrapers touching the sky.',
  },
  {
    id: 13,
    image: 'https://via.placeholder.com/300/5733FF/FFFFFF?text=Post+13',
    title: 'Golden Hour',
    description: 'The golden hour casting a warm glow over the fields.',
  },
  {
    id: 14,
    image: 'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Post+14',
    title: 'Starry Night',
    description: 'A starry night with a clear view of the Milky Way.',
  },
  {
    id: 15,
    image: 'https://via.placeholder.com/300/33A1FF/FFFFFF?text=Post+15',
    title: 'River Flow',
    description: 'A river flowing through the forest with a gentle current.',
  },
  {
    id: 16,
    image: 'https://via.placeholder.com/300/FF9A33/FFFFFF?text=Post+16',
    title: 'Rolling Hills',
    description: 'Rolling hills under a blue sky with scattered clouds.',
  },
  {
    id: 17,
    image: 'https://via.placeholder.com/300/33FF9A/FFFFFF?text=Post+17',
    title: 'Winter Wonderland',
    description: 'A winter wonderland with trees covered in snow.',
  },
  {
    id: 18,
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+18',
    title: 'Autumn Leaves',
    description: 'Autumn leaves creating a colorful carpet on the ground.',
  },
  {
    id: 19,
    image: 'https://via.placeholder.com/300/5733FF/FFFFFF?text=Post+19',
    title: 'Coastal View',
    description:
      'A breathtaking coastal view with waves crashing on the shore.',
  },
  {
    id: 20,
    image: 'https://via.placeholder.com/300/33A1FF/FFFFFF?text=Post+20',
    title: 'Flower Field',
    description: 'A field full of blooming flowers in vibrant colors.',
  },
  {
    id: 21,
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+21',
    title: 'Serene Lake',
    description: 'A serene lake surrounded by trees in autumn colors.',
  },
  {
    id: 22,
    image: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Post+22',
    title: 'Mountain Range',
    description: 'A mountain range with peaks covered in snow.',
  },
  {
    id: 23,
    image: 'https://via.placeholder.com/300/5733FF/FFFFFF?text=Post+23',
    title: 'City Park',
    description: 'A bustling city park with people enjoying a sunny day.',
  },
  {
    id: 24,
    image: 'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Post+24',
    title: 'Sunrise Glory',
    description: 'A glorious sunrise over a tranquil lake.',
  },
  {
    id: 25,
    image: 'https://via.placeholder.com/300/33A1FF/FFFFFF?text=Post+25',
    title: 'Country Road',
    description: 'A country road winding through the fields.',
  },
  {
    id: 26,
    image: 'https://via.placeholder.com/300/FF9A33/FFFFFF?text=Post+26',
    title: 'Canyon Depths',
    description: 'A deep canyon with rugged cliffs and a river below.',
  },
  {
    id: 27,
    image: 'https://via.placeholder.com/300/33FF9A/FFFFFF?text=Post+27',
    title: 'Forest Stream',
    description: 'A stream flowing gently through a lush forest.',
  },
  {
    id: 28,
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+28',
    title: 'Desert Oasis',
    description: 'An oasis in the middle of a vast desert.',
  },
  {
    id: 29,
    image: 'https://via.placeholder.com/300/5733FF/FFFFFF?text=Post+29',
    title: 'Majestic Waterfall',
    description: 'A majestic waterfall cascading down into a pool.',
  },
  {
    id: 30,
    image: 'https://via.placeholder.com/300/33A1FF/FFFFFF?text=Post+30',
    title: 'Countryside',
    description: 'The peaceful countryside with rolling hills and farms.',
  },
];

export const fetchData = (): Post[] => {
  let resultArr: Post[] = [];

  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * 29);
    resultArr.push({
      id: uuid.v4().toString(),
      title: postExamples[randomIndex].title,
      image: postExamples[randomIndex].image,
      description: postExamples[randomIndex].description,
    });
  }

  return resultArr;
};
