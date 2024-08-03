// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {addFeed, Feed} from '../DummyAPI';
import {RootStackParamList} from '../Navigator';

type AddFeedProps = NativeStackScreenProps<RootStackParamList, 'AddFeed'>;

const AddFeed: React.FC<AddFeedProps> = ({navigation}) => {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUri, setImageUri] = useState<any>('');

  useEffect(() => {}, []);

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleSaveFeed = () => {
    const newFeed: Feed = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      user,
      user_profile:
        'https://images.unsplash.com/photo-1544723495-432537d6b63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2ZpbGV8ZW58MHx8fHwxNjU0OTAyMjg1&ixlib=rb-1.2.1&q=80&w=400',
      image: imageUri,
      title,
      description,
    };

    addFeed(newFeed);

    // Handle saving the feed, e.g., by navigating back and passing the new feed as a parameter
    navigation.navigate('MainPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          placeholder="User"
          value={user}
          onChangeText={setUser}
          style={styles.input}
        />

        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
        <Button title="Take Photo" onPress={handleTakePhoto} />
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Text>No Image Selected</Text>
        )}
        <Button title="Save Feed" onPress={handleSaveFeed} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default AddFeed;
