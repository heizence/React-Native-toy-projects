import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {RootStackParamList} from '../Navigator';
import {dummyData, ExampleType} from '../Types';

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({navigation}: MainProps) => {
  const [data, setData] = useState<ExampleType[]>(dummyData);

  // get data when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  useEffect(() => {
    console.log('');
  }, []);

  // get data API
  const getData = () => {};

  const renderItem = (item: ExampleType) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('SecondScreen', item);
        }}
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: '#f4f5f2',
          borderBottomWidth: 1,
          borderBottomColor: '#dbdbd9',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{marginTop: 5}}>
          {item.contents}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        //data={[]}
        renderItem={({item}) => renderItem(item)}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20}}>No notes</Text>
            </View>
          );
        }}
        contentContainerStyle={{}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Main;
