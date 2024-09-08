import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

type headerProps = {
  title: string;
};

const Header = (props: headerProps) => {
  const [titleState, setTitleState] = useState<string>(props.title);
  const navigation = useNavigation();

  const changeTitle = (value: string) => {
    setTitleState(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/back.png')}
            style={styles.backBtnImg}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.title}
          numberOfLines={1}
          value={titleState}
          onChangeText={changeTitle}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deleteBtnImg}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  },
  backBtnImg: {
    width: 40,
    height: 40,
  },
  deleteBtnImg: {
    width: 25,
    height: 25,
  },
});

export default Header;
