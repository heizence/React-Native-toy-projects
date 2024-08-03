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
import {fetchData, Feed} from '../DummyAPI';
import EachFeedComp from './EachFeedComp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {RootStackParamList} from '../Navigator';

type MainPageProps = NativeStackScreenProps<RootStackParamList, 'MainPage'>;

const MainPage = ({navigation, route}: MainPageProps) => {
  const [data, setData] = useState<Feed[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  const getData = () => {
    console.log('getData');
    let newData: Feed[] = fetchData();
    setData([...data, ...newData]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map(each => (
          <EachFeedComp
            key={each.id}
            id={each.id}
            user={each.user}
            user_profile={each.user_profile}
            image={each.image}
            title={each.title}
            description={each.description}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          //navigation.navigate(routes.AddFeed);
          navigation.navigate('AddFeed');
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

export default MainPage;
