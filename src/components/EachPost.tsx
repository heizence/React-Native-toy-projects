// src/components/Post.tsx
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

interface PostProps {
  title: string;
  image: string;
  description: string;
}

const EachPost: React.FC<PostProps> = ({title, image, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>{title}</Text>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  titleFont: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    padding: 10,
    fontSize: 16,
  },
});

export default EachPost;
