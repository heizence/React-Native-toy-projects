import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import {RootStackParamList} from '../Navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {actions} from '../Types';

type MainHeaderProps = NativeStackScreenProps<
  RootStackParamList,
  'EachNoteScreen'
>;

const MainHeader = (props: MainHeaderProps) => {
  const navigation = props.navigation; // useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>
          All Notes
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EachNoteScreen', {
              type: actions.ADD,
            });
          }}>
          <Image
            source={require('../assets/add.png')}
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
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 23,
    color: 'black',
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

export default MainHeader;
