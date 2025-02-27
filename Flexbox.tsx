import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redcontainer}></View>
        <View style={styles.greencontainer}></View>
        <View style={styles.bluecontainer}></View>
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // kiri ke kanan, kalau column atas ke bawa, kalau row-reverse kanan ke kiri, kalau column-reverse bawah ke atas.
    justifyContent: 'space-evenly', // main exis (flex-start, space-between, space-arround, space-evenly, center, flex-end).
    alignItems: 'center', // cross axis (flex-start, flex-end, center, space-between.
  },
  redcontainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greencontainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  bluecontainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
