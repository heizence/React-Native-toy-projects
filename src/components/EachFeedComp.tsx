// src/components/Post.tsx
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigator';

type Props = {
  id: string;
  user: string;
  user_profile: string;
  image: string;
  title: string;
  description: string;
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'MainPage'
  >['navigation'];
};

const EachFeedComp = (props: Props) => {
  const {id, user, user_profile, image, title, description, navigation} = props;
  console.log('[EachFeedComp]check props : ', props.user);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('FeedDetail', {
          id,
          user,
          user_profile,
          image,
          title,
          description,
        });
      }}>
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

      {image && <Image source={{uri: image}} style={styles.image} />}
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
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

export default EachFeedComp;
