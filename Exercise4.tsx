import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tContainer}>
        <View style={styles.grayBox} />
        <View style={styles.whiteBox} />
        <View style={styles.grayBox} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./Assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.bContainer}>
        <View style={styles.grayBox} />
        <View style={styles.whiteBox} />
        <View style={styles.grayBox} />
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    height: 115,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  bContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
    height: 115,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  grayBox: {
    backgroundColor: 'gray',
    width: 73,
    height: 73,
  },
  whiteBox: {
    backgroundColor: 'white',
    width: 73,
    height: 73,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  logo: {
    width: 380,
    height: 180,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
