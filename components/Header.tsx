import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header()  {
  return (
    <View>
      <Text style={styles.headerText}>Groceries List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
})