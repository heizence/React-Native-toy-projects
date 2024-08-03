import uuid from 'react-native-uuid';

export type Feed = {
  id: string;
  user: string;
  user_profile: string;
  image: string;
  title: string;
  description: string;
};

const FeedExamples: Feed[] = [
  {
    id: '1',
    user: 'user1',
    user_profile:
      'https://images.unsplash.com/photo-1544723495-432537d6b63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2ZpbGV8ZW58MHx8fHwxNjU0OTAyMjg1&ixlib=rb-1.2.1&q=80&w=400',
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Post+1',
    title: 'Sunset Bliss',
    description: 'A mesmerizing sunset over the mountains.',
  },
  {
    id: '2',
    user: 'user1',
    user_profile:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHByb2ZpbGV8ZW58MHx8fHwxNjU0OTAyMjg1&ixlib=rb-1.2.1&q=80&w=400',
    image: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Post+2',
    title: 'City Lights',
    description: 'The city comes alive with lights at night.',
  },
];

export const addFeed = (feedInput: Feed) => {
  FeedExamples.push(feedInput);
};

export const fetchData = (): Feed[] => {
  let resultArr: Feed[] = [];

  for (let i = 0; i < FeedExamples.length; i++) {
    resultArr.push({
      id: uuid.v4().toString(),
      title: FeedExamples[i].title,
      user: FeedExamples[i].user,
      user_profile:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2ZpbGV8ZW58MHx8fHwxNjU0OTAyMjg1&ixlib=rb-1.2.1&q=80&w=400',
      image: FeedExamples[i].image,
      description: FeedExamples[i].description,
    });
  }

  return resultArr;
};
