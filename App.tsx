import React from 'react';
import {StyleSheet} from 'react-native';
import FlatListItems from './components/FlatListItems';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <FlatListItems />
    </GestureHandlerRootView>
  );  
} 

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#D7CCC8',
    flex: 1,
  },
});
