import React, {useState} from 'react';
import data from '../data.json';
import Header from './Header';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ItemType } from '../types.d';

export default function FlatListItems() {
  const [groceriesData, setGroceriesData] = useState<ItemType[]>(data);

  const leftActions = () => {
    return (
      <View style={styles.actionsLeft}>
        <Text style={styles.leftActionText}> deleted </Text>
      </View>
    );
  };

  const rightActions = () => {
    return (
      <View style={styles.actionsLeft}>
        <Text style={styles.leftActionText}> deleted </Text>
      </View>
    );
  };

  const deleteItem = (item: ItemType) => {
    setGroceriesData((allData) => {
      return allData.filter(groceryItem => groceryItem.id !== item.id)
    })
  };

  const itemRenderer = ({item}: any) => {
    return (
      <Swipeable
        renderLeftActions={leftActions}
        onSwipeableLeftOpen={() => deleteItem(item)}
        renderRightActions={rightActions}
        onSwipeableRightOpen={() => deleteItem(item)}
        >
        <Text style={styles.textStyle}>{item.title}</Text>
      </Swipeable>
    );
  };

  return (
    <View>
      <FlatList data={groceriesData} renderItem={itemRenderer} ListHeaderComponent={<Header />} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    margin: 8,
    textAlign: 'center',
  },
  actionsLeft: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    borderWidth: 2,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    padding: 8,
    margin: 8,
  },
  leftActionText: {
    fontSize: 30,
    color: 'white',
  },
});
