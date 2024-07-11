// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {fetchData, Post} from '../DummyAPI';
import EachPost from './EachPost';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data: Post[] = fetchData();
    setPosts([...posts, ...data]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map(post => (
          <EachPost
            key={post.id}
            title={post.title}
            image={post.image}
            description={post.description}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          width: 80,
          height: 60,
          borderRadius: 10,
          backgroundColor: 'rgb(102, 153, 255)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          ADD
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Feed;
