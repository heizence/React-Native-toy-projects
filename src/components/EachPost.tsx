// src/components/Post.tsx
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {Post} from '../DummyAPI';

const EachPost: React.FC<Post> = ({
  id,
  user,
  user_profile,
  image,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          paddingHorizontal: 10,
        }}>
        <Image
          source={{uri: user_profile}}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            marginRight: 10,
          }}
        />
        <Text style={styles.userNameFont}>{user}</Text>
      </View>

      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  userNameFont: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  titleFont: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: '100%',
    height: 350,
  },
  description: {
    padding: 10,
    fontSize: 16,
  },
});

export default EachPost;
