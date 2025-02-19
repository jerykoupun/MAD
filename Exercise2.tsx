import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';

const Exercise2 = () => {
  return (
    <>
      <View>
        <ImageBackground
          source={require('./Assets/Background.jpg')}
          style={styles.backgroudimage}
          imageStyle={{borderRadius: 9}}>
          <View>
            <Text style={styles.title}>MY PORTOFOLIO</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.img} source={require('./Assets/Myfoto.jpg')} />
      </View>
    </>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
  },
  backgroudimage: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
  },
  img: {
    width: 250,
    height: 250,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 250 / 2,
    borderColor: 'blue',
  },
});
