import React , {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import MainRoute from './src/common/MainRoute';

export default function App() {
  return (
    <View style={styles.container}>
      <MainRoute />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceae0",
  },
});