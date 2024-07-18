// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fetchData, Post} from '../DummyAPI';
import EachPost from './EachPost';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../Routes';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data: Post[] = fetchData();
    setPosts([...posts, ...data]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {posts.map(post => (
          <EachPost
            key={post.id}
            id={post.id}
            user={post.user}
            user_profile={post.user_profile}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.AddFeed);
        }}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Feed;
